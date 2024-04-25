const { encryptMessage } = require("../lib/encrypt-with-pubki");

exports.messageSender = (req,res)=>{
    var account_number = req.body.account_number;

    const pubKey = process.env.PUB_KEY

    // method for message encrption
    const encryptedData = encryptMessage(pubKey,account_number);
    res.status(200).json({"author":"EDGAR JN","message":`Encypted successfully: ${encryptedData}`});
}