// node modules
import fs from "fs";
import plist from "plist";

const setListFilterItems = ({
  listFilterKeyword = "",
  fileName = "",
  items = []
}) => {
  if (!fileName) {
    throw `setListFilterItems: No fileName.(${fileName})`;
  }

  if (!listFilterKeyword) {
    throw `setListFilterItems: No listFilterKeyword.(${listFilterKeyword})`;
  }

  // NOTE: Read infoList file
  const infoList = plist.parse(fs.readFileSync(fileName, "utf8"));

  // NOTE: Set items to infoList
  const listFilterIndex = infoList?.objects?.findIndex(
    (item) => item?.config?.items && item?.config?.keyword === listFilterKeyword
  );
  infoList.objects[listFilterIndex].config.items = JSON.stringify(items);

  // NOTE: Write infoList to file.
  fs.writeFileSync(fileName, plist.build(infoList));
};

export { setListFilterItems };
