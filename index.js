const express = require('express');
// const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Init express app
const app = express();

// Import routes


// DB connection
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true
// })
// .then(() => console.log("DB CONNECTED"))
// .catch((err) => console.log(`BROKEN DB CONNECTION: ${err}`));

// Middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

// Routes


// Server instance
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`APP IS RUNNING ON PORT ${PORT}`));
