export const getDueDate = (entry: Object):string|null => {
    let date = entry['due_date'] || entry['DueDate'] || entry['due'] || entry['Due'];
    if (typeof date === "string") {
        try {
            date = new Date(date);
        } catch (error) {
            return null;
        }
    }
    if (typeof date === 'object') {
        try {
           return date.toISOString();
        } catch (err) {
            return null;
        }
    }

    return null;
}