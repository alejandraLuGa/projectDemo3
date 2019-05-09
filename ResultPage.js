function final(){
    var abc = document.getElementById("abc");
    var h2 = document.getElementById("h2");
    var p = document.getElementById("p11");
    var form = document.getElementById("form"+String(counter));
    var clockdiv = document.getElementById("clockdiv");
    var submitt = document.getElementById("submit"+String(counter));
    var submitnext = document.getElementById("submitnext");
    var set = document.getElementById("set");
    //delete elements
    h2.innerHTML = "Ranking";
    set.removeChild(form);
    set.removeChild(p);
    set.removeChild(submitt);
    set.removeChild(submitnext);
    abc.removeChild(clockdiv);

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