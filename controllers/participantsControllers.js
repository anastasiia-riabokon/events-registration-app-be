import ctrlWrapper from "../helpers/ctrlWrapper.js";
import * as participantServices from "../services/participantsServices.js";

export const getAllParticipant = ctrlWrapper(async (req, res) => {
  const {id: eventId} = req.params;

  const result = await participantServices.participantList({eventId});
  res.json(result);
});

export const getFilterParticipant = ctrlWrapper(async (req, res) => {
  const {id: eventId} = req.params;
  const {fullName, email} = req.query;
  const filter = {eventId};

  if (fullName) filter.fullName = fullName;
  if (email) filter.email = email;

  const result = await participantServices.participantList(filter);
  res.json(result);
});

export const postNewParticipant = ctrlWrapper(async (req, res) => {
  const {id: eventId} = req.params;
  const newParticipant = {...req.body, eventId};

  const result = await participantServices.addParticipant(newParticipant);

  res.status(201).json(result);
});
