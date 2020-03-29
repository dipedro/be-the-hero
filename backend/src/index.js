const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); //receber dados no body no formato json.
app.use(routes);

app.listen(3333);