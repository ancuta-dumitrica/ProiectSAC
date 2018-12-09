#/* Copyright (C) Florentina Petcu - All Rights Reserved
# * Unauthorized copying of this file, via any medium is strictly prohibited
# * Proprietary and confidential
# * Written by Florentina Petcu <florentina.ptc@gmail.com>, December 2018
# */

from flask import Flask, request, jsonify
from flask_cors import CORS
from database import *
from similarity import *

app = Flask(__name__)
CORS(app)

@app.route("/allBooks")
def allBooks():
    result = getBooksList()
    return jsonify(result)


@app.route("/bookById")
def bookById():
	bookId = request.args.get('id')
    result = getBookById(bookId)
    return jsonify(result)

@app.route("/similarBooks")
def similarBooks():
	bookId = request.args.get('id')
	result = getSimilarBooksList(bookId)
	return jsonify(result)

if __name__ == "__main__":
    app.run()
