const express = require('express');
const morgan = require('morgan');
const app = express();
const exampleRoutes = require('./routes/user.routes');

const reqTime = (req, res, next) => {
  const date = Date.now();
  req.timestamp = date;
  next();
};

app.use(reqTime);
app.use(morgan('dev'));
app.use(express.json());

app.use(exampleRoutes);

app.listen(8000, () => {
  console.log('Server running on port 8000');
});

// const logger = (req, res, next) => {
//   const { method, path, ip, protocol } = req;
//   console.log({ method, path, ip, protocol });
//   next();
// };

// app.get("/", (req, res) => {
//   console.log(req.timestamp);
//   res.send("Respondiendo al get");
// });

// app.post("/", logger, (req, res) => {
//   res.send("Respondiendo al post");
// });

// app.put("/", logger, (req, res) => {
//   res.send("Respondiendo al put");
// });

// app.delete("/", logger, (req, res) => {
//   res.send("Respondiendo al delete");
// });
