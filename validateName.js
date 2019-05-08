function validateName() {
    var name = document.getElementById("name1").value;
    var element = document.getElementById("set");
    var vdiv = document.getElementById("divvalidate");
    if (name == "") {
      var redalert = document.getElementById("redalert");
      if (typeof(redalert) != 'undefined' && redalert != null){
        vdiv.removeChild(redalert);
      }
      var p = document.createElement("P");
      p.setAttribute("id", "redalert");
      var w = document.createTextNode("Please enter your Name");
      p.appendChild(w);
      vdiv.appendChild(p);
      element.removeChild(document.getElementById("br"));
    }
    else if(name == null){
      var redalert = document.getElementById("redalert");
      if (typeof(redalert) != 'undefined' && redalert != null){
        vdiv.removeChild(redalert);
      }
      var p = document.createElement("P");
      p.setAttribute("id", "redalert");
      var w = document.createTextNode("Please enter your Name");
      p.appendChild(w);
      vdiv.appendChild(p);
      element.removeChild(document.getElementById("br"));
    }
    else {
      var redalert = document.getElementById("redalert");
      if (typeof(redalert) != 'undefined' && redalert != null){
        vdiv.removeChild(redalert);
      }
      AnswerQuestion();
    }
}
