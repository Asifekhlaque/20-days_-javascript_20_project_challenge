var encriptText;
function encript(){
    var baseText=document.getElementById("en").value;
    encriptText=window.btoa(baseText);
    document.getElementById("de").value=encriptText;

}