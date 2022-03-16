// node modules
import fs from "fs";
import plist from "plist";

const getInfoList = ({ fileName = "info.plist" } = {}) => {
  if (!fileName) {
    throw `getInfoList: No fileName.(${fileName})`;
  }

  // NOTE: Read infoList file
  const infoList = plist.parse(fs.readFileSync(fileName, "utf8"));

  return infoList;
};

export { getInfoList };
