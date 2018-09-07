export default class Pricer {

    getPrice(number_of_article, price_per_article, state_code) {
        let tax = this.getTax(state_code);
        return number_of_article * price_per_article * (1 + tax);
    }

    getTax(state_code) {
        const statesTaxes = {
            'UT': 0.0685,
            'NV': 0.08,
            'TX': 0.0625
        };

        return statesTaxes[state_code] || 0;
    }
}