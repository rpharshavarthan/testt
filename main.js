const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 80;


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});