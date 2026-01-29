const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
const frontendOrigin = process.env.FRONTEND_ORIGIN || '*';
const corsOptions =
    frontendOrigin === '*' ? {} : { origin: frontendOrigin };
app.use(cors(corsOptions));
app.use(express.json());

const hasDatabaseConfig = Boolean(
    process.env.DB_USER &&
        process.env.DB_HOST &&
        process.env.DB_NAME &&
        process.env.DB_PASSWORD &&
        process.env.DB_PORT
);

const inMemoryInquiries = [];
let inMemoryId = 1;

// Database connection (optional for local dev)
const pool = hasDatabaseConfig
    ? new Pool({
          user: process.env.DB_USER,
          host: process.env.DB_HOST,
          database: process.env.DB_NAME,
          password: process.env.DB_PASSWORD,
          port: Number(process.env.DB_PORT),
      })
    : null;

// Test database connection
if (pool) {
    pool.connect((err, client, release) => {
        if (err) {
            console.error('Error connecting to database:', err.stack);
        } else {
            console.log('Connected to PostgreSQL database');
            release();
        }
    });
} else {
    console.warn('Database not configured. Using in-memory inquiries store.');
}

// POST endpoint - Submit form
app.post('/api/inquiries', async (req, res) => {
    const { name, phone, email, message } = req.body;

    // Validate input
    if (!name || !phone || !email || !message) {
        return res.status(400).json({
            error: 'Please provide name, phone, email, and message',
        });
    }

    if (!pool) {
        const inquiry = {
            id: inMemoryId++,
            name,
            phone,
            email,
            message,
            created_at: new Date().toISOString(),
        };
        inMemoryInquiries.unshift(inquiry);
        return res.status(201).json({
            message: 'Inquiry submitted successfully',
            inquiry,
        });
    }

    try {
        const result = await pool.query(
            'INSERT INTO inquiries (name, phone, email, message) VALUES ($1, $2, $3, $4) RETURNING *',
            [name, phone, email, message]
        );

        res.status(201).json({
            message: 'Inquiry submitted successfully',
            inquiry: result.rows[0],
        });
    } catch (error) {
        console.error('Error inserting inquiry:', error);
        res.status(500).json({ error: 'Failed to submit inquiry' });
    }
});

// GET endpoint - Get all inquiries
app.get('/api/inquiries', async (req, res) => {
    if (!pool) {
        return res.status(200).json({
            count: inMemoryInquiries.length,
            inquiries: inMemoryInquiries,
        });
    }

    try {
        const result = await pool.query(
            'SELECT * FROM inquiries ORDER BY created_at DESC'
        );

        res.status(200).json({
            count: result.rows.length,
            inquiries: result.rows,
        });
    } catch (error) {
        console.error('Error fetching inquiries:', error);
        res.status(500).json({ error: 'Failed to fetch inquiries' });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'Server is running' });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
