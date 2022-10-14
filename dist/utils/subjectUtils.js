"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSubject = void 0;
const getSubject = (entry) => {
    let sub = entry['subject'] || entry['Subject'];
    if (typeof sub !== 'string') {
        throw new Error('Entity might be broken');
    }
    return sub;
};
exports.getSubject = getSubject;
//# sourceMappingURL=subjectUtils.js.map