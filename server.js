const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});