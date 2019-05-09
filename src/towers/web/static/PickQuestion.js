function PickQuestion(){
    var h2 = document.getElementById("h2");
    var name1 = document.getElementById("name1");
    var submit = document.getElementById("submit");
    var element = document.getElementById("set");
    h2.innerHTML = "Let's pick a Question!";
    //delete elements
    element.removeChild(name1);
    element.removeChild(submit);

    //add elements
    var ol = document.createElement("OL");
    ol.setAttribute("id", "selectable");
    element.appendChild(ol);

    var y = document.createElement("LI");
    var t = document.createTextNode("Which of these cities is closest to London, UK?");
    y.appendChild(t);
    document.getElementById("selectable").appendChild(y);

    var y1 = document.createElement("LI");
    var t1 = document.createTextNode("What is the largest planet in our Solar System?");
    y1.appendChild(t1);
    document.getElementById("selectable").appendChild(y1);
    var y2 = document.createElement("LI");
    var t2 = document.createTextNode("Adele performed the theme song to which James Bond film?");
    y2.appendChild(t2);
    document.getElementById("selectable").appendChild(y2);
    var y3 = document.createElement("LI");
    var t3 = document.createTextNode("What was the first successful vaccine developed in history?");
    y3.appendChild(t3);
    document.getElementById("selectable").appendChild(y3);
    var y4 = document.createElement("LI");
    var t4 = document.createTextNode("What is the color of Donald Duck's bowtie?");
    y4.appendChild(t4);
    document.getElementById("selectable").appendChild(y4);

    var k = document.createElement("INPUT");
    k.setAttribute("type", "submit");
    k.setAttribute("id", "submit");
    k.setAttribute("onclick", "answerQ()");
    element.appendChild(k);
    document.getElementById("submit").value = "Let's Play!";


    $( function() {
        $( "#selectable" ).selectable();
    } );

}