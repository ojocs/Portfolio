window.onload = hideWorkContent;

function hideWorkContent () {
    var div = document.getElementById('worksList');
    var divs = div.getElementsByTagName('myWork');
    var divArray = [];
    for (var i = 0; i < divs.length; i += 1) {
        divArray.push(divs[i].innerHTML);
    }
    for (var i = 0; i < divArray.length; i += 1) {
        divArray[i].style.display = "none";
    }
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

function sizeUp(element){
    element.style.display = 5;
    element.style.color = 'red';
}