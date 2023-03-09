function dropHandler(ev) {
    console.log("File(s) dropped");
    ev.preventDefault();
    [...ev.dataTransfer.items].forEach((item, i) => {
        if (item.kind === "file" && item.type === "text/plain") {
            const file = item.getAsFile();
            console.log(file);
        } else {
            document.getElementById('result').innerHTML = "not txt file"
        }
    });
}
function dragOverHandler(ev) {
    console.log("File(s) in drop zone");
    ev.preventDefault();
}
