const express = require('express');
const app = express();
const port = 9000;

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Kartik's Introduction</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        text-align: center;
                        padding: 50px;
                    }
                    h1 {
                        color: #333;
                    }
                </style>
            </head>
            <body>
                <h1>Hello, I'm Kartik!</h1>
                <p>I am a DevOps intern, passionate about automation and continuous integration.</p>
                <p>Welcome to my introduction page. Stay tuned for more updates! OKK </p>
            </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
