from flask import Flask, render_template, request
import requests
app = Flask(__name__)

@app.route("/")
def home():
    return render_template('home.html')

@app.route("/world_map")
def world_map():
    return render_template("world_map.html")

@app.route("/population_and_age")
def population_and_age():
    return render_template("population_and_age.html")

@app.route("/education")
def education():
    return render_template("education.html")

@app.route("/migration")
def migration():
    return render_template("migration.html")