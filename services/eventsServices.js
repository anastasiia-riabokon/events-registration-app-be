import Event from "../models/Event.js";

export const listEvents = ({skip, limit, filter = {}}) =>
  Event.find(filter).skip(skip).limit(limit);
