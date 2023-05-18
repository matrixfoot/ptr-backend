const mongoose = require('mongoose');


const contactSchema = mongoose.Schema({
  type: { type: String,default:'réclamation'},
  email: { type: String},
  emailenvoyea: { type: String},
  firstname: { type: String},
  lastname: { type: String},
  mobile: { type: String,  },
  ficheUrl: { type: String, required: false },
  description: { type: String,  },
  affecte: { type: String},
  dateaffectation: { type: String},
  created: { type: Date, default: Date.now },
  updated: { type: Date},
  dateouverturedossier:{type:Number},
  statutadmin:  [],
  statutcollab:  [],
});


module.exports = mongoose.model('Contact', contactSchema);