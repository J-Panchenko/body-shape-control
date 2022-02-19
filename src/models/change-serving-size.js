const changeServingSize = (endSize, seekOut) => {
  const servingSize = 100;
  return parseFloat(Number((endSize * seekOut) / servingSize).toFixed(1));
};

export default changeServingSize;
