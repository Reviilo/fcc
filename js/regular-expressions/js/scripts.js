// (function(){}());

function withoutSpaces (str) {
  var content = "";
  for (var i = 0; i < str.length; i++) {
    content += (str[i] == " ") ? "-" : str[i];
  }
  return content;
}

var natvar = document.getElementById('navbar');
console.log(natvar);
