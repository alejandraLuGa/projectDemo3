function NextQuestion(){
    increment();
    var h2 = document.getElementById("h2");
    var p = document.getElementById("p11");

    var submit0 = document.getElementById("submit"+String(counter-1));
    var submitnext = document.getElementById("submitnext");
    var pdiv = document.getElementById("pdiv");
    var num = document.getElementById("num");
    var num2 = document.getElementById("num2");
    var set = document.getElementById("set");
    var form11 = document.getElementById("form"+String(counter-1));


    //delete elements
    set.removeChild(form11);
    set.removeChild(submitnext);
    set.removeChild(submit0);




    //get list of all the questions

    var questionslist = qAndA();
    var questionmap = questionslist[counter-1];

    //change elements
    p.innerHTML = questionmap["question"];
    h2.innerHTML = "Question "+String(counter)+":";
    num.innerHTML = String(counter)+"/20";

    //loop all the elements in the choices list

    var form1 = document.createElement("FORM");
    form1.setAttribute("id", "form"+String(counter));
    set.appendChild(form1);

    var fdiv = document.createElement("div");
    fdiv.setAttribute("id", "botton");
    var form11 = document.getElementById("form"+String(counter));
    form11.appendChild(fdiv);


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
    var br = document.createElement("BR");
    form11.appendChild(br);


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




    //How many questions left?


    //Score
    num2.innerHTML = "Score: "+String(score);

    //after clicking submit

    var k = document.createElement("INPUT");
    k.setAttribute("type", "submit");
    k.setAttribute("id", "submit"+String(counter));
    k.setAttribute("onclick","checkAnswer(answerid, qAndA(),counter);nextpage()");
    set.appendChild(k);
    document.getElementById("submit"+String(counter)).value = "Submit";

}
