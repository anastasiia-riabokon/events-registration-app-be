import ctrlWrapper from "../helpers/ctrlWrapper.js";
import * as eventsServices from "../services/eventsServices.js";

export const getAllEvents = ctrlWrapper(async (req, res) => {
  const {page = 1, limit = 12} = req.query;
  const skip = (page - 1) * limit;

  const quantityEvents = await eventsServices.countEvents();

  const result = await eventsServices.listEvents({skip, limit});
  res.json({quantityEvents, result});
});

export const getFilterEvents = ctrlWrapper(async (req, res) => {
  const {organizer} = req.query;

  const filter = {};

  if (organizer) filter.organizer = organizer;

  const result = await eventsServices.listEvents({filter});
  res.json(result);
});
