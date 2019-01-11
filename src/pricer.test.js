import Pricer from './pricer';

describe('Pricer under test', function () {
    const pricer = new Pricer();
    test('should calculate simple price', function () {
        const price = pricer.calc(60, 5);
        expect(price).toBe(300);
    });

    test('should calculate simple price with no quantity', function () {
        const price = pricer.calc(60, 0);
        expect(price).toBe(0);

    });

    test('should calculate 1st threshold', function () {
        const price = pricer.calc(1001, 1);
        expect(price).toBe(970.97);

    });

    test('should calculate 2nd threshold', function () {
        const price = pricer.calc(1010, 5);
        expect(price).toBe(4797.5);

    });

    test('should calculate 3rd threshold', function () {
        const price = pricer.calc(1001, 7);
        expect(price).toBe(6516.51);

    });
});

