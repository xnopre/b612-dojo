export default function (rows, columns, lot) {

  for (let i = 0; i < lot.length ; i++) {
    const obstacleIndex = lot[i].findIndex(y => y === 9)
    if (obstacleIndex >= 0) {
      return i + obstacleIndex
    }
  }


}
