// local modules
import { getJsonConfig } from "../getJsonConfig/index.js";
import { setJsonConfig } from "../setJsonConfig/index.js";

const setJsonConfigVariables = ({ uid = "", variables } = {}) => {
  if (!uid) {
    throw `setJsonConfigVariables: No uid.(${uid})`;
  }

  if (!variables) {
    throw `setJsonConfigVariables: variables is not unavailable.(${variables})`;
  }

  // NOTE: Get jsonConfig
  const jsonConfig = getJsonConfig({
    uid
  });

  jsonConfig.alfredworkflow.variables = variables;

  // NOTE: Set jsonConfig
  setJsonConfig({
    uid,
    jsonConfig
  });
};

export { setJsonConfigVariables };
