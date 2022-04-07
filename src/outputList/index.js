// node modules
import { argv } from "process";

// local modules
import { output } from "../output/index.js";

const outputList = ({ items = {}, matchKeys = [] } = {}) => {
  const inputMatch = ({ items = [], matchKeys = [] } = {}) => {
    const keywords = argv?.slice(2) || [];

    if (keywords.length === 0) {
      return items;
    }

    return items.filter((item) => {
      for (let key of matchKeys) {
        const value = item?.[key] || "";
        for (let keyword of keywords) {
          if (value.toLowerCase().indexOf(keyword.toLowerCase()) >= 0) {
            return true;
          }
        }
      }
      return false;
    });
  };

  output(
    JSON.stringify(
      {
        items: inputMatch({ items, matchKeys })
      },
      null,
      "\t"
    )
  );
};

export { outputList };
