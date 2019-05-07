function AnswerQuestion(){
    var h2 = document.getElementById("h2");
    var name1 = document.getElementById("name1");
    var submit01 = document.getElementById("submit01");
    var set = document.getElementById("set");
    h2.innerHTML = "Question "+String(counter)+":";


    //delete elements
    set.removeChild(name1);
    set.removeChild(submit01);


    //get list of all the questions

    var questionslist = qAndA();
    var questionmap = questionslist[counter-1];

    //add elements
    var p = document.createElement("p");
    p.setAttribute("id", "p11");
    var w = document.createTextNode(questionmap["question"]);
    p.appendChild(w);
    set.appendChild(p);


    var ol = document.createElement("OL");
    ol.setAttribute("id", "selectable");
    set.appendChild(ol);



    //loop all the elements in the choices list


    var y = document.createElement("LI");
    y.setAttribute("id", "y1");
    y.setAttribute("value", questionmap["choices"][0]);
    y.setAttribute("onclick", "myfunc(this)");
    var t = document.createTextNode(questionmap["choices"][0]);
    y.appendChild(t);
    document.getElementById("selectable").appendChild(y);

    var y = document.createElement("LI");
    y.setAttribute("id", "y2");
    y.setAttribute("value", questionmap["choices"][1]);
    y.setAttribute("onclick", "myfunc(this)");
    var t = document.createTextNode(questionmap["choices"][1]);
    y.appendChild(t);
    document.getElementById("selectable").appendChild(y);

    var y = document.createElement("LI");
    y.setAttribute("id", "y3");
    y.setAttribute("value", questionmap["choices"][2]);
    y.setAttribute("onclick", "myfunc(this)");
    var t = document.createTextNode(questionmap["choices"][2]);
    y.appendChild(t);
    document.getElementById("selectable").appendChild(y);

    var y = document.createElement("LI");
    y.setAttribute("id", "y4");
    y.setAttribute("value", questionmap["choices"][3]);
    y.setAttribute("onclick", "myfunc(this)");
    var t = document.createTextNode(questionmap["choices"][3]);
    y.appendChild(t);
    document.getElementById("selectable").appendChild(y);


    var pdiv = document.createElement("div");
    pdiv.setAttribute("id", "pdiv");
    clockdiv.appendChild(pdiv);




    //How many questions left?
    var pnum = document.createElement("P");
    pnum.setAttribute("id", "num");
    var word = document.createTextNode(String(counter)+"/20");
    pnum.appendChild(word);

    //Score
    var pnum2 = document.createElement("P");
    pnum2.setAttribute("id", "num2");

    var word2 = document.createTextNode("Score: "+String(score));
    pnum2.appendChild(word2);

    pdiv.appendChild(pnum);
    pdiv.appendChild(pnum2);


    // check answer


    var k = document.createElement("INPUT");
    k.setAttribute("type", "submit");
    k.setAttribute("id", "submit");
    k.setAttribute("onclick","checkAnswers(answeid, qAndA(),counter);nextpage()");
    set.appendChild(k);
    document.getElementById("submit").value = "Submit";



    //after clicking submit



    $( function() {
        $( "#selectable" ).selectable();
    } );


}

var answerid = "ggg"

function myfunc(e){
    var x = e.getAttribute('value');
    answerid = x;
}

