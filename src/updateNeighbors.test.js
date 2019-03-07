import { updateNeighbors } from "./removeObstable"

//function signature:   function removeObstacle(numRows, numColumns, lot)
//numRows < 1000
//numColumns < 1000

/*
lot example:
const lot = [
        [1, 1, 1, 1],
        [0, 1, 1, 1],
        [0, 1, 0, 1],
        [1, 1, 9, 1],
        [0, 0, 1, 1]
] ==> 5
*/

describe('updateNeighbors tests suite', () => {

  test('should update all neighbors', () => {
    const lotDistance = [
      [undefined, undefined, undefined],
      [undefined, 2, undefined],
      [undefined, undefined, undefined]
    ]
    const lotDistanceRes = [
      [undefined, 3, undefined],
      [3, 2, 3],
      [undefined, 3, undefined]
    ]
    updateNeighbors(lotDistance, 1, 1)
    expect(lotDistance).toEqual(lotDistanceRes)
  })


  test('should update all neighbors with another distance', () => {
    const lotDistance = [
      [undefined, undefined, undefined],
      [undefined, 0, undefined],
      [undefined, undefined, undefined]
    ]
    const lotDistanceRes = [
      [undefined, 1, undefined],
      [1, 0, 1],
      [undefined, 1, undefined]
    ]
    updateNeighbors(lotDistance, 1, 1)
    expect(lotDistance).toEqual(lotDistanceRes)
  })

  test('should not update lef and top', () => {
    const lotDistance = [
      [0, undefined, undefined],
      [undefined, undefined, undefined],
      [undefined, undefined, undefined]
    ]
    const lotDistanceRes = [
      [0, 1, undefined],
      [1, undefined, undefined],
      [undefined, undefined, undefined]
    ]
    updateNeighbors(lotDistance, 0, 0)
    expect(lotDistance).toEqual(lotDistanceRes)
  })

  test('should not update rigth and bottom', () => {
    const lotDistance = [
      [0, 1, 2],
      [1, 2, 3],
      [2, 3, 4]
    ]
    const lotDistanceRes = [
        [0, 1, 2],
        [1, 2, 3],
        [2, 3, 4]
    ]
    updateNeighbors(lotDistance, 2, 2)
    expect(lotDistance).toEqual(lotDistanceRes)
  })

  test('should update only undefined distances', () => {
    const lotDistance = [
      [0, 0, 0],
      [0, 2, 0],
      [0, 0, 0]
    ]
    const lotDistanceRes = [
      [0, 0, 0],
      [0, 2, 0],
      [0, 0, 0]
    ]
    updateNeighbors(lotDistance, 1, 1)
    expect(lotDistance).toEqual(lotDistanceRes)
  })

  test('should update only undefined distances', () => {
    const lotDistance = [
      [0, 0, 0],
      [0, 2, 0],
      [0, 0, 0]
    ]
    const lotDistanceRes = [
      [0, 0, 0],
      [0, 2, 0],
      [0, 0, 0]
    ]
    updateNeighbors(lotDistance, 1, 1)
    expect(lotDistance).toEqual(lotDistanceRes)
  })

})
