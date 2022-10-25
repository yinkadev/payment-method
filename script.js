function cardspace(){
  var carddigit = document.getElementById('cardno').value;
  if (carddigit.length ==4 || carddigit.length ==9 || carddigit==14){
    document.getElementById("cardno").value = carddigit + "";
    document.getElementById("cardno").max = 1;
  }

}


function addSlashes(){
  var exiredate = document.getElementById('validtill').value;
  if (carddigit.length ==2) {
    document.getElementById("validtill").value = exiredate + "";
    document.getElementById("validtill").max = 1;
  }

}