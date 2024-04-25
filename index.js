const express = require('express');
const mainRouter = require('./routes/router');
require("dotenv/config");
const app = express();

app.use(express.json());
app.use('/api/',mainRouter);

const PORT = process.env.PORT;
app.listen(PORT,()=>{console.log(`Server running and listenning on port: ${PORT}`)});