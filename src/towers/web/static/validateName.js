var name = ""

function validateName() {
  name = document.getElementById("name1").value;
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
      AnswerQuestion();
    }
}
