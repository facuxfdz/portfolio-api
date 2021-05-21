const mongoose = require('mongoose');

require('dotenv').config({path: 'variables.env'});

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('\x1b[32m','DB connected successfully');
    } catch (error) {
        console.log('\x1b[31m',error);
        process.exit(1); // Stop app
    }
}

module.exports = connectDB;