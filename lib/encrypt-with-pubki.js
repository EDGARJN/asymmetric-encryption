const crypto = require('crypto');

exports.encryptMessage = (publicKey, message)=>{
    const encrypted = crypto.publicEncrypt({
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: 'sha256'
    }, Buffer.from(message));
    return encrypted.toString('base64');
}