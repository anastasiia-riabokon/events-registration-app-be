import HttpError from "../helpers/HttpErrors.js";
import Participant from "../models/Participant.js";

export const participantOne = (participant) => Participant.findOne(participant);

export const participantList = (filter) => Participant.find(filter);

export const addParticipant = async (data) => {
  const {email} = data;
  const registeredEmail = await participantOne({email});

  if (registeredEmail) throw HttpError(409, "Participant with this email already exists");

  return Participant.create(data);
};
