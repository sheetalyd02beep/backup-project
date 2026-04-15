const fs = require('fs');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  fs.writeFileSync('/data/file.txt', 'Backup + Cloud working!');
  res.send('App running with Docker + Cloud!');
});

app.listen(PORT, () => console.log("Running"));