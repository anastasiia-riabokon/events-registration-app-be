import {Schema, model} from "mongoose";

const eventSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  eventDate: {
    type: Date,
  },
  organizer: {
    type: String,
  },
});

const Event = model("event", eventSchema);

export default Event;
