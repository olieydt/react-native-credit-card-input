export const removeNonNumber = (string = "") => string.replace(/[^\d]/g, "");
export const removeNonAlphaNum = (string = "") => string.replace(/\W/g, "");
export const removeLeadingSpaces = (string = "") => string.replace(/^\s+/g, "");