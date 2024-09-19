import {Schema, model} from "mongoose";

import {regexEmail, regexFullName, sourceList} from "../constants/participantConstants.js";

const participantSchema = new Schema(
  {
    fullName: {
      type: String,
      match: regexFullName,
      required: [true, "Full name is required"],
    },

    email: {
      type: String,
      match: regexEmail,
      required: [true, "Email is required"],
    },

    dateBirth: {
      type: Date,
      required: [true, "Date of birth is required"],
    },
    source: {
      type: String,
      enum: sourceList,
      required: [true, "Select a source"],
    },
    eventId: {
      type: Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },
  },
  {versionKey: false}
);

const Participant = model("participant", participantSchema);

export default Participant;
