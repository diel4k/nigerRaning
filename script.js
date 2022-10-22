const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const chayka = document.getElementById("chayka");
document.addEventListener("keydown",function(event){
    jump()
})
function jump(){
if (dino.classList != 'jump')
dino.classList.add("jump");
setTimeout(function(){
dino.classList.remove("jump");
}, 600)
}
let isAlive = setInterval(function(){
let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
let chaykaLeft = parseInt(window.getComputedStyle(chayka).getPropertyValue("left"));
if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140){
alert("game over")
}
if (chaykaLeft < 50 && chaykaLeft > 0 && dinoTop >= 140){
alert("game over")
}
// if (let srow = 0, i < 100, i++,actusLeft < 0){
// let score = document.getElementById("s");
// score.innerHTML = srow;
// }
}, 10)