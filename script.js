const speakbtn = document.getElementById('btn');
const text = document.getElementById('text');
speakbtn.addEventListener('click',()=>{
    const utterance = new SpeechSynthesisUtterance(text.value);
    speechSynthesis.speak(utterance);
})