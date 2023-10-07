function apply(v1){
  var prefix = ["--x","--y","--z","--tx","--ty","--tz","--p","--s"]
  var prefix2 = ["deg","deg","deg","px","px","px","px",""]
  for (let index = 0; index < 8; index++) {
    document.documentElement.style.setProperty(prefix[index], v1[index]+prefix2[index]);
  }
}
var piece =
[
{name:"QUEEN",
color:"BLACK",
code:'<div class="reusable-rect piece-base"> <div class="sides side1"></div><div class="sides side2"></div> </div><div class="reusable-rect piece-upbase"> <div class="sides side1"></div><div class="sides side2"></div> </div><div class="reusable-rect piece-thick"> <div class="sides side1"></div> <div class="sides side2"></div> </div><div class="piece-head"><div class="reusable-trapezoid"><div class="trapesides trapeside1"></div><div class="trapesides trapeside2"></div><div class="trapesides trapeside3"></div><div class="trapesides trapeside4"></div><div class="trapesides trapeside5"></div></div></div><div class="reusable-rect piece-hood"><div class="sides side1"></div> <div class="sides side2"></div></div>'},

{name:"KING",
color:"BLACK",
code:'<div class="reusable-rect piece-base"> <div class="sides side1"></div> <div class="sides side2"></div></div><div class="reusable-rect piece-upbase"> <div class="sides side1"></div><div class="sides side2"></div> </div><div class="reusable-rect piece-thick"> <div class="sides side1"></div> <div class="sides side2"></div> </div><div class="piece-head"><div class="reusable-trapezoid"><div class="trapesides trapeside1"></div><div class="trapesides trapeside2"></div><div class="trapesides trapeside3"></div><div class="trapesides trapeside4"></div><div class="trapesides trapeside5"></div></div></div><div class="reusable-rect piece-hood"> <div class="sides side1"></div> <div class="sides side2"></div> </div>'},

{name:"BISHOP",
color:"BLACK",
code:'<div class="reusable-rect piece-base"> <div class="sides side1"></div> <div class="sides side2"></div> </div><div class="reusable-rect piece-upbase"> <div class="sides side1"></div><div class="sides side2"></div> </div><div class="reusable-rect piece-thick"> <div class="sides side1"></div> <div class="sides side2"></div> </div><div class="reusable-rect piece-head"> <div class="sides side1"></div><div class="sides side2"></div> </div><div class="piece-crown"><div class="ccside ccside1"></div><div class="ccside ccside2"></div><div class="ccside ccside3"></div><div class="ccside ccside4"></div></div>'},

{name:"HORSE",
color:"BLACK",
code:'<div class="reusable-rect piece-base"> <div class="sides side1"></div> <div class="sides side2"></div> </div><div class="reusable-rect piece-upbase"> <div class="sides side1"></div><div class="sides side2"></div> </div><div class="reusable-rect piece-tilt1"> <div class="sides side1"></div><div class="sides side2"></div> </div><div class="reusable-rect piece-tilt2"> <div class="sides side1"></div><div class="sides side2"></div> </div><div class="reusable-rect piece-tilt3"> <div class="sides side1"></div><div class="sides side2"></div> </div>'},

{name:"ROOK",
color:"BLACK",
code:'<div class="reusable-rect piece-base"> <div class="sides side1"></div> <div class="sides side2"></div> </div><div class="reusable-rect piece-upbase"> <div class="sides side1"></div><div class="sides side2"></div> </div><div class="reusable-rect piece-thick"> <div class="sides side1"></div> <div class="sides side2"></div> </div><div class="reusable-rect piece-head"><div class="sides side1"></div><div class="sides side2"></div><div class="reusable-rect piece-head-left"> <div class="sides side1"></div><div class="sides side2"></div> </div><div class="reusable-rect piece-head-right"> <div class="sides side1"></div><div class="sides side2"></div> </div></div><div class="reusable-rect piece-head-center"> <div class="sides side1"></div><div class="sides side2"></div> </div>'},

{name:"PAWN",
color:"BLACK",
code:'<div class="reusable-rect piece-base"> <div class="sides side1"></div> <div class="sides side2"></div> </div><div class="reusable-rect piece-upbase"> <div class="sides side1"></div><div class="sides side2"></div> </div><div class="reusable-rect piece-thick"> <div class="sides side1"></div> <div class="sides side2"></div> </div><div class="reusable-rect piece-head"> <div class="sides side1"></div><div class="sides side2"></div> </div>'}
]
var piece2 =
[
{name:"QUEEN",
color:"WHITE",
code:'<div class="reusable-rect piece-base"> <div class="sides side1"></div><div class="sides side2"></div> </div><div class="reusable-rect piece-upbase"> <div class="sides side1"></div><div class="sides side2"></div> </div><div class="reusable-rect piece-thick"> <div class="sides side1"></div> <div class="sides side2"></div> </div><div class="piece-head"><div class="reusable-trapezoid"><div class="trapesides trapeside1"></div><div class="trapesides trapeside2"></div><div class="trapesides trapeside3"></div><div class="trapesides trapeside4"></div><div class="trapesides trapeside5"></div></div></div><div class="reusable-rect piece-hood"><div class="sides side1"></div> <div class="sides side2"></div></div>'},

{name:"KING",
color:"WHITE",
code:'<div class="reusable-rect piece-base"> <div class="sides side1"></div> <div class="sides side2"></div></div><div class="reusable-rect piece-upbase"> <div class="sides side1"></div><div class="sides side2"></div> </div><div class="reusable-rect piece-thick"> <div class="sides side1"></div> <div class="sides side2"></div> </div><div class="piece-head"><div class="reusable-trapezoid"><div class="trapesides trapeside1"></div><div class="trapesides trapeside2"></div><div class="trapesides trapeside3"></div><div class="trapesides trapeside4"></div><div class="trapesides trapeside5"></div></div></div><div class="reusable-rect piece-hood"> <div class="sides side1"></div> <div class="sides side2"></div> </div>'},

{name:"BISHOP",
color:"WHITE",
code:'<div class="reusable-rect piece-base"> <div class="sides side1"></div> <div class="sides side2"></div> </div><div class="reusable-rect piece-upbase"> <div class="sides side1"></div><div class="sides side2"></div> </div><div class="reusable-rect piece-thick"> <div class="sides side1"></div> <div class="sides side2"></div> </div><div class="reusable-rect piece-head"> <div class="sides side1"></div><div class="sides side2"></div> </div><div class="piece-crown"><div class="ccside ccside1"></div><div class="ccside ccside2"></div><div class="ccside ccside3"></div><div class="ccside ccside4"></div></div>'},

{name:"HORSE",
color:"WHITE",
code:'<div class="reusable-rect piece-base"> <div class="sides side1"></div> <div class="sides side2"></div> </div><div class="reusable-rect piece-upbase"> <div class="sides side1"></div><div class="sides side2"></div> </div><div class="reusable-rect piece-tilt1"> <div class="sides side1"></div><div class="sides side2"></div> </div><div class="reusable-rect piece-tilt2"> <div class="sides side1"></div><div class="sides side2"></div> </div><div class="reusable-rect piece-tilt3"> <div class="sides side1"></div><div class="sides side2"></div> </div>'},

{name:"ROOK",
color:"WHITE",
code:'<div class="reusable-rect piece-base"> <div class="sides side1"></div> <div class="sides side2"></div> </div><div class="reusable-rect piece-upbase"> <div class="sides side1"></div><div class="sides side2"></div> </div><div class="reusable-rect piece-thick"> <div class="sides side1"></div> <div class="sides side2"></div> </div><div class="reusable-rect piece-head"><div class="sides side1"></div><div class="sides side2"></div><div class="reusable-rect piece-head-left"> <div class="sides side1"></div><div class="sides side2"></div> </div><div class="reusable-rect piece-head-right"> <div class="sides side1"></div><div class="sides side2"></div> </div></div><div class="reusable-rect piece-head-center"> <div class="sides side1"></div><div class="sides side2"></div> </div>'},

{name:"PAWN",
color:"WHITE",
code:'<div class="reusable-rect piece-base"> <div class="sides side1"></div> <div class="sides side2"></div> </div><div class="reusable-rect piece-upbase"> <div class="sides side1"></div><div class="sides side2"></div> </div><div class="reusable-rect piece-thick"> <div class="sides side1"></div> <div class="sides side2"></div> </div><div class="reusable-rect piece-head"> <div class="sides side1"></div><div class="sides side2"></div> </div>'}
]
var table = [[piece[4],piece[3],piece[2],piece[1],piece[0],piece[2],piece[3],piece[4]],
[piece[5],piece[5],piece[5],piece[5],piece[5],piece[5],piece[5],piece[5]],
[,,,,,,,,],
[,,,,,,,,],
[,,,,,,,,],
[,,,,,,,,],
[,,,,,,,,],
[,,,,,,,,],
[,,,,,,,,],
[,,,,,,,,],
[piece2[5],piece2[5],piece2[5],piece2[5],piece2[5],piece2[5],piece2[5],piece2[5]],
[piece2[4],piece2[3],piece2[2],piece2[1],piece2[0],piece2[2],piece2[3],piece2[4]]
];

