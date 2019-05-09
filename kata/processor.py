class NoNetworkException(Exception):
    pass

    def send(self):
        return 42


class Processor:
    def __init__(self, dao, connector):
        self.dao = dao
        self.connector = connector

    def doit(self):
        data = self.dao.get_all()

        if data:
            try:
                self.connector.send(data)
            except:
                raise NoNetworkException('Network not found.')