require('dotenv').config();
const mongoose = require('mongoose');
async function connect() {
    try {

        await mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@crud-mongodb.lbb0j.mongodb.net/${process.env.MONGO_DATABASE}`);
        console.log('db was Connected!');
    } catch (error) {
        console.log(error);

        console.log('Connect failure');

    }
}
module.exports = { connect };