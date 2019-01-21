const dictionnary = [
    { threshold: 15000, discount: 15 },
    { threshold: 10000, discount: 10 },
    { threshold: 7000, discount: 7 },
    { threshold: 5000, discount: 5 },
    { threshold: 1000, discount: 3 },
    { threshold: -1, discount: 0 }
];

const stateTaxes = {
    UT: 6.85,
    NV: 8.00
};

function findDiscountRate(total) {
    return dictionnary.find(({threshold, discount}) => total > threshold).discount
}

function applyDiscount(price, discount) {
    return price * (100 - discount) / 100;
}

function applyTax(price, stateCode) {
    const tax = stateTaxes[stateCode] || 0
    return price * (100 + tax) / 100;
}

function format(price) {
    const res = price.toFixed(2)
    const [ digit, dec ] = res.split('.');
    return `${digit
        .split('')
        .reverse()
        .reduce((result, current, index) => `${current}${index % 3 === 0 && index > 0 ? ' ' : ''}${result}`, '')}.${dec}`
}

export default class Pricer {

    calc(price, quantity, stateCode) {
        const total = price * quantity;
        const discountRate = findDiscountRate(total);
        const discountPrice = applyDiscount(total, +discountRate);
        return format(applyTax(discountPrice, stateCode));
    }

}