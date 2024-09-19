import {isValidObjectId} from "mongoose";

import HttpError from "../helpers/HttpErrors.js";

const isValidId = (req, _, next) => {
  const {id} = req.params;

  if (!isValidObjectId(id)) next(HttpError(404, `${id} not valid id`));

  next();
};

export default isValidId;
