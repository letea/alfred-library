// local modules
import { getInfoList } from "../getInfoList/index.js";

const getJsonConfig = ({ uid = "" } = {}) => {
  if (!uid) {
    throw `getJsonConfig: No uid.(${uid})`;
  }

  const infoList = getInfoList();

  // NOTE: Get jsonConfig
  let jsonConfig = infoList?.objects?.find(
    (item) => item?.type === "alfred.workflow.utility.json" && item?.uid === uid
  )?.config?.json;

  return jsonConfig && JSON.parse(jsonConfig);
};

export { getJsonConfig };
