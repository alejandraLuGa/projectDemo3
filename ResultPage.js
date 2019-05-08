function final(){
    var abc = document.getElementById("abc");
    var h2 = document.getElementById("h2");
    var p = document.getElementById("p11");
    var ol = document.getElementById("selectable");
    var clockdiv = document.getElementById("clockdiv");
    var submit = document.getElementById("submit");
    var submitnext = document.getElementById("submitnext");
    var element = document.getElementById("set");
    //delete elements
    h2.innerHTML = "Ranking";
    element.removeChild(ol);
    element.removeChild(p);
    element.removeChild(submit);
    element.removeChild(submitnext);

    var oll = document.createElement("OL");
    oll.setAttribute("id", "rank");
    element.appendChild(oll);

    var y = document.createElement("LI");
    var t1 = document.createTextNode(String(document.getElementById("name1").value) + "   "+"(Score: "+score+")");
    y.appendChild(t1);
    document.getElementById("rank").appendChild(y);

    var y = document.createElement("LI");
    var t2 = document.createTextNode("Player 2"+ "   "+"(Score:   )");
    y.appendChild(t2);
    document.getElementById("rank").appendChild(y);

    var y = document.createElement("LI");
    var t2 = document.createTextNode("Player 3"+ "   "+"(Score:   )");
    y.appendChild(t2);
    document.getElementById("rank").appendChild(y);

    var y = document.createElement("LI");
    var t2 = document.createTextNode("Player 4"+ "   "+"(Score:   )");
    y.appendChild(t2);
    document.getElementById("rank").appendChild(y);

    var y = document.createElement("LI");
    var t2 = document.createTextNode("Player 5"+ "   "+"(Score:   )");
    y.appendChild(t2);
    document.getElementById("rank").appendChild(y);


    var k = document.createElement("INPUT");
    k.setAttribute("type", "submit");
    k.setAttribute("id", "submit");
    k.setAttribute("onclick", "window.location.href='http://www.acsu.buffalo.edu/~ytsang/demo11.html'");
    element.appendChild(k);
    document.getElementById("submit").value = "Restart";

    abc.removeChild(clockdiv);


}