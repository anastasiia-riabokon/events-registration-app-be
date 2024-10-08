import ctrlWrapper from "../helpers/ctrlWrapper.js";
import * as eventsServices from "../services/eventsServices.js";

export const getAllEvents = ctrlWrapper(async (req, res) => {
  const {page = 1, limit = 12} = req.query;
  const skip = (page - 1) * limit;

  const total = await eventsServices.countEvents();
  const totalPages = Math.ceil(total / limit);

  const result = await eventsServices.listEvents({skip, limit});
  res.json({total, totalPages, result});
});

export const getFilterEvents = ctrlWrapper(async (req, res) => {
  const {organizer} = req.query;

  const filter = {};

  if (organizer) filter.organizer = organizer;

  const result = await eventsServices.listEvents({filter});
  res.json(result);
});

export const getOrganizer = ctrlWrapper(async (req, res) => {
  const result = await eventsServices.listEvents({});
  const organizer = result.map((item) => item.organizer);
  res.json(organizer);
});
