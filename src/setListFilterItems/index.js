// local modules
import { getListFilter } from "../getListFilter/index.js";
import { setListFilter } from "../setListFilter/index.js";

const setListFilterItems = ({ uid = "", items = [] } = {}) => {
  if (!uid) {
    throw `setListFilterItems: No uid.(${uid})`;
  }

  // NOTE: Get ListFilter
  const listFilter = getListFilter({
    uid
  });

  listFilter.config.items = JSON.stringify(items);

  // NOTE: Write infoList to file.
  setListFilter({
    uid,
    listFilter
  });
};

export { setListFilterItems };
