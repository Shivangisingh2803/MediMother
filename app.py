import pickle
import numpy as np
from flask import Flask, request, render_template

app = Flask(__name__)

# Load the diabetes model from the pickle file
with open("diabetesresult.pkl", "rb") as f:
    model = pickle.load(f)


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/about")
def about():
    return render_template("aboutUs.html")

@app.route('/vitality_monitor')
def vitality_monitor():
    return render_template('Vitality Monitor.html')

@app.route("/icons")
def icons():
    return render_template("icons.html")


@app.route('/predict', methods=['GET', 'POST'])
def predict():
    if request.method == 'POST':
        Pregnancies = float(request.form['Pregnancies'])
        Glucose = float(request.form['Glucose'])
        BloodPressure = float(request.form['BloodPressure']) 
        Insulin = float(request.form['Insulin']) 
        BMI = float(request.form['BMI']) 
        Age = float(request.form['Age']) 
    
        # Make prediction
        input_data = np.array([[Pregnancies, Glucose, BloodPressure, Insulin, BMI, Age]])
        prediction = model.predict(input_data)

        # Interpret prediction
        if prediction[0] == 1:
            result = "Diabetic"
        else:
            result = "Non-Diabetic"

        return render_template('diabetespredict.html', prediction_text=f'The patient is likely {result}')
    return render_template('diabetespredict.html')


if __name__ == "__main__":
    app.run(debug=True)
