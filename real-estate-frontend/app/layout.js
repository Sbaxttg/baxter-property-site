import './globals.css';
import Header from './components/Header';
import SplashScreen from './components/SplashScreen';

export const metadata = {
  title: 'Baxter Property Solutions',
  description: 'Submit your contact details and real estate inquiry.',
  icons: {
    icon: '/logo5.jpg',
    apple: '/logo5.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SplashScreen />
        <Header />
        {children}
      </body>
    </html>
  );
}
