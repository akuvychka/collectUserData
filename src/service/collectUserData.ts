/*
* Implement the method collectUserData for collecting the users input data(userEntries) into an IFormData object.
* Validation, security, error handling, etc of the data to be stored will be considered.
*
* */

import { getDescription } from "../utils/descriptionUtils";
import { getValidGUID } from "../utils/guidUtils";
import { getSubject } from "../utils/subjectUtils";
import { getPriority } from "../utils/priorityUtills";
import { getCritical } from "../utils/criticalUtils";
import { getDueDate } from "../utils/dateUtils";

interface IFormData {
  Id: string; // Must be GUID
  Subject: string;
  Description?: string;
  DueDate?: string; // Must be ISO date string
  Priority?: number; // Must be integer between 1 and 10
  Critical?: boolean | null;
}

export const collectUserData = (userEntries: any): IFormData => {
  if (typeof userEntries !== 'object' || Array.isArray(userEntries)) {
    throw new Error('Unprocessable entity');
  }
  let id = getValidGUID(userEntries);

  if (!id) {
    throw new Error('Unprocessable entity');
  }

  let sub = getSubject(userEntries);

  if (!sub) {
    throw new Error('Unprocessable entity');
  }

  let des = getDescription(userEntries);
  let date = getDueDate(userEntries);
  let priority = getPriority(userEntries);
  let critical = getCritical(userEntries);

  return {
    Id: id,
    Subject: sub,
    ...(des && { Description: des }),
    ...(date && { DueDate: date }),
    ...(priority && { Priority: priority }),
    ...(critical !== null && { Critical: critical }),
  }
}