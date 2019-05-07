function nextpage(){
    var set = document.getElementById("set");
    var num = counter-1;
    var num2 = document.getElementById("num2");
    num2.innerHTML = "Score: "+String(score);
    if (num == 19) {
        var k0 = document.createElement("INPUT");
        k0.setAttribute("type", "submit");
        k0.setAttribute("id", "submitnext");
        k0.setAttribute("onclick", "final()");
        set.appendChild(k0);
        document.getElementById("submitnext").value = "See Result";
    } else {


        var k1 = document.createElement("INPUT");
        k1.setAttribute("type", "submit");
        k1.setAttribute("id", "submitnext");
        k1.setAttribute("onclick", "Next()");
        set.appendChild(k1);
        document.getElementById("submitnext").value = "Next Question";
    }
}

