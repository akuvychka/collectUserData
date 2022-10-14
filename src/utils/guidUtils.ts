const GUID_POSSIBLE_KEYS = ['id', 'Id', 'ID', 'guid', 'Guid', 'GUID'];
export const getValidGUID = (entry: Object):string|null => {
    var pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

    let guid = null;

    GUID_POSSIBLE_KEYS.forEach((key) => {
        let tmpGuid = entry[key];

        if (tmpGuid) {
            if (typeof tmpGuid !== 'string' || !pattern.test(tmpGuid)){
                throw new Error('Entity might be broken');
            }
            if (guid) {
                if (tmpGuid !== guid) {
                    throw new Error('Entity possibly was hacked');
                }
            } else {
                guid = tmpGuid;
            }
        }
    });

    return guid;
}