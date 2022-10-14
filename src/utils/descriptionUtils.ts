export const getDescription = (entry: Object):string|null => {
    let desc = entry['description'] || entry['Description'] || entry['desc'] || entry['Desc'];

    if (typeof desc !== 'string'){
        return null;
    }

    return desc;
}