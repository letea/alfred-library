// local modules
import { getInfoList } from "../getInfoList/index.js";
import { setInfoList } from "../setInfoList/index.js";

const setJsonConfig = ({ uid = "", jsonConfig } = {}) => {
  if (!uid) {
    throw `setJsonConfig: No uid.(${uid})`;
  }

  if (
    !jsonConfig ||
    !jsonConfig?.alfredworkflow?.arg ||
    !jsonConfig?.alfredworkflow?.config ||
    !jsonConfig?.alfredworkflow?.variables
  ) {
    throw `setJsonConfig: the format of jsonConfig is not suitable.(${jsonConfig})`;
  }

  // NOTE: Get jsonConfig
  const infoList = getInfoList();
  const jsonConfigIndex = infoList?.objects?.findIndex(
    (item) => item?.type === "alfred.workflow.utility.json" && item?.uid === uid
  );

  if (jsonConfigIndex >= 0) {
    infoList.objects[jsonConfigIndex].config.json = JSON.stringify(jsonConfig);
    setInfoList({
      infoList
    });
  } else {
    throw `setJsonConfig: can not find the specified jsonConfig.`;
  }
};

export { setJsonConfig };
