const colorArray = [
  '#FF6633', '#FF33FF', '#FFFF99', '#00B3E6', '#E6B333', '#3366E6', '#99FF99', '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC', '#B366CC', '#CC80CC', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399', '#E666B3', '#00E680', '#E6FF80', '#1AFF33', '#FF3380', '#66E64D', '#4D80CC', '#9900B3', '#E64D66', '#FF4D4D', '#99E6E6', '#6666FF'
];

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colorArray.length);

  return colorArray[randomIndex];
}

export { getRandomColor };