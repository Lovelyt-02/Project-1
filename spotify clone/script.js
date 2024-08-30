console.log("welcome to spotify");
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay= document.getElementById("masterPlay");
let myprogressbar = document.getElementById("myprogressbar");

let songs =[
    {songName:"mere pass tum ho", filepath: "1.mp3"},
    {songName:"mere pass tum ho", filepath: "1.mp3"},
    {songName:"mere pass tum ho", filepath: "1.mp3"}
]

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
})
// //listen to event
audioElement.addEventListener('timeupdate', ()=>{
progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
myprogressbar.value = progress;
})

myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime = (myprogressbar.value * audioElement.duration)/100;
})