function d3(){
  document.getElementById('ViewSide').disabled = false;
  document.getElementById('DView').value = "2D";
  document.getElementById('DView').setAttribute("onclick","d2()");
  if(document.getElementById('ViewSide').value == "bal"){
    jobb();
  }
  else{
    bal();
  }
  apply([45,0,0,0,0,215,3705,0.6]);
}
function d2(){
  document.getElementById('ViewSide').disabled = true;
  document.getElementById('DView').value = "3D";
  document.getElementById('DView').setAttribute("onclick","d3()");
  apply([0,0,0,0,-150,0,3705,0.6]);
}
function jobb(){
  document.getElementById('ViewSide').value = "bal";
  document.getElementById('ViewSide').setAttribute("onclick","bal()");
  apply([45,0,30,0,0,215,3705,0.6]);
}
function bal(){
  document.getElementById('ViewSide').value = "jobb";
  document.getElementById('ViewSide').setAttribute("onclick","jobb()");
  apply([45,0,-30,0,0,215,3705,0.6]);
}
function Click(v){
  console.log(v);
}
function General(){
  var board = document.getElementById("board");
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 8; j++) {
      board.innerHTML+= `<div onclick="Click(this)" class="piece" id="${i}:${j}" style="--v:${i};--h:${j};"></div>`;
      if (table[i][j] != undefined) {        
        var div = document.getElementById(i+":"+j);
        div.innerHTML+=table[i][j].code;
        if (table[i][j].color =="BLACK"){
          div.classList.add("BLACK");
        }
        div.classList.add(table[i][j].name);
      }
    }
  }
}
window.addEventListener('load', function(){
  setTimeout(function(){apply([0,0,0,0,-150,0,3705,0.6])},1000)
  setTimeout(function(){General()},3000)
});