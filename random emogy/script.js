const emoji=["😄","😆", "😊", "😃","😏","😍","😘","😚","😳","😌","😆","😁","😉","😜","😝","😀","😗","😙","😛","😡","😎","👿","😈","😐","😶", 
"😇"]
function generate(){
    document.querySelector(".card p").innerText=emoji[Math.floor(Math.random()*emoji.length)];
}