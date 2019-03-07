function isObstacle(lot, i, j) {
  return lot[i][j] === 9
}

export function updateNeighbors(lotDistances, i, j) {
  const currentDistance = lotDistances[i][j]
  if(i > 0 && lotDistances[i-1][j] === undefined) {
    lotDistances[i-1][j] = currentDistance + 1
  }
  if(j > 0 && lotDistances[i][j-1]  === undefined) {
    lotDistances[i][j-1] = currentDistance + 1
  }
  if(i < lotDistances.length - 1 && lotDistances[i+1][j]  === undefined) {
    lotDistances[i + 1][j] = currentDistance + 1
  }
  if(j < lotDistances[0].length - 1 && lotDistances[i][j+1] === undefined) {
    lotDistances[i][j + 1] = currentDistance + 1
  }
}

function calcDistance(lot, lotDistances, currentDistance) {
  for (let i=0; i<lotDistances.length; i++){
    const row = lot[i]
    for (let j=0; j<row.length; j++){
     const distanceForCurrentCell = row[j]
      if (isObstacle(lot, i,j)) {
        return currentDistance
      }
      if (distanceForCurrentCell === currentDistance){
        updateNeighbors(lotDistances, i, j)
      }
    }
  }
  return calcDistance(lot, lotDistances, currentDistance+1)
}

function init(rows, columns) {
  const rowArray = new Array(rows);
  return rowArray.map(row => new Array(columns));
}

export default function (rows, columns, lot) {
  const lotDistances = init(rows, columns)
  return calcDistance(lot, lotDistances, 0)
}
