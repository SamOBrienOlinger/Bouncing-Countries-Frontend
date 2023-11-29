const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'bouncing-countries-frontend', 'public')));

// Define API route for country information
app.get('/api/country/:countryName', async (req, res) => {
  const { countryName } = req.params;

  try {
    const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Serve the React app on all other routes
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '..', 'bouncing-countries-frontend', 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

