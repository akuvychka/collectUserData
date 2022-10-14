export const getSubject = (entry: Object):string|null => {
    let sub = entry['subject'] || entry['Subject'];

    if (typeof sub !== 'string'){
        throw new Error('Entity might be broken');
    }

    return sub;
}