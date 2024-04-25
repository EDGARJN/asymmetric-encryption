const axpress = require("express");
const { decryptMessage } = require("../lib/decrypt-with-priv-key");

exports.messageReceiver = (req, res) => {
  var PRIVATE_KEY = process.env.PRIVATE_KEY;
  var encryptedData = req.body.encrypted_data;
  var plain_message = decryptMessage(PRIVATE_KEY, encryptedData);
  res
    .status(200)
    .json({
      author: "EDGAR JN",
      message: `Data decrypted successfully: ${plain_message}`,
    });
};
