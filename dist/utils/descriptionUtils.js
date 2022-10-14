"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDescription = void 0;
const getDescription = (entry) => {
    let desc = entry['description'] || entry['Description'] || entry['desc'] || entry['Desc'];
    if (typeof desc !== 'string') {
        return null;
    }
    return desc;
};
exports.getDescription = getDescription;
//# sourceMappingURL=descriptionUtils.js.map