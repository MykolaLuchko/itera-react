export const createArray = (length, callback = (i) => 0) => {
  return [...new Array(length)].map((_, i) => callback(i));
};
