const mongoose = require('mongoose');

const compconfSchema = mongoose.Schema({
    /*MERCHANTIDENTIFICATION: {
        type: String,
    },
    BATCHIDENTIFICATION: {
        type: String,
    },
    
    INVOICENUMBER: {
        type: String,
    },
    CARDHOLDERNUMBER: {
        type: String,
    },
    MERCHANTSECTOR: {
        type: String,
    },
    
    CHANNELTRANSACTIONID: {
        type: String,
    },
    OPERATIONCODE: {
        type: String,
    },
    TRANSACTIONCODE: {
        type: String,
    },
    
    TRANSACTIONAMOUNT: {
        type: String,
    },
    CARDEXPIRYDATE: {
        type: String,
    },
    PROCESSINGDATE: {
        type: String,
    },
    
    TRANSACTIONDATE: {
        type: String,
    },
    AUTHORIZATIONCODE: {
        type: String,
    },
    REMITTANCEDATE: {
        type: String,
    },
    
    MERCHANTCATEGORIECODE: {
        type: String,
    },
    FILLER: {
        type: String,
    },
    ACQUIRERBANKIDENTIFICATION: {
        type: String,
    },
    
    LOCALCARDSYSTEMNETWORK: {
        type: String,
    },
    ISSUERBANKIDENTIFICATION: {
        type: String,
    },
    ACQUIRERREFERENCENUMBER: {
        type: String,
    },
    
    TRANSACTIONORDERUSAGECODE: {
        type: String,
    },
    MERCHANTNAME: {
        type: String,
    },
    SETTLEMENTAMOUNT: {
        type: String,
    },
    
    TRANSACTIONTIME: {
        type: String,
    },
    FILLER2: {
        type: String,
    },
    ENDOFRECORD: {
        type: String,
    },
    
    CHARGEBACKREASONCODE: {
        type: String,
    },

      MERCHANTCATEGORIECODE: {
        type: String,
    },
    FILLER3: {
        type: String,
    },
    ACQUIRERBANKIDENTIFICATION: {
        type: String,
    },
    
    LOCALCARDSYSTEMNETWORK: {
        type: String,
    },
    ISSUERBANKIDENTIFICATION: {
        type: String,
    },
    ACQUIRERREFERENCENUMBER: {
        type: String,
    },
    
    TRANSACTIONORDERUSAGECODE: {
        type: String,
    },
    MERCHANTNAME2: {
        type: String,
    },
    SETTLEMENTAMOUNT2: {
        type: String,
    },
    
    TRANSACTIONTIME2: {
        type: String,
    },
    FILLER4: {
        type: String,
    },
    ENDOFRECORD2: {
        type: String,
    },
    
    CHARGEBACKREASONCODE2: {
        type: String,
    },




    CHARGEBACKTRANSACTIONCYCLE: {
        type: String,
    },
    MESSAGE: {
        type: String,
    },
    
    SETTLEMENTAMOUNT3: {
        type: String,
    },
    TRANSACTIONTIME3: {
        type: String,
    },
    FILLER5: {
        type: String,
    },
    
    ENDOFRECORD3: {
        type: String,
    },
    PRESENTMENTREASONCODE2nd: {
        type: String,
    },
    PRESENTMENTTRANSACTIONCYCLE2nd: {
        type: String,
    },
    
    MESSAGE2: {
        type: String,
    },
    SETTLEMENTAMOUNT4: {
        type: String,
    },
    TRANSACTIONTIME4: {
        type: String,
    },
    
    RESENTMENTINDICATOR2nd: {
        type: String,
    },
    FILLER6: {
        type: String,
    },
    ENDOFRECORD4: {
        type: String,
    },
    ficheUrl: {
        type: String,
    },*/ 
  userId: { type: String},
  compconfs:[],
  created: { type: Date, default: Date.now },
  updated: { type: Date}
});

module.exports = mongoose.model('compconf', compconfSchema);