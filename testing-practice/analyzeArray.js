const analyzeArray = (array) => {
  const avg = Math.round(
    array.reduce((current, item) => {
      return current + item;
    }, 0) / array.length
  );
  const minValue = Math.min(...array);
  const maxValue = Math.max(...array);

  return {
    average: avg,
    min: minValue,
    max: maxValue,
    length: array.length,
  };
};

export { analyzeArray };
