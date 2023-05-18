const mongoose = require('mongoose');

const fichier137Schema = mongoose.Schema({
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

module.exports = mongoose.model('Fichier137', fichier137Schema);