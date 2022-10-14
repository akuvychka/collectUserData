const REG_NUMBERS_ONLY = /^\d+$/;

export const getPriority = (entry: Object):number => {
    let priority = entry['priority'] || entry['Priority'];
    if (typeof priority === 'number') {
        if (priority >= 1 && priority <= 10) {
            return priority
        }
        return 0;
    }
    if (typeof priority === "string" && REG_NUMBERS_ONLY.test(priority)) {
        try {
            priority = parseInt(priority);
            if (priority >= 1 && priority <= 10) {
                return priority
            }
            return 0;
        } catch (error) {
            return 0;
        }
    }

    return 0;
}