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
    y.setAttribute("id", "submit01");
    y.setAttribute("onclick", "validateName()");
    element.appendChild(y);
    document.getElementById("submit01").value = "Submit!";
}
function validateName() {
    var name = document.getElementById("name1").value;
    if (name == "") {
        alert("Please enter your Name");
        document.getElementById("name1").focus();
        return false;
    }
    else if(name == null){
        alert("Please enter your Name");
        document.getElementById("name1").focus();
        return false;
    }
    else {
        AnswerQuestion();
    }
}