function show (element, id) {
    if(document.getElementById(id).style.display == "none"){
        document.getElementById(id).style.display = "block";
        element.style.color = 'black';
    } else {
        document.getElementById(id).style.display = "none";
        element.style.color = 'blue';
    }
}