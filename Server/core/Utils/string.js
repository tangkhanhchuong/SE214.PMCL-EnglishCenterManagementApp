const ConvertToSnakeCase = (str) => {
    if (!str || str.length === 0) return ""
    return str[0].toLowerCase() +
        str.slice(1, str.length)
            .replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`)
}


module.exports = {
    ConvertToSnakeCase,

}