const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI_ATLAS || 'mongodb+srv://14chenj92:Azsxdc56@cluster0.nlt3uh8.mongodb.net/?authMechanism=DEFAULT');

module.exports = mongoose.connection;
