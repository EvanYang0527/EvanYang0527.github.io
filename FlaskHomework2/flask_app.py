
# A very simple Flask Hello World app for you to get started with...

from flask import Flask, render_template, request
from flask_wtf import FlaskForm
from wtforms import PasswordField, SubmitField
import pandas as pd
from sklearn.linear_model import LinearRegression
import joblib

app = Flask(__name__)

app.config['SECRET_KEY'] = '06299c511cf7c25fed591c15b966256a'

def load(age, weight):
    clf = joblib.load("regr.pkl")
    x = pd.DataFrame([[age, weight]], columns=["Age", "Weight"])
    prediction = clf.predict(x)[0]
    return prediction

@app.route('/', methods=["GET", "POST"])
def hello_world():
    if request.method == "POST":
        age = request.form.get("age")
        weight = request.form.get("weight")
        if age.isdigit() and weight.isdigit():
            age = int(age)
            weight = int(weight)
            return render_template("page.html", pressure = load(age, weight))
        else:
            render_template("page.html")
    return render_template("page.html")

