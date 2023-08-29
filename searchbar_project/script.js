let search = document.querySelector('.search_bar');
let search_btn = document.querySelector('.search_btn');

search_btn.onclick = function(){
    let url = `https://www.google.com/search?q=`+search.value;
    window.open(url);
}