const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://14chenj92:Azsxdc56@cluster0.nlt3uh8.mongodb.net/?authMechanism=DEFAULT/programming-thoughts');

module.exports = mongoose.connection;
