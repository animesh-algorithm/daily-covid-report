from flask import Flask, render_template
import requests

url = 'https://api.covid19india.org/data.json'
response = requests.get(url)
data = response.json()

app = Flask(__name__)

@app.route("/")
@app.route("/state-wise-data")
def main():
    data_ = {data['cases_time_series'][i]['date']: data['cases_time_series'][i] for i in range(len(data['cases_time_series']))}
    data_ = list(data_.values())
    data_ = data_[-1::-1]
    
    return render_template('index.html', data=data_)


if __name__ == "__main__":
    app.run(debug=True)