const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors'); // Import cors for handling CORS
const path = require('path'); // Import path for serving static files
require('dotenv').config();

const app = express();
const port = 3000; // Set the port to 3000

// Enable CORS
app.use(cors());
app.use(bodyParser.json());
// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../public')));


// Handle POST requests to /get-benefits
app.post('/get-benefits', async (req, res) => {
    const prompt = req.body.prompt;

    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: prompt }]
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error communicating with OpenAI API:', error.response ? error.response.data : error.message);
        res.status(500).send('Error communicating with OpenAI API');
    }    
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
