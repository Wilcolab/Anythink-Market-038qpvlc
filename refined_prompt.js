/**
 * Converts a given string to camelCase format.
 *
 * The function splits the input string by spaces, underscores, or hyphens,
 * then converts the first word to lowercase and capitalizes the first letter
 * of each subsequent word, joining them together without separators.
 *
 * @param {string} input - The string to convert to camelCase. Must be a non-null string.
 * @returns {string} The camelCase formatted string. Returns an empty string if input is empty or whitespace.
 * @throws {Error} Throws an error if the input is not a non-null string.
 *
 * @example
 * convertToCamelCase("this is a test"); // returns "thisIsATest"
 * convertToCamelCase("hello_world");    // returns "helloWorld"
 * convertToCamelCase("foo-bar-baz");    // returns "fooBarBaz"
 */


function convertToCamelCase(input) {
    if (typeof input !== 'string' || input === null || input === undefined) {
        throw new Error('Input must be a non-null string');
    }

    // Trim and handle empty string
    const trimmed = input.trim();
    if (trimmed.length === 0) return '';

    return trimmed
        .split(/[\s_\-]+/)
        .map((word, idx) => {
            if (idx === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Example usage:
// console.log(convertToCamelCase("this is a test")); // "thisIsATest"
// convertToCamelCase(5623); // Throws error

/**
 * Converts a given string to dot.case format.
 *
 * The function splits the input string by spaces, underscores, or hyphens,
 * converts all words to lowercase, and joins them using dots as separators.
 *
 * @param {string} input - The string to convert to dot.case. Must be a non-null string.
 * @returns {string} The dot.case formatted string. Returns an empty string if input is empty or whitespace.
 * @throws {Error} Throws an error if the input is not a non-null string.
 *
 * @example
 * convertToDotCase("this is a test"); // returns "this.is.a.test"
 * convertToDotCase("hello_world");    // returns "hello.world"
 * convertToDotCase("foo-bar-baz");    // returns "foo.bar.baz"
 */


function convertToDotCase(input) {
    if (typeof input !== 'string' || input === null || input === undefined) {
        throw new Error('Input must be a non-null string');
    }

    // Trim and handle empty string
    const trimmed = input.trim();
    if (trimmed.length === 0) return '';

    return trimmed
        .split(/[\s_\-]+/)
        .map(word => word.toLowerCase())
        .join('.');
}

// Example usage:
// console.log(convertToDotCase("this is a test")); // "this.is.a.test"

