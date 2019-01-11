export default class Pricer {
    constructor(){
        this.dictionnary = {
            7000: 7,
            //5000: 5,
        }
    }
    calc(price, quantity, stateCode) {
        const total = price * quantity;
        const res = Object.entries(this.dictionnary).find(([key, value]) => total > key);
        console.log({res})
        if (res) {
            const [_, discount] = res
            return this._applyDiscout(total, +discount);
        }
        if (total > 5000) {
            const secondDiscount = 5;
            return this._applyDiscout(total, secondDiscount);
        }
        if (total > 1000) {
            const firstDiscount = 3;
            return this._applyDiscout(total, firstDiscount);
        }

        return total;
    }

    _applyDiscout(price, discount) {
        return price * (100 - discount) / 100;
    }
}