import express from "express";
import {getAllEvents, getFilterEvents, getOrganizer} from "../controllers/eventsControllers.js";

const eventsRouter = express.Router();

eventsRouter.get("/", getAllEvents);
eventsRouter.get("/filter", getFilterEvents);
eventsRouter.get("/organizers", getOrganizer);

export default eventsRouter;
