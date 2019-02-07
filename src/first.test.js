import destination from "./destination"

// distance = sqrt(x*x + y*y)

// function should take 3 parameters
// 1: Array of N possible delivery: [[x,y], [x,y], [x,y], [x,y]]
// 2: The number of destinations
// 3: The maximum destinations that truck can deliver

describe('Destination', () => {
    test('should return an empty array if no destination', () => {
        const points = [];
        const result = destination(points);
        expect(result).toEqual([]);
    })

    test('should return the destination if only one destination', () => {
        const points = [[1, 1]];
        const result = destination(points);
        expect(result).toEqual([[1, 1]]);
    })

    test('should return sorted destinations', () => {
        const points = [[2, 2], [1, 1]];
        const result = destination(points);
        expect(result).toEqual([[1, 1], [2, 2]]);
    })

    test('should return sorted destinations with 3 destinations and one point', () => {
        const points = [[20, 20], [1, 1], [30, 30], [5, 5], [4, 2]];
        const result = destination(points, 3);
        expect(result).toEqual([[1, 1], [4, 2], [5, 5]]);
    })
    test('should return sorted destinations with 3 destinations and one point', () => {
        const points = [[20, 20], [1, 1], [30, 30], [5, 5], [4, 2]];
        expect(() => {
            destination(points, 3, 2);
        }).toThrowError("Camion trop petit");
    })

})
