const mongoose = require('mongoose');
async function connect() {
    try {

        await mongoose.connect('crud-mongodb-shard-00-00.lbb0j.mongodb.net:27017', {
            seNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
        });
        console.log('db was Connected!');
    } catch (error) {
        console.log('Connect failure');

    }
}
module.exports = { connect };