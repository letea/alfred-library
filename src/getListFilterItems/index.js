// local modules
import { getListFilter } from "../getListFilter/index.js";

const getListFilterItems = ({ uid = "" } = {}) => {
  if (!uid) {
    throw `getListFilterItems: No uid.(${uid})`;
  }

  // NOTE: Get ListFilter Data
  const listFilter = getListFilter({
    uid
  });

  return listFilter?.config?.items && JSON.parse(listFilter?.config?.items);
};

export { getListFilterItems };
