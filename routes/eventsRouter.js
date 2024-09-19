import express from "express";
import {getAllEvents, getFilterEvents} from "../controllers/eventsControllers.js";

const eventsRouter = express.Router();

eventsRouter.get("/", getAllEvents);
eventsRouter.get("/filter", getFilterEvents);

export default eventsRouter;
