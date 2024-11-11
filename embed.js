if (document.createStyleSheet){
    document.createStyleSheet('https://fred.stlouisfed.org/graph/css/embed.css');
} else  {
    loadCssFile('https://fred.stlouisfed.org/graph/css/embed.css')
}

function loadCssFile(filename) {
    var fileref = document.createElement("link")
    fileref.setAttribute("rel", "stylesheet")
    fileref.setAttribute("type", "text/css")
    fileref.setAttribute("href", filename)
    document.getElementsByTagName("head")[0].appendChild(fileref)
}

