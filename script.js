window.onload = hideWorkContent;

function hideWorkContent () {

}

function show (element, id) {
    var workTitle = document.getElementById(id);

    if(workTitle.style.display === "none"){
        workTitle.style.display = "block";
        element.style.color = 'black';
    } else {
        workTitle.style.display = "none";
        element.style.color = 'blue';
    }
}