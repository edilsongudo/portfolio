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
from utils import get_meta


app = Flask(__name__)


@app.route("/")
def home():
    return render_template("portfolio.html")


@app.route('/songs')
def get_songs():
    songs = os.listdir('static/audio')
    for song in songs:
        print(get_meta('static/audio', 'static/albumArts/', song,), flush=True)
    random.shuffle(songs)
    print(songs, flush=True)
    return jsonify(songs=songs)


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
