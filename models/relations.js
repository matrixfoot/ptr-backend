const mongoose = require('mongoose');

const relationSchema = mongoose.Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    
    mobile: {
        type: String,
    },
    ficheUrl: {
        type: String,
    },
    created: { type: Date, default: Date.now },
  updated: { type: Date}
});

module.exports = mongoose.model('Relation', relationSchema);