from flask import Flask, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

@app.route("/")
def hello():
    res = requests.get('https://raw.githubusercontent.com/altkraft/for-applicants/master/frontend/titanic/passengers.json')
    return jsonify(res.json())

if __name__ == "__main__":
    app.run()