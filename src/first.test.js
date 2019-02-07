import first from "./first"

// distance = sqrt(x*x + y*y)

// function should take 3 parameters
// 1: Array of N possible delivery: [[x,y], [x,y], [x,y], [x,y]]
// 2: The number of destinations
// 3: The maximum destinations that truck can deliver

describe('First', () => {
    test('should work', () => {
        expect(first()).toBe('first')
    })
})
