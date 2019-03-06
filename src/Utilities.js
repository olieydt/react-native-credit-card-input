export const removeNonNumber = (string = "") => string.replace(/[^\d]/g, "");
export const removeNonAlphaNum = (string = "") => string.replace( /[^a-zA-Z0-9]/g, "");
export const removeNonAlpha = (string = "") => string.replace( /[^a-zA-Z]/g, "");
export const removeLeadingSpaces = (string = "") => string.replace(/^\s+/g, "");