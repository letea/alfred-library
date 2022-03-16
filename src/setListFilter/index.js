// local modules
import { setInfoList } from "../setInfoList/index.js";
import { getInfoList } from "../getInfoList/index.js";

const setListFilter = ({ uid = "", listFilter } = {}) => {
  if (!uid) {
    throw `setListFilter: No uid.(${uid})`;
  }

  if (!listFilter) {
    throw `setListFilter: the format of listFilter is not suitable.(${jsonConfig})`;
  }

  // NOTE: Get InfoList
  const infoList = getInfoList();

  // NOTE: Get & Set listFilter
  const listFilterIndex = infoList?.objects?.findIndex(
    (item) =>
      item?.type === "alfred.workflow.input.listfilter" && item?.uid === uid
  );
  infoList.objects[listFilterIndex] = listFilter;

  // NOTE: Write infoList to file.
  setInfoList({
    infoList
  });
};

export { setListFilter };
