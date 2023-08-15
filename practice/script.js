let p = document.getElementById("principle");
let r = document.getElementById("rate");
let t = document.getElementById("time");
let result = document.getElementById("result");
function cal() {
    if(p.value == "" || r.value == "" || t.value == ""){
        result.innerText = "Please enter value";
        return;
    }
    else{
    let si = (p.value * r.value * t.value) / 100;
    result.innerText = si;}
}
function reset(){
    p.value = "";
    r.value = "";
    t.value = "";
    result.innerText = "";
}