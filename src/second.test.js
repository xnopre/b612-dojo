import removeObstable from "./removeObstable"

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

describe('Second', () => {

  test('should return 0 for empty lot', () => {
    const pathLen = removeObstable(1, 1, [[9]])
    expect(pathLen).toBe(0)
  })

  test('should return 2 for simple lot with only one line', () => {
    const pathLen = removeObstable(1, 4, [[1, 1, 9, 1]])
    expect(pathLen).toBe(2)
  })

  test('should return 3 for simple lot with only two line', () => {
    const lot = [
      [1, 1, 1, 1 ],
      [1, 1, 9, 1 ],
      [1, 1, 1, 1 ]
    ]
    const pathLen = removeObstable(2, 4, lot)
    expect(pathLen).toBe(3)
  })
})
