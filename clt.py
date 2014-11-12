import stackio
client = stackio.StackIO()
test = client.use("test-service")
print test.say_hello("World")
