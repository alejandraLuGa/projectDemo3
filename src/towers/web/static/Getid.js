function getid(e){
    var set = document.getElementById("set");
    var k = document.createElement("P");
    k.setAttribute("type", "text");
    k.setAttribute("id", "text");
    set.appendChild(k);
    document.getElementById("text").value = e;

}