const express = require('express');
const favicon = require('express-favicon');
const path = require('path');

require('dotenv').config();

const port = process.env.PORT;
const app = express();
app.use(favicon(__dirname + '/build/favicon.svg'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port, () => {
  console.log(`APP Running on port ${port}`);
});