// local modules
import { getJsonConfig } from "../getJsonConfig/index.js";

const getJsonConfigVariables = ({ uid = "" } = {}) => {
  if (!uid) {
    throw `getJsonConfigVariables: No uid.(${uid})`;
  }

  const jsonConfig = getJsonConfig({
    uid
  });

  return jsonConfig?.alfredworkflow?.variables;
};

export { getJsonConfigVariables };
