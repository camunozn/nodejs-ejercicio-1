const express = require('express');
const morgan = require('morgan');
const app = express();
const userRoutes = require('./routes/user.routes');

app.use(morgan('tiny'));
app.use(express.json());

app.use('/users', userRoutes);

app.listen(8000, () => {
  console.log('Server running on port 8000');
});
