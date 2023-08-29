const p = document.getElementById("p");

function find() {
    const text = document.getElementById("text").value;
    if(text !== ""){
        let regEx = new RegExp(text, "gi");
        p.innerHTML = (p.textContent).replace(regEx, "<mark>$&</mark>");
    }
    else{
        p.innerText = "Text is found";
    }
}