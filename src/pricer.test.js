import Pricer from './pricer';

describe('Pricer under test', () => {

    const pricer = new Pricer();
    describe('for base price', () => {
        test('should calculate simple price', () => {
            const price = pricer.calc(60, 5);
            expect(price).toBe("300.00");
        });

        test('should calculate simple price with no quantity', () => {
            const price = pricer.calc(60, 0);
            expect(price).toBe("0.00");

        });
    })

    describe('for discounts', () => {
        test('should apply discount 3% if above 1000', () => {
            const price = pricer.calc(1001, 1);
            expect(price).toBe("970.97");

        });

        test('should apply discount 5% if above 5000', () => {
            const price = pricer.calc(1010, 5);
            expect(price).toBe("4 797.50");

        });

        test('should apply discount 7% if above 7000', () => {
            const price = pricer.calc(1001, 7);
            expect(price).toBe("6 516.51");

        });
    })

    describe('for taxes', () => {

        test('apply taxes 6.85% for Utah', () => {
            const price = pricer.calc(10, 5, 'UT');
            expect(price).toBe("53.42");
        })

        test('apply taxes 6.85% for Utah for ceil round', () => {
            const price = pricer.calc(11, 5, 'UT');
            expect(price).toBe("58.77");
        })

        test('apply taxes 8% for Nevada (NV)', () => {
            const price = pricer.calc(11, 5, 'NV');
            expect(price).toBe("59.40");
        })

        test('apply taxes 8% for Nevada (NV) with discount', () => {
            const price = pricer.calc(2150, 7, 'NV');
            expect(price).toBe("13 815.90");
        })
    })

});

