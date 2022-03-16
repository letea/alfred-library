// node modules
import fs from "fs";
import plist from "plist";

const setInfoList = ({ infoList, fileName = "info.plist" } = {}) => {
  if (!fileName) {
    throw `setInfoList: No fileName.(${fileName})`;
  }

  if (!infoList) {
    throw `setInfoList: No infoList.(${infoList})`;
  }

  // NOTE: Write infoList file
  fs.writeFileSync(fileName, plist.build(infoList));
};

export { setInfoList };
