const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
const frontendOrigin = process.env.FRONTEND_ORIGIN || '*';
const allowedOrigins = frontendOrigin
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);
const corsOptions =
    frontendOrigin === '*' || allowedOrigins.length === 0
        ? {}
        : {
              origin: (origin, callback) => {
                  if (!origin || allowedOrigins.includes(origin)) {
                      return callback(null, true);
                  }
                  return callback(new Error('Not allowed by CORS'));
              },
          };
app.use(cors(corsOptions));
app.use(express.json());

const adminPassword = process.env.ADMIN_PASSWORD;

const requireAdminPassword = (req, res, next) => {
    if (!adminPassword) {
        return res
            .status(500)
            .json({ error: 'Admin password is not configured.' });
    }

    const providedPassword = req.headers['x-admin-password'];
    if (providedPassword !== adminPassword) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    return next();
};

const hasDatabaseConfig = Boolean(
    process.env.DB_USER &&
        process.env.DB_HOST &&
        process.env.DB_NAME &&
        process.env.DB_PASSWORD &&
        process.env.DB_PORT
);
const databaseUrl = process.env.DATABASE_URL;

const inMemoryInquiries = [];
let inMemoryId = 1;

// Database connection (optional for local dev)
const pool = databaseUrl
    ? new Pool({
          connectionString: databaseUrl,
          ssl: { rejectUnauthorized: false },
      })
    : hasDatabaseConfig
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
app.get('/api/inquiries', requireAdminPassword, async (req, res) => {
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

// Mock MLS-style listings (replace with real MLS/IDX integration)
const mockListings = [
    {
        id: '1',
        mlsNumber: 'GA-10234567',
        address: '15103 Highway 19 N',
        city: 'Cleveland',
        state: 'GA',
        zip: '30528',
        price: 639000,
        beds: 2,
        baths: 3,
        sqft: 2316,
        imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600',
        lat: 34.5979,
        lng: -83.7632,
        listedAt: '2026-02-20',
        hasVirtualTour: true,
        source: 'GAMLS/Re/Max Classic',
    },
    {
        id: '2',
        mlsNumber: 'VA-9876543',
        address: '4521 Seminary Rd',
        city: 'Alexandria',
        state: 'VA',
        zip: '22304',
        price: 735000,
        beds: 4,
        baths: 3,
        sqft: 2640,
        imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600',
        lat: 38.8268,
        lng: -77.0962,
        listedAt: '2026-02-18',
        hasVirtualTour: false,
        source: 'BRIGHT IDX/Northern VA',
    },
    {
        id: '3',
        mlsNumber: 'VA-11223344',
        address: '2200 N Pershing Dr',
        city: 'Arlington',
        state: 'VA',
        zip: '22201',
        price: 515000,
        beds: 2,
        baths: 2,
        sqft: 1180,
        imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600',
        lat: 38.8816,
        lng: -77.091,
        listedAt: '2026-02-15',
        hasVirtualTour: true,
        source: 'BRIGHT IDX/Serhant',
    },
    {
        id: '4',
        mlsNumber: 'VA-55667788',
        address: '13821 Minnieville Rd',
        city: 'Woodbridge',
        state: 'VA',
        zip: '22193',
        price: 645000,
        beds: 3,
        baths: 2,
        sqft: 1920,
        imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600',
        lat: 38.6582,
        lng: -77.2497,
        listedAt: '2026-02-21',
        hasVirtualTour: false,
        source: 'NVAR/Northern Virginia',
    },
    {
        id: '5',
        mlsNumber: 'VA-99887766',
        address: '1600 Wilson Blvd',
        city: 'Arlington',
        state: 'VA',
        zip: '22209',
        price: 295000,
        beds: 1,
        baths: 1,
        sqft: 720,
        imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600',
        lat: 38.8965,
        lng: -77.0722,
        listedAt: '2026-02-20',
        hasVirtualTour: true,
        source: 'BRIGHT IDX/Serhant',
    },
    {
        id: '6',
        mlsNumber: 'VA-44332211',
        address: '901 N Stuart St',
        city: 'Arlington',
        state: 'VA',
        zip: '22203',
        price: 259000,
        beds: 2,
        baths: 1,
        sqft: 980,
        imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600',
        lat: 38.8826,
        lng: -77.0895,
        listedAt: '2026-02-20',
        hasVirtualTour: false,
        source: 'NVAR/Northern Virginia',
    },
];

// GET listings with search/filter (MLS search)
app.get('/api/listings', (req, res) => {
    const { q, mls, minPrice, maxPrice, beds, baths, city, zip, limit = 20, offset = 0 } = req.query;

    let results = [...mockListings];

    if (q && String(q).trim()) {
        const term = String(q).trim().toLowerCase();
        results = results.filter(
            (l) =>
                l.address.toLowerCase().includes(term) ||
                l.city.toLowerCase().includes(term) ||
                l.state.toLowerCase().includes(term) ||
                l.zip.includes(term) ||
                l.mlsNumber.toLowerCase().includes(term)
        );
    }
    if (mls && String(mls).trim()) {
        const mlsTerm = String(mls).trim().toLowerCase();
        results = results.filter((l) => l.mlsNumber.toLowerCase().includes(mlsTerm));
    }
    if (minPrice != null && minPrice !== '') {
        const min = Number(minPrice);
        if (!Number.isNaN(min)) results = results.filter((l) => l.price >= min);
    }
    if (maxPrice != null && maxPrice !== '') {
        const max = Number(maxPrice);
        if (!Number.isNaN(max)) results = results.filter((l) => l.price <= max);
    }
    if (beds != null && beds !== '') {
        const b = Number(beds);
        if (!Number.isNaN(b)) results = results.filter((l) => l.beds >= b);
    }
    if (baths != null && baths !== '') {
        const b = Number(baths);
        if (!Number.isNaN(b)) results = results.filter((l) => l.baths >= b);
    }
    if (city && String(city).trim()) {
        const c = String(city).trim().toLowerCase();
        results = results.filter((l) => l.city.toLowerCase().includes(c));
    }
    if (zip && String(zip).trim()) {
        const z = String(zip).trim();
        results = results.filter((l) => l.zip.includes(z));
    }

    const total = results.length;
    const limitNum = Math.min(Math.max(Number(limit) || 20, 1), 100);
    const offsetNum = Math.max(Number(offset) || 0, 0);
    const paginated = results.slice(offsetNum, offsetNum + limitNum);

    res.json({
        total,
        limit: limitNum,
        offset: offsetNum,
        listings: paginated,
    });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'Server is running' });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
