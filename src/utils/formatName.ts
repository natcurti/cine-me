export const formatName = (value: string) => {
  let name = [...value.split(" ")];
  name = name.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1, word.length)
  );

  const nameWithUpperCase = name.toString().replace(/,/g, " ");

  return nameWithUpperCase;
};
