"use strict";
/*
* Implement the method collectUserData for collecting the users input data(userEntries) into an IFormData object.
* Validation, security, error handling, etc of the data to be stored will be considered.
*
* */
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectUserData = void 0;
const descriptionUtils_1 = require("../utils/descriptionUtils");
const guidUtils_1 = require("../utils/guidUtils");
const subjectUtils_1 = require("../utils/subjectUtils");
const priorityUtills_1 = require("../utils/priorityUtills");
const criticalUtils_1 = require("../utils/criticalUtils");
const dateUtils_1 = require("../utils/dateUtils");
const collectUserData = (userEntries) => {
    if (typeof userEntries !== 'object' || Array.isArray(userEntries)) {
        throw new Error('Unprocessable entity');
    }
    let id = (0, guidUtils_1.getValidGUID)(userEntries);
    if (!id) {
        throw new Error('Unprocessable entity');
    }
    let sub = (0, subjectUtils_1.getSubject)(userEntries);
    if (!sub) {
        throw new Error('Unprocessable entity');
    }
    let des = (0, descriptionUtils_1.getDescription)(userEntries);
    let date = (0, dateUtils_1.getDueDate)(userEntries);
    let priority = (0, priorityUtills_1.getPriority)(userEntries);
    let critical = (0, criticalUtils_1.getCritical)(userEntries);
    return Object.assign(Object.assign(Object.assign(Object.assign({ Id: id, Subject: sub }, (des && { Description: des })), (date && { DueDate: date })), (priority && { Priority: priority })), (critical !== null && { Critical: critical }));
};
exports.collectUserData = collectUserData;
//# sourceMappingURL=collectUserData.js.map