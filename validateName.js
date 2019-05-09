function validateName() {
    var name = document.getElementById("name1").value;
	var name1 = document.getElementById("name1");
    var set = document.getElementById("set");
    var vdiv = document.getElementById("divvalidate");
	var clockdiv = document.getElementById("clockdiv");
	var redalert = document.getElementById("redalert");
  var brrr = document.getElementById("br");
    if (name == "") {
      if (typeof(redalert) != 'undefined' && redalert != null){
        vdiv.removeChild(redalert);
      }
      if (typeof(brrr) != 'undefined' && brrr != null){
        set.removeChild(brrr);
      }
      var p1 = document.createElement("P");
      p1.setAttribute("id", "redalert");
      var w1 = document.createTextNode("Please enter your Name");
      p1.appendChild(w1);
      vdiv.appendChild(p1);

    }
    else if(name == null){
      if (typeof(redalert) != 'undefined' && redalert != null){
        vdiv.removeChild(redalert);
      }
      if (typeof(brrr) != 'undefined' && brrr != null){
        set.removeChild(brrr);
      }
      var p2 = document.createElement("P");
      p2.setAttribute("id", "redalert");
      var w2 = document.createTextNode("Please enter your Name");
      p2.appendChild(w);
      vdiv.appendChild(p);
    }
    else {
      if (typeof(redalert) != 'undefined' && redalert != null){
        vdiv.removeChild(redalert);
      }
      if (typeof(brrr) != 'undefined' && brrr != null){
        set.removeChild(brrr);
      }
      var h2 = document.getElementById("h2");
	  var submit01 = document.getElementById("submit01");
      h2.innerHTML = "Question "+String(counter)+":";

    //delete elements
    set.removeChild(name1);
    set.removeChild(submit01);


    //get list of all the questions

    var questionslist = qAndA();
    var questionmap = questionslist[counter-1];

    //add elements
    var p3 = document.createElement("p");
    p3.setAttribute("id", "p11");
    var w3 = document.createTextNode(questionmap["question"]);
    p3.appendChild(w3);
    set.appendChild(p3);


    var form1 = document.createElement("FORM");
    form1.setAttribute("id", "form1");
    set.appendChild(form1);

    var fdiv = document.createElement("div");
    fdiv.setAttribute("id", "botton");
    var form11 = document.getElementById("form1");
    form11.appendChild(fdiv);



    //loop all the elements in the choices list


    var la1 = document.createElement("LABEL");
    la1.setAttribute("id", "l1");
    var t1 = document.createTextNode(questionmap["choices"][0]);
    la1.appendChild(t1);
    form11.appendChild(la1);
    var i1 = document.createElement("INPUT");
    i1.setAttribute("id", "y1");
    i1.setAttribute("type", "radio");
    i1.setAttribute("name", "choice");
    i1.setAttribute("class", questionmap["choices"][0]);
    i1.setAttribute("onclick", "myfunc(this)");
    form11.appendChild(i1);

    var br1 = document.createElement("BR");
    form11.appendChild(br1);

    var br2 = document.createElement("BR");
    form11.appendChild(br2);



    var la2 = document.createElement("LABEL");
    la2.setAttribute("id", "l2");
    var t2 = document.createTextNode(questionmap["choices"][1]);
    la2.appendChild(t2);
    form11.appendChild(la2);
    var i2 = document.createElement("INPUT");
    i2.setAttribute("id", "y2");
    i2.setAttribute("type", "radio");
    i2.setAttribute("name", "choice");
    i2.setAttribute("class", questionmap["choices"][1]);
    i2.setAttribute("onclick", "myfunc(this)");
    form11.appendChild(i2);

    var br3 = document.createElement("BR");
    form11.appendChild(br3);

    var br4 = document.createElement("BR");
    form11.appendChild(br4);

    var la3 = document.createElement("LABEL");
    la3.setAttribute("id", "l3");
    var t3 = document.createTextNode(questionmap["choices"][2]);
    la3.appendChild(t3);
    form11.appendChild(la3);
    var i3 = document.createElement("INPUT");
    i3.setAttribute("id", "y3");
    i3.setAttribute("type", "radio");
    i3.setAttribute("name", "choice");
    i3.setAttribute("class", questionmap["choices"][2]);
    i3.setAttribute("onclick", "myfunc(this)");
    form11.appendChild(i3);


    var br5 = document.createElement("BR");
    form11.appendChild(br5);

    var br6 = document.createElement("BR");
    form11.appendChild(br6);



    var la4 = document.createElement("LABEL");
    la4.setAttribute("id", "l4");
    var t4 = document.createTextNode(questionmap["choices"][3]);
    la4.appendChild(t4);
    form11.appendChild(la4);
    var i4 = document.createElement("INPUT");
    i4.setAttribute("id", "y4");
    i4.setAttribute("type", "radio");
    i4.setAttribute("name", "choice");
    i4.setAttribute("class", questionmap["choices"][3]);
    i4.setAttribute("onclick", "myfunc(this)");
    form11.appendChild(i4);

    var br7 = document.createElement("BR");
    form11.appendChild(br7);

    var br8 = document.createElement("BR");
    form11.appendChild(br8);




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
    k.setAttribute("id", "submit1");
    k.setAttribute("onclick","checkAnswer(answerid, qAndA(),counter);nextpage()");
    set.appendChild(k);
    document.getElementById("submit1").value = "Submit";
    }
}
