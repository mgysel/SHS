# General imports
from flask import Flask, request, redirect, url_for
from flask_mail import Mail, Message
from flask_cors import CORS
from bson.objectid import ObjectId
# imports for PyJWT authentication
import jwt
from json import dumps, load
from functools import wraps
import sys
from werkzeug.security import generate_password_hash
from flask.json import jsonify
from flask.helpers import make_response

# Create App
APP = Flask(__name__)
CORS(APP)

# SERVE APP
if __name__ == "__main__":
    APP.run(port=(int(sys.argv[1]) if len(sys.argv) == 2 else 2119), debug=True)