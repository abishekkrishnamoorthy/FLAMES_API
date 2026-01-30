const express = require('express');
const app = express();
const port = 3000;
const connectdb = require('./config/db');

connectdb();
app.use(express.json());

app.use('/api', require('./routes/Data'));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});