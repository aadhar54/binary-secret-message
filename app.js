let btn = document.getElementById('btn');
let inputTextArea = document.getElementById('input-txtarea');
let outputDiv = document.getElementById('output-div');

function playAudio(){
    let audio = new Audio('./sounds/bell.mp3');
    audio.play();
}

btn.addEventListener('click',()=>{
    let input = inputTextArea.value;
    fetch('https://api.funtranslations.com/translate/morse.json?text='+input)
    .then(resonse=>resonse.json)
    .then((json)=>{
        outputDiv.innerText = json.contents.translated;
    })
})
