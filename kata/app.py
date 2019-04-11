taxes = {
    'FR': 20,
    'LU': 6.58
}

def price(quantity: int, unit_price: float, country: str = None):

    if not isinstance(quantity, int):
        raise Exception('Quantity must be an int')

    total_raw_price = quantity * unit_price

    discount_rate = 0
    if total_raw_price >= 15000:
        discount_rate = 10
    elif total_raw_price >= 5000:
        discount_rate = 7
    elif total_raw_price >= 1000:
        discount_rate = 3
    total_raw_price = apply_discount(discount_rate, total_raw_price)

    if country:
        tax = taxes.get(country, 0)
        total_raw_price = apply_tax(total_raw_price, tax)

    return f'{total_raw_price:.2f} e'


def apply_tax(amount, tax):
    return amount * (1 + tax / 100)


def apply_discount(discount_rate, total_raw_price):
    return total_raw_price * (1 - (discount_rate / 100))

