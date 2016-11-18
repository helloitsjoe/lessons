// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

document.ondragover = document.ondrop = (ev) => {
  ev.preventDefault()
}

document.body.ondrop = (ev) => {
  console.log(ev.dataTransfer.files[0].path)
  ev.preventDefault()
}

var targetEl = document.body;

function dropJSON(targetEl, callback) {
    // disable default drag & drop functionality
    targetEl.addEventListener('dragenter', function(e){ e.preventDefault(); });
    targetEl.addEventListener('dragover',  function(e){ e.preventDefault(); });

    targetEl.addEventListener('drop', function(event) {

        var reader = new FileReader();
        reader.onloadend = function() {
            //var data = JSON.parse();
            callback(this.result);
        };

        const filePath = event.dataTransfer.files[0].path;
        document.getElementById('background').src = `file://${filePath}`;


        reader.readAsText(event.dataTransfer.files[0]);
        event.preventDefault();
    });
}

dropJSON(document.getElementById('dropbox'), (data) => {
    //console.log(data);
});
