import music_tag
import os


def get_only_meta(file):

    meta = music_tag.load_file(file)

    try:
        image_data = meta['artwork'].first.data
        artwork = image_data
    except Exception as e:
        artwork = ""

    return {
        'album': meta['album'].value,
        'artist': meta['artist'].value,
        'title': meta['tracktitle'].value,
        'filename': file, 'artwork': artwork
    }


def get_meta(folder, album_dest, file):

    if not os.path.isdir(album_dest):
        os.mkdir(album_dest)

    song = os.path.join(f'{folder}/{file}')
    meta = music_tag.load_file(song)

    try:
        image_data = meta['artwork'].first.data
        filename = file.split('.')[0] + '.jpg'
        with open(f'{album_dest}/{filename}', 'wb') as f:
            f.write(image_data)
            artwork = filename
    except (AttributeError, KeyError):
        artwork = ""

    return {
        'album': meta['album'].value,
        'artist': meta['artist'].value,
        'title': meta['tracktitle'].value,
        'filename': file, 'artwork': artwork
    }
