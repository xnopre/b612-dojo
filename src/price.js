export default class Price {

    calculate(quantity, unitPrice) {
        return new Promise((resolve, reject) => {
            if (quantity < 0) {
                reject('Quantity couldn\'t be negative')
            }
            resolve(quantity * unitPrice)
        })
    }
}
