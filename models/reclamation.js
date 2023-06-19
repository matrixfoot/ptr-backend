const mongoose = require('mongoose');

const reclamationSchema = mongoose.Schema({
  userId: {type: String},
  transactions:[],
  changements:[],
  created: { type: Date, default: Date.now },
  updated: { type: Date}
});
module.exports = mongoose.model('reclamation', reclamationSchema);