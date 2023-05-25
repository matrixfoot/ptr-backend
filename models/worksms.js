const mongoose = require('mongoose');

const worksmsSchema = mongoose.Schema({
    userId: {
        type: String,
    },
    RECORDREFERENCE:{ type: String},
            BATCHIDENTIFICATION:{ type: String},
            BATCHSEQUENCENUMBER:{ type: String},
            TRANSACTIONSEQUENCENUMBER:{ type: String},
            MERCHANTIDENTIFICATION:{ type: String},
            BATCHSEQUENCENUMBER2:{ type: String},
            DRAFTNUMBER:{ type: String},
            MERCHANTACCOUNTNUMBER:{ type: String},
            BATCHAMOUNT:{ type: String},
            CURRENCYCODE:{ type: String},
            FILLER:{ type: String},
            TERMINALIDENTIFICATION:{ type: String},
            FILLER2:{ type: String},
            BATCHTRANSACTIONCOUNTER:{ type: String},
            BATCHPROCESSINGDATE:{ type: String},
            OPERATIONCODE:{ type: String},
            FILLER3:{ type: String},
            TERMINALTYPE:{ type: String},
            FILLER4:{ type: String},
            MERCHANTNAME:{ type: String},
            BATCHTRAILERINDICATOR:{ type: String},
  doctype: { type: String},
  created: { type: Date, default: Date.now },
  updated: { type: Date}
});
module.exports = mongoose.model('worksms', worksmsSchema);