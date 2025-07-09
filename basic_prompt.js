function toSnakeCase(text) {
    return text
        .replace(/([A-Z]+)/g, '_$1')
        .replace(/[\s\-]+/g, '_')
        .toLowerCase()
        .replace(/^_+|_+$/g, '');
}

module.exports = { toSnakeCase };
function toCamelCase(text) {
    return text
        .replace(/[\s\-_]+(.)?/g, (match, chr) => chr ? chr.toUpperCase() : '')
        .replace(/^(.)/, (match, chr) => chr.toLowerCase());
}

module.exports.toCamelCase = toCamelCase;