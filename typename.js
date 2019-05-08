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
    //<textarea rows="2" id="name1"></textarea>
    var x = document.createElement("TEXTAREA");
    x.setAttribute("id", "name1");
    x.setAttribute("rows", "1");

    element.appendChild(x);

    var z = document.createElement("DIV");
    z.setAttribute("id", "divvalidate");

    element.appendChild(z);


    var br = document.createElement("br");
    br.setAttribute("id", "br");
    element.appendChild(br);


    var y = document.createElement("INPUT");
    y.setAttribute("type", "submit");
    y.setAttribute("id", "submit01");
    y.setAttribute("onclick", "validateName()");
    element.appendChild(y);
    document.getElementById("submit01").value = "Submit!";
}
