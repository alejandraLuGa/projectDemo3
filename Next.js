function NextQuestion(){
    var count = increment();
    var h2 = document.getElementById("h2");
    var p = document.getElementById("p11");
    var y1 = document.getElementById("y1");
    var y2 = document.getElementById("y2");
    var y3 = document.getElementById("y3");
    var y4 = document.getElementById("y4");
    var submit1 = document.getElementById("submit");
    var submitnext = document.getElementById("submitnext");
    var pdiv = document.getElementById("pdiv");
    var num = document.getElementById("num");
    var num2 = document.getElementById("num2");
    var set = document.getElementById("set");
    var ol = document.getElementById("selectable");

    //delete elements
    set.removeChild(submitnext);
    set.removeChild(submit1);



    //get list of all the questions

    var questionslist = qAndA();
    var questionmap = questionslist[count-1];

    //change elements
    p.innerHTML = questionmap["question"];
    h2.innerHTML = "Question "+String(count)+":";
    num.innerHTML = String(count)+"/20";

    //loop all the elements in the choices list

    y1.innerHTML = questionmap["choices"][0];
    y1.setAttribute("value", questionmap["choices"][0]);
    y2.innerHTML = questionmap["choices"][1];
    y2.setAttribute("value", questionmap["choices"][1]);
    y3.innerHTML = questionmap["choices"][2];
    y3.setAttribute("value", questionmap["choices"][2]);
    y4.innerHTML = questionmap["choices"][3];
    y4.setAttribute("value", questionmap["choices"][3]);



    function myfunc(e){
        var x = e.getAttribute('value');
        answerid = x;
    }

    //How many questions left?


    //Score
    num2.innerHTML = "Score: "+String(score);

    //after clicking submit

    var k = document.createElement("INPUT");
    k.setAttribute("type", "submit");
    k.setAttribute("id", "submit");
    k.setAttribute("onclick","checkAnswer(answerid, qAndA(),counter);nextpage()");
    set.appendChild(k);
    document.getElementById("submit").value = "Submit";

    $( function() {
        $( "#selectable" ).selectable();
    } );


}


