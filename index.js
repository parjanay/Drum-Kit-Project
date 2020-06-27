class AddrAndKey{
  static addr;
  static key;
}
function checker(op){
  switch(op){
    case "w": AddrAndKey.addr="sounds/crash.mp3";
              AddrAndKey.key="w";
              break;
    case "a": AddrAndKey.addr="sounds/kick-bass.mp3";
              AddrAndKey.key="a";
              break;
    case "s": AddrAndKey.addr="sounds/snare.mp3";
              AddrAndKey.key="s";
              break;
    case "d": AddrAndKey.addr="sounds/tom-1.mp3";
              AddrAndKey.key="d";
              break;
    case "j": AddrAndKey.addr="sounds/tom-2.mp3";
              AddrAndKey.key="j";
              break;
    case "k": AddrAndKey.addr="sounds/tom-3.mp3";
              AddrAndKey.key="k";
              break;
    case "l": AddrAndKey.addr="sounds/tom-4.mp3";
              AddrAndKey.key="l";
              break;
    default: return;
  }
}
function buttonAnimation(op){
  var btn=document.querySelector("."+op);
  btn.classList.add("pressed");
  setTimeout(function(){
    btn.classList.toggle("pressed");
  },100);
}

var i=0;
var arr=document.querySelectorAll(".drum");
//Event added to the specific button
for(;i<arr.length;i++)
arr[i].addEventListener("click",function(){
  var op=this.textContent;
  buttonAnimation(op);
  checker(op);
  var audio=new Audio(AddrAndKey.addr);
  audio.play();

});
//Event added to the whole document
document.addEventListener("keydown",function(event){
  var ky=event.key;
  buttonAnimation(ky);
  checker(ky);
  var audio=new Audio(AddrAndKey.addr);
  audio.play();
});
