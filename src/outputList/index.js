import { output } from "../output/index.js";

const outputList = ({ items = {} } = {}) => {
  output(
    JSON.stringify(
      {
        items
      },
      null,
      "\t"
    )
  );
};

export { outputList };
