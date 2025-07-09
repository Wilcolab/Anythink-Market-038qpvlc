function toKebabCaseComplex(str) {
    // Step 1: Insert spaces between lowercase and uppercase letters (camelCase)
    const withSpaces = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    // Step 2: Replace all spaces with hyphens
    const withHyphens = withSpaces.replace(/\s+/g, '-');
    // Step 3: Convert to lowercase
    return withHyphens.toLowerCase();
}

/**
 * Converts a string to kebab-case.
 * Replaces all spaces with hyphens and converts to lowercase.
 * @param {string} str
 * @returns {string}
 */
function toKebabCase(str) {
    return str.replace(/\s+/g, '-').toLowerCase();
}

module.exports = toKebabCase;