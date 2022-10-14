"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDueDate = void 0;
const getDueDate = (entry) => {
    let date = entry['due_date'] || entry['DueDate'] || entry['due'] || entry['Due'];
    if (typeof date === "string") {
        try {
            date = new Date(date);
        }
        catch (error) {
            return null;
        }
    }
    if (typeof date === 'object') {
        try {
            return date.toISOString();
        }
        catch (err) {
            return null;
        }
    }
    return null;
};
exports.getDueDate = getDueDate;
//# sourceMappingURL=dateUtils.js.map