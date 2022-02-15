const changeServingSize = (endSize, seekOut) => {
  const servingSize = 100;
  return Number((endSize * seekOut) / servingSize).toFixed(1);
};

export default changeServingSize;
