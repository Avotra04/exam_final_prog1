export { countMaxBobsleigh };

function countMaxBobsleigh(N, map) {
  let count = 0;
  for (let i = 0; i < N; i++) {
    let splitArray = map[i].split("X");

    for (let g = 0; g < splitArray.length; g++) {
      count += Math.floor(splitArray[g].length / 4);
    }
  }
  return count;
}
