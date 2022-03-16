// local modules
import { getInfoList } from "../getInfoList/index.js";
import { setInfoList } from "../setInfoList/index.js";

const setListFilterItems = ({ listFilterKeyword = "", items = [] } = {}) => {
  if (!listFilterKeyword) {
    throw `setListFilterItems: No listFilterKeyword.(${listFilterKeyword})`;
  }

  // NOTE: Read infoList file
  const infoList = getInfoList();

  // NOTE: Set items to infoList
  const listFilterIndex = infoList?.objects?.findIndex(
    (item) => item?.config?.items && item?.config?.keyword === listFilterKeyword
  );
  infoList.objects[listFilterIndex].config.items = JSON.stringify(items);

  // NOTE: Write infoList to file.
  setInfoList({
    infoList
  });
};

export { setListFilterItems };
