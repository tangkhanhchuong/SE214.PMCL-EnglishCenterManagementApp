const KGenerateString = (length = 5, isUpper = false) => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    if(isUpper) result = result.toUpperCase();
    return result;
 }

 const KGenerateOnlyNumber = (length = 5, isUpper = false) => {
    var result           = '';
    var characters       = '0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    if(isUpper) result = result.toUpperCase();
    return result;
 }

 const KGenerateOnlyLetter = (length = 5, isUpper = false) => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    if(isUpper) result = result.toUpperCase();
    return result;
 }

 module.exports = {KGenerateString, KGenerateOnlyNumber, KGenerateOnlyLetter};
