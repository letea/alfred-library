// local modules
import { getInfoList } from "../getInfoList/index.js";

const getListFilter = ({ uid = "" } = {}) => {
  if (!uid) {
    throw `getListFilter: No uid.(${uid})`;
  }

  // NOTE: Read infoList file
  const infoList = getInfoList();

  // NOTE: Get ListFilter Data
  const listFilter = infoList?.objects?.find(
    (item) =>
      item?.type === "alfred.workflow.input.listfilter" && item?.uid === uid
  );

  return listFilter;
};

export { getListFilter };
