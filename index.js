const express = require('express');
const connectDB = require('./config/db');
const app = express();
const cors = require('cors');

connectDB(); // DB Connection
const PORT = process.env.PORT || 4000

app.use(express.json({extended: true}));

app.use(cors());
//Endpoints
app.use('/visitor-info', require('./routes/visitor-info'));
app.use('/owner-info',require('./routes/owner-info'));


app.listen(PORT, () => {
    console.log(' Server on port', '\x1b[33m', `${PORT}`);
});
