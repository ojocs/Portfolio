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

function show (element, id) {
    var workContent = document.getElementById(id);

    if(workContent.style.display !== "block"){
        workContent.style.display = "block";
        element.style.color = 'black';
    } else {
        workContent.style.display = "none";
        element.style.color = 'blue';
    }
}

function detectMobile(){
    if (/Mobile|Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        // set mobile values here
        return false;
    } 
    // else
    alert("Not Mobile");
    return true;
}