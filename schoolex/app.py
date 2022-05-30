# -*- coding:utf-8 -*-

from flask import Flask, render_template
from flask_cors import CORS

app = Flask(__name__, static_folder='templates/static')
CORS(app)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/test', methods=['GET'])
def auth():
    return {
        'status': 'ok',
        'data': 'test success!',
    }
