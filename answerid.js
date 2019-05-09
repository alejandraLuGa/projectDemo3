var answerid = "ggg";

function myfunc(e){
    var x = e.getAttribute("class");
    answerid = x;
    var l1 = document.getElementById("l1");
    var l2 = document.getElementById("l2");
    var l3 = document.getElementById("l3");
    var l4 = document.getElementById("l4");
    var y1 = document.getElementById("y1");
    var y2 = document.getElementById("y2");
    var y3 = document.getElementById("y3");
    var y4 = document.getElementById("y4");
    if(y1.checked) {
        l1.style.color = "orange";
        l2.style.color = "black";
        l3.style.color = "black";
        l4.style.color = "black";
    }

    if(y2.checked) {
        l2.style.color = "orange";
        l1.style.color = "black";
        l3.style.color = "black";
        l4.style.color = "black";
    }
    if(y3.checked) {
        l3.style.color = "orange";
        l2.style.color = "black";
        l1.style.color = "black";
        l4.style.color = "black";
    }

    if(y4.checked) {
        l4.style.color = "orange";
        l2.style.color = "black";
        l3.style.color = "black";
        l1.style.color = "black";
    }
}
