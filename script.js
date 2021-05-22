// window.onload = hideWorkContent;

// function hideWorkContent () {
//     var div = document.getElementById('worksList');
//     var divs = div.getElementsByTagName('myWork');
//     var divArray = [];
//     for (var i = 0; i < divs.length; i += 1) {
//         divs[i].style.display = "none";
//         // divArray.push(divs[i].innerHTML);
//     }
//     // for (var i = 0; i < divArray.length; i += 1) {
//     //     divArray[i].style.display = "none";
//     // }
// }

function show (element, id, imgType, imageURL) {
    var workContent = document.getElementById(id);

    if(workContent.style.display !== "block"){
        workContent.style.display = "block";
        element.style.color = 'black';
    } else {
        workContent.style.display = "none";
        element.style.color = 'blue';
    }
}
