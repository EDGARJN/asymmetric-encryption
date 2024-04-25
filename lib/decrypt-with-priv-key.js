const crypto = require('crypto');

exports.decryptMessage = (privateKey, encryptedMessage)=>{
    const decrypted = crypto.privateDecrypt({
        key: privateKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: 'sha256'
    }, Buffer.from(encryptedMessage, 'base64'));
    return decrypted.toString();
}
