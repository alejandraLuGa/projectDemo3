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


    var form1 = document.createElement("FORM");
    form1.setAttribute("id", "form1");
    set.appendChild(form1);

    var fdiv = document.createElement("div");
    fdiv.setAttribute("id", "botton");
    var form11 = document.getElementById("form1");
    form11.appendChild(fdiv);



    //loop all the elements in the choices list


    var y = document.createElement("LABEL");
    y.setAttribute("id", "l1");
    var t = document.createTextNode(questionmap["choices"][0]);
    y.appendChild(t);
    form11.appendChild(y);
    var i = document.createElement("INPUT");
    i.setAttribute("id", "y1");
    i.setAttribute("type", "radio");
    i.setAttribute("name", questionmap["choices"][0]);
    i.setAttribute("onclick", "myfunc(this)");
    form11.appendChild(i);

    var br = document.createElement("BR");
    form11.appendChild(br);


    var br = document.createElement("BR");
    form11.appendChild(br);



    var y = document.createElement("LABEL");
    y.setAttribute("id", "l2");
    var t = document.createTextNode(questionmap["choices"][1]);
    y.appendChild(t);
    form11.appendChild(y);
    var i = document.createElement("INPUT");
    i.setAttribute("id", "y2");
    i.setAttribute("type", "radio");
    i.setAttribute("name", questionmap["choices"][1]);
    i.setAttribute("onclick", "myfunc(this)");
    form11.appendChild(i);

    var br = document.createElement("BR");
    form11.appendChild(br);
    br.setAttribute("id", "brr");

    var br = document.createElement("BR");
    form11.appendChild(br);
    br.setAttribute("id", "brr");


    var y = document.createElement("LABEL");
    y.setAttribute("id", "l3");
    var t = document.createTextNode(questionmap["choices"][2]);
    y.appendChild(t);
    form11.appendChild(y);
    var i = document.createElement("INPUT");
    i.setAttribute("id", "y3");
    i.setAttribute("type", "radio");
    i.setAttribute("name", questionmap["choices"][2]);
    i.setAttribute("onclick", "myfunc(this)");
    form11.appendChild(i);

    var br = document.createElement("BR");
    form11.appendChild(br);


    var br = document.createElement("BR");
    form11.appendChild(br);



    var y = document.createElement("LABEL");
    y.setAttribute("id", "l4");
    var t = document.createTextNode(questionmap["choices"][3]);
    y.appendChild(t);
    form11.appendChild(y);
    var i = document.createElement("INPUT");
    i.setAttribute("id", "y4");
    i.setAttribute("type", "radio");
    i.setAttribute("name", questionmap["choices"][3]);
    i.setAttribute("onclick", "myfunc(this)");
    form11.appendChild(i);

    var br = document.createElement("BR");
    form11.appendChild(br);



    var br = document.createElement("BR");
    form11.appendChild(br);



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
    k.setAttribute("onclick","checkAnswer(answerid, qAndA(),counter);nextpage()");
    set.appendChild(k);
    document.getElementById("submit").value = "Submit";



    //after clicking submit



    $( function() {
        $( "#selectable" ).selectable();
    } );


}





