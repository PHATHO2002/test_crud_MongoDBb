const mongoose = require('mongoose');
async function connect() {
    try {

        await mongoose.connect('mongodb://localhost:27017/crud', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000 // Tăng thời gian timeout
        });
        console.log('db was Connected!');
    } catch (error) {
        console.log('Connect failure');

    }
}
module.exports = { connect };