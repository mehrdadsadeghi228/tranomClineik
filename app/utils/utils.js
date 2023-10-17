const ObjectId = require('mongoose').Types.ObjectId;


function codeERSali() {
    return Math.round(Math.random() * 100000)
}


function checkIsNumber(value) {
    if (typeof value === 'number') return true;
    return false
}
function isValidObjectId(id) {

    if (ObjectId.isValid(id)) {
        if ((String)(new ObjectId(id)) === id)
            return true;
        return false;
    }
    return false;
}



module.exports = {
    codeERSali,
    isValidObjectId,
    checkIsNumber,


}