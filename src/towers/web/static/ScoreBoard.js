function scoreboard(){
    var h2 = document.getElementById("h2");
    var set = document.getElementById("set");
    var form11 = document.getElementById("form"+String(counter));
    var p = document.getElementById("p11");
    var clockdiv = document.getElementById("clockdiv");
    var pdiv = document.getElementById("pdiv");
    var submit0 = document.getElementById("submit"+String(counter-1));
    var submitnext = document.getElementById("submitnext");


    h2.innerHTML = "Score Board";
    set.removeChild(p);
    set.removeChild(form11);
    set.removeChild(submit0);
    set.removeChild(submitnext);
    clockdiv.removeChild(pdiv);

    var ol = document.createElement("OL");
    ol.setAttribute("id", "rank");
    set.appendChild(ol);

    var y1 = document.createElement("LI");
    var t1 = document.createTextNode(String(document.getElementById("name1").value) + "   "+"(Score: "+score+")");
    y1.appendChild(t1);
    document.getElementById("rank").appendChild(y1);

    var y2 = document.createElement("LI");
    var t2 = document.createTextNode("Player 2"+ "   "+"(Score:   )");
    y2.appendChild(t2);
    document.getElementById("rank").appendChild(y2);
}
