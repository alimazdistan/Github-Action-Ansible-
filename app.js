const express = require('express');
const app = express();
test
app.get('/', (req, res) => {
  res.send('Hello from EC2!!!!!!!!!!!!!!!!!!!!');
});

const PORT = 80;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
