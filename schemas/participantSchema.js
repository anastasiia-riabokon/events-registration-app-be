import Joi from "joi";
import {regexEmail, regexFullName, sourceList} from "../constants/participantConstants.js";

export const schemaParticipant = Joi.object({
  fullName: Joi.string().pattern(regexFullName).required(),
  email: Joi.string().pattern(regexEmail).required(),
  dateBirth: Joi.date().required(),
  source: Joi.valid(...sourceList).required(),
});
