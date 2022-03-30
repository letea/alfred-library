const output = (query) => {
  if (typeof query === "string") {
    process.stdout.write(query);
  } else {
    process.stdout.write(JSON.stringify(query));
  }
};

export { output };
