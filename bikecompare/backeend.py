from flask import Flask, jsonify

app = Flask(__name__)

bike_data = {
    "Honda CBR600RR": {"power": "120 HP", "weight": "194 kg", "engine": "599 cc", "type": "Sport"},
    "Yamaha R1": {"power": "200 HP", "weight": "200 kg", "engine": "998 cc", "type": "Sport"},
    # Add more bikes here...
}

@app.route('/api/bikes')
def get_bikes():
    return jsonify(bike_data)

if __name__ == '__main__':
    app.run(debug=True)
