from flask import Flask

app = Flask(__name__)

name = "Matt"

@app.route('/')
def hello_world():
  return name

if(__name__ == '__main__'):
  app.run()
