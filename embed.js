if (document.createStyleSheet){
    document.createStyleSheet('embed.css');
} else  {
    loadCssFile('embed.css')
}
updateDateTime();
function loadCssFile(filename) {
    var fileref = document.createElement("link")
    fileref.setAttribute("rel", "stylesheet")
    fileref.setAttribute("type", "text/css")
    fileref.setAttribute("href", filename)
    document.getElementsByTagName("head")[0].appendChild(fileref)
}
function updateDateTime() {
            // Get the current date and time
            const now = new Date();
            
            // Format the date and time
            const options = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            };

            // Get the formatted date-time string
            const dateTimeString = now.toLocaleString('en-US', options);
            
            // Display the date and time on the page
            document.getElementById('date-time').textContent = dateTimeString;
        }

