module.exports.RegexFilterTemplateForUsernames = function (Data) {
    return Data.replace("/[A-Za-z0-9-!_.@-]/g")
}
module.exports.RegexFilterTemplateForPasswords = function (Data) {
    return Data.replace("/[A-Za-z0-9-!+%&/()=?_.@-]/g")
}
module.exports.CustomRegexFilter = function (Data,RegexFilter = "[A-Za-z0-9]") {
    return Data.replace("/"+RegexFilter+"/g")
}