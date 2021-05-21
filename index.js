const express = require('express');

const app = express();
const PORT = process.env.PORT || 4000

app.use('/visitor-info', require('./routes/visitor-info'));

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
})
