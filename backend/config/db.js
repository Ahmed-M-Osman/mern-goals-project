const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = mongoose.connect('mongodb://localhost:27017/mernDB');

        console.log(`MongoDB Connected: ${(await conn).connection.host}`.cyan.underline)
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports = connectDB