from .app import price

def test_simple_price():
    assert price(3, 1.21) == '3.63 e'

def test_discount_3_percent_above_1000():
    assert price(unit_price=1.21, quantity=1000) == '1173.70 e'

def test_discount_7_percent_above_5000():
    assert price(5000, 1.21) == '5626.50 e'

def test_discount_10_percent_above_15000():
    assert price(12000, 2.34) == '25272.00 e'

def test_with_taxes_20_for_fr():
    assert  price(3, 1.21, 'FR') == '4.36 e'

def test_with_taxes_6_58_for_lu():
    assert  price(3, 1.21, 'LU') == '3.87 e'

def test_without_taxes_for_unknown_country():
    assert price(3, 1.21, 'BEL') == '3.63 e'