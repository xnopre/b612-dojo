"""
"When I see a bird that walks like a duck and swims like a duck and quacks like a duck, I call that bird a duck."
                                                                               - James Whitcomb Riley (1849–1916)
"""

from unittest.mock import Mock, patch

#################
# MOCK CREATION #
#################

# A Python Mock object is basically a Metamorph (Pokémon 132)

# Mock object with lazy methods
# -----------------------------

mock = Mock() # or
mock = Mock(name='hello')

mock.function() # Always ok for every function call !
mock() # can call himself.


# Mock object with not-so-lazy methods
# ------------------------------------
class A:
    def a():
        pass

    def b():
        pass

mock_spec = Mock(spec=['a', 'b']) # or
mock_spec = Mock(spec=A)

mock_spec.a() # Ok.
mock_spec.b() # Ok.
mock_spec.c() # Nope!


# Build a Megatron of Mocks
# -------------------------
class A:
    pass

a = A()
a.f = Mock(return_value=4)
a.g = Mock(side_effect=Exception)

a.f()
a.g()

##############
# Assertions #
##############

# Any assertion not fullfilled will raise an AssertionError exception.

# Assert with no arguments
# ------------------------
mock.function()

mock.function.assert_called()
mock.function.assert_called_once()


# Assert with arguments
# ---------------------
mock.function(1, 2)

mock.function.assert_called_with(1, 2)
mock.function.assert_called_once_with(1, 2)


# Attributes
# ----------
mock.function.called          # has it been called ?
mock.function.call_count      # how many times ?
mock.function.call_args       # last arguments call ?
mock.function.call_args_list  # list of all arguments calls ?


# Mock return value
# -----------------
mock.function.return_value = 10
mock.function.return_value = None

################
# SIDE EFFECTS #
################

# Side effect = return value on steroids

# Raise exceptions
# ----------------
mock.function.side_effect = Exception


# Call functions (def + lambda syntaxes)
# --------------------------------------
def f(x):
    return x + 1
mock.function.side_effect = f
mock.function.side_effect = lambda x: x + 1


# Consume (any) iterables
# -----------------------
mock.function.side_effect = [Exception, 'abc']

from itertools import chain, cycle, repeat
mock.function.side_effect = chain(repeat(-1, 3), cycle(x**2 for x in range(4)))
# -> (-1, -1, -1, 1, 2, 4, 8, 1, 2, 4, 8, 1, 2, 4, 8, ...)

#########
# RESET #
#########

# Reset counters, calls,... not configuration (return_value or side_effect)

m.reset_mock()

###########
# PATCHES #
###########


#  patch() looks up an object in a given *module* and replaces that object with a `Mock`
#  -------------------------------------------------------------------------------------

# The module can be __main__ (ie. the current script)
#     (sum is a built-in function: https://docs.python.org/3/library/functions.html#sum)

def test():
    assert sum((1, 3, 5)) == 9

@patch('__main__.sum')
def test_with_patch(sum):
    sum.return_value = 9
    assert sum((1, 3, 5)) == 9


# The module is in an another castle (ie. a .py file)

# code.py
# +++++++
def api(x):
    return x + 1

def plusone(x):
    return api(x)

# test_code.py
# ++++++++++++
from code import plusone
from unittest.mock import Mock, patch

def test_plusone():
    """
    Context manager syntax
    """
    with patch('code.api') as mock_plusone:
        mock_plusone.return_value = 0
        assert plusone(4) == 5

@patch('code.api')
def test_plusone_secondversion(mock_plusone):
    """
    Decorator syntax
    """
    mock_plusone.return_value = 0
    assert plusone(4) == 5


# Replaces a class method with patch
# ----------------------------------
class A:
    def f(self, x):
        pass

@patch.object(A, 'f')
def test(mock_method):
    A.f(3)
    mock_method.assert_called_with(3)

# Stack the patches
# ------------------
@patch.object(A, 'f')
@patch.object(A, 'g')
def test(mock_f, mock_g):
    pass

# Patch a dict and restore to its original state after the test
# -------------------------------------------------------------

d = {'a': 1, 'b': 2}              # d = {'a': 1, 'b': 2}
with patch(d, {'a': 10, 'c': 3}):
    pass                            # d = {'a': 10, 'b': 2, 'c': 3}
pass                              # d = {'a': 1, 'b': 2}