const mongoose = require('mongoose');
async function connect() {
    try {

        await mongoose.connect('mongodb+srv://phatho1508:%3Cdb_password%3E@crud-mongodb.lbb0j.mongodb.net/', {
            seNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
        });
        console.log('db was Connected!');
    } catch (error) {
        console.log('Connect failure');

    }
}
module.exports = { connect };