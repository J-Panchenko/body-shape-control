const changeServingSize = (endSize, seekOut) => {
  const servingSize = 100;
  const result = Number((endSize * seekOut) / servingSize).toFixed(1);
  return Number(result);
};

export default changeServingSize;
