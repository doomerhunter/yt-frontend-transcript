const express = require('express');
const { exec } = require('child_process');
const path = require('path');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '..')));

// Execute command endpoint
app.post('/execute', (req, res) => {
    const { url, lang } = req.body;
    
    // Validate inputs
    if (!url || !lang) {
        return res.status(400).send('Missing required parameters');
    }

    // Sanitize inputs to prevent command injection
    const sanitizedUrl = url.replace(/[;&|`$()]/g, '');
    const sanitizedLang = lang.replace(/[^a-zA-Z]/g, '');

    // Execute command
    exec(`./yt -lang ${sanitizedLang} ${sanitizedUrl}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error}`);
            return res.status(500).send(error.message);
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return res.status(500).send(stderr);
        }
        res.send(stdout);
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
