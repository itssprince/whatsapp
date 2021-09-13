function send(){
let how = "How are you"
let janvi = "Hello i am janvi"
let insend = document.getElementById("mainin").value;
let inp = document.getElementById("in")
let out = document.getElementById("out")
let prince = "Hello i am prince"
let whatn = "What is your name"
  fu ()
 inp.innerText = insend
let clr = document.getElementById("mainin").value = ""
}


function fu (){
let how = "How are you"
  let janvi = "Hello i am janvi"
  let insend = document.getElementById("mainin").value;
  let inp = document.getElementById("in")
  let out = document.getElementById("out")
  let prince = "Hello i am prince"
  let whatn = "What is your name"
  if (insend === prince) {
    out.innerText = "hello prince"
  } else if (insend === janvi) {
    out.innerText = "hello janvi"
  } else if (insend === whatn) {
    out.innerText = "my name is robot"
  } else if (insend === how) {
    out.innerText = "i am fine"
  }
  else {
    out.innerText = " "
  }
}
