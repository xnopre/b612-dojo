export default class Pricer {

    getPrice(number_of_article, price_per_article, state_code) {
        function roundPrice(taxedPrice) {
            return Math.round(taxedPrice * 100) / 100;
        }

        function getTax() {
            const statesTaxes = {
                'UT': 0.0685,
                'NV': 0.08,
                'TX': 0.0625
            };

            return statesTaxes[state_code] || 0;
        }

        function getDiscount(price) {

            function getPercentage() {
                if (price > 5000) {
                    return 5
                }

                if (price > 1000) {
                    return 3;
                }

                return 0;
            }

            return (100 - getPercentage()) / 100;
        }

        function getPriceWithoutDiscount() {
            let tax = getTax();
            return roundPrice(number_of_article * price_per_article * (1 + tax));
        }

        let priceWithoutDiscount = getPriceWithoutDiscount();
        const discount = getDiscount(priceWithoutDiscount);
        let priceWithDiscount = priceWithoutDiscount * discount;
        return priceWithDiscount;
    }
}