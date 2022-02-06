function remove_extension(filename) {
    return filename.split('.').slice(0, -1).join('.')
}
