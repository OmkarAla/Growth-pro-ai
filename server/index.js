const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: ['http://localhost:5173', 'https://growth-pro-ai-sandy.vercel.app/'] }));
app.use(express.json());

// Simulated SEO headlines
const headlines = [
  "{name} is {location}'s Top Choice for 2025!",
  "Discover {name}: {location}'s Premier Destination",
  "Why {name} Shines in {location} This Year",
  "{name} in {location}: Your Go-To Spot in 2025",
  "Experience Excellence at {name} in {location}",
];

// POST /business-data
app.post('/business-data', (req, res) => {
  const { name, location } = req.body;
  if (!name || !location) {
    return res.status(400).json({ error: 'Name and location are required' });
  }
  const headline = headlines[Math.floor(Math.random() * headlines.length)]
    .replace('{name}', name)
    .replace('{location}', location);
  res.json({
    rating: 4.3, // Simulated
    reviews: 127, // Simulated
    headline,
    name,
    location
  });
});

// GET /regenerate-headline
app.get('/regenerate-headline', (req, res) => {
  const { name, location } = req.query;
  const headline = headlines[Math.floor(Math.random() * headlines.length)]
    .replace('{name}', name || 'Business')
    .replace('{location}', location || 'Your City');
  res.json({ headline });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});