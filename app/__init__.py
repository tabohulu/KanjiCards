from flask import Flask
from flask_cors import CORS
from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
# from flask_login import LoginManager

app = Flask(__name__)
CORS(app)
app.config.from_object(Config)
# login =LoginManager(app)
db=SQLAlchemy(app)
migrate=Migrate(app,db)
from app import routes,models