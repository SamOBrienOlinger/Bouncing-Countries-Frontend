const express = require('express');
const cors = require('cors'); // Import the cors middleware
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3001;

// Middleware to parse JSON requests
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Define API route for country information
app.get('/api/country/:countryName', async (req, res) => {
  const { countryName } = req.params;

  try {
    // Use axios to fetch data from the REST Countries API
    const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);

    // Send the fetched data back to the frontend
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
