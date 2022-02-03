from flask import (
    Flask,
    send_file,
    send_from_directory,
    render_template,
    url_for,
    flash,
    redirect,
    jsonify,
    request,
)
import os
import random


app = Flask(__name__)


@app.route("/")
def home():
    return render_template("portfolio.html")


@app.route('/songs')
def get_songs():
    songs = os.listdir('static/audio')
    # random.shuffle(songs)
    print(songs, flush=True)
    return jsonify(songs=songs)


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
