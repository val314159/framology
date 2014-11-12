import stackio
client = stackio.StackIO()
class TestService(object):
    def say_hello(_,name):
        return "Hello, %s!!!" % name
    pass
client.expose("test-service", TestService())
