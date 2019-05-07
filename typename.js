function typename(){
    var h2 = document.getElementById("h2");
    var h3 = document.getElementById("h3");
    var element = document.getElementById("set");
    var a = document.getElementById("foo");
    h2.innerHTML = "What is your name?";
    //delete elements
    element.removeChild(h3);
    element.removeChild(a);
    //add elements
    var x = document.createElement("INPUT");
    x.setAttribute("id", "name1");
    x.setAttribute("type", "text");

    element.appendChild(x);

    var br = document.createElement("br");
    element.appendChild(br);
    element.appendChild(br);


    var y = document.createElement("INPUT");
    y.setAttribute("type", "submit");
    y.setAttribute("id", "submit");
    y.setAttribute("onclick", "AnswerQuestion()");
    element.appendChild(y);
    document.getElementById("submit").value = "Submit!";
}