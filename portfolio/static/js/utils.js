function imageExists(image_url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', image_url, false)
    http.send()
    return http.status != 404 
}

function remove_extension(filename) {
    return filename.split('.').slice(0, -1).join('.')
}
