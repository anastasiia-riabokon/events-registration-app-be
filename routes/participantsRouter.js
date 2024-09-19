import express from "express";
import {
  getAllParticipant,
  getFilterParticipant,
  postNewParticipant,
} from "../controllers/participantsControllers.js";
import validateBody from "../helpers/validateBody.js";
import {schemaParticipant} from "../schemas/participantSchema.js";
import isValidId from "../middleware/isValidId.js";

const newParticipantMiddleware = validateBody(schemaParticipant);

const participantsRouter = express.Router(schemaParticipant);

participantsRouter.get("/:id", isValidId, getAllParticipant);
participantsRouter.get("/:id/filter", isValidId, getFilterParticipant);
participantsRouter.post("/:id", isValidId, newParticipantMiddleware, postNewParticipant);

export default participantsRouter;
