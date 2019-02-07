import second from "./second"

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
]
*/

describe('Second', () => {
    test('should work', () => {
        expect(second()).toBe('second')
    })
})
