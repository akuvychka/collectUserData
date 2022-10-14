"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCritical = void 0;
const getCritical = (entry) => {
    let value = entry['critical'] || entry['Critical'] || entry['crit'] || entry['Crit'];
    if (typeof value === 'boolean') {
        return value;
    }
    if (typeof value === 'string') {
        if (value === 'true' || value === 'True' || value === 'T') {
            return true;
        }
        if (value === 'false' || value === 'False' || value === 'F') {
            return false;
        }
    }
    return null;
};
exports.getCritical = getCritical;
//# sourceMappingURL=criticalUtils.js.map