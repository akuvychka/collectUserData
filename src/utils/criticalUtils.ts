export const getCritical = (entry: Object):boolean|null => {
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
}