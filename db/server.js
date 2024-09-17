const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { UsersRoutes } = require('./users/users.routes');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/users', UsersRoutes)


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
