export default function (rows, columns, lot) {
  let obstacleFound=false;
  return lot.reduce((acc, row) => {
    const obstacleIndex = row.findIndex(y => y === 9)
    if(obstacleIndex>-1)
    {
      obstacleFound=true;
      return acc + obstacleIndex
    }
    return obstacleFound ? acc  : acc + 1
  }, 0)
}
