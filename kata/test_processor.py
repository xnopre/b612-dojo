from unittest.mock import Mock

import pytest

from .connector import Connector
from .processor import Processor, NoNetworkException

@pytest.fixture
def dao():
    return Mock()


@pytest.fixture
def connector():
    return Mock(spec=Connector)


@pytest.fixture
def processor(dao, connector):
    return Processor(dao, connector)


def test_should_call_collaborators(processor, dao, connector):
    dao.get_all.return_value = ['abc']

    processor.doit()

    connector.send.assert_called_once_with(['abc'])
    assert connector.send.called
    assert connector.send.call_count == 1


def test_do_not_send_data_if_get_list_empty(processor, dao, connector):
    dao.get_all.return_value = []

    processor.doit()

    assert not connector.send.called


def test_should_raise_exception_if_error_sending(processor, dao, connector):
    connector.send.side_effect = Exception
    dao.get_all.return_value = ['def']

    with pytest.raises(NoNetworkException):
        processor.doit()
