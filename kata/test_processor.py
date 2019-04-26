import pytest

from .processor import Processor, NoNetworkException

class MockDao:
    def __init__(self, data_to_return_for_get_all):
        self.data_to_return_for_get_all=data_to_return_for_get_all

    def get_all(self):
        return self.data_to_return_for_get_all

class MockConnector:
    def __init__(self, raise_error=False):
        self.counter = 0
        self.data= ""
        self.raise_error = raise_error

    def send(self, data):
        if self.raise_error:
            raise Exception('dsgfhjsqdghjqbdsjhgbjshdf')

        self.counter += 1
        self.data = data

def test_should_call_collaborators():
    dao = MockDao(data_to_return_for_get_all=['abc'])
    connector = MockConnector()
    processor = Processor(dao, connector)

    processor.doit()

    assert connector.counter == 1
    assert connector.data == ['abc']

def test_do_not_send_data():
    dao = MockDao(data_to_return_for_get_all=[])
    connector = MockConnector()
    processor = Processor(dao, connector)

    processor.doit()

    assert connector.counter == 0

def test_should_raise_exception_if_error_sending():
    dao = MockDao(data_to_return_for_get_all=['def'])
    connector = MockConnector(raise_error=True)
    processor = Processor(dao, connector)

    with pytest.raises(NoNetworkException):
        processor.doit()




