import { output } from "../output";

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
