var nextstep = 0;
var nextstep_p = ["BLACK","WHITE"]
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
code:'<div class="reusable-rect piece-base"> <div class="sides side1"></div><div class="sides side2"></div> </div><div class="reusable-rect piece-thick"> <div class="sides side1"></div> <div class="sides side2"></div> </div><div class="piece-head"></div><div class="reusable-rect piece-hood"><div class="sides side1"></div> <div class="sides side2"></div></div>'},

{name:"KING",
color:"BLACK",
code:'<div class="reusable-rect piece-base"> <div class="sides side1"></div> <div class="sides side2"></div></div><div class="reusable-rect piece-thick"> <div class="sides side1"></div> <div class="sides side2"></div> </div><div class="piece-head"></div><div class="reusable-rect piece-hood"> <div class="sides side1"></div> <div class="sides side2"></div> </div>'},

{name:"BISHOP",
color:"BLACK",
code:'<div class="reusable-rect piece-base"> <div class="sides side1"></div> <div class="sides side2"></div> </div><div class="reusable-rect piece-thick"> <div class="sides side1"></div> <div class="sides side2"></div> </div><div class="reusable-rect piece-head"> <div class="sides side1"></div><div class="sides side2"></div> </div>'},

{name:"HORSE",
color:"BLACK",
code:'<div class="reusable-rect piece-base"> <div class="sides side1"></div> <div class="sides side2"></div> </div><div class="reusable-rect piece-tilt1"> <div class="sides side1"></div><div class="sides side2"></div> </div><div class="reusable-rect piece-tilt2"> <div class="sides side1"></div><div class="sides side2"></div> </div><div class="reusable-rect piece-tilt3"> <div class="sides side1"></div><div class="sides side2"></div> </div>'},

{name:"ROOK",
color:"BLACK",
code:'<div class="reusable-rect piece-base"> <div class="sides side1"></div> <div class="sides side2"></div> </div><div class="reusable-rect piece-thick"> <div class="sides side1"></div> <div class="sides side2"></div> </div><div class="reusable-rect piece-head"><div class="sides side1"></div><div class="sides side2"></div><div class="reusable-rect piece-head-left"> <div class="sides side1"></div><div class="sides side2"></div> </div><div class="reusable-rect piece-head-right"> <div class="sides side1"></div><div class="sides side2"></div> </div></div><div class="reusable-rect piece-head-center"> <div class="sides side1"></div><div class="sides side2"></div> </div>'},

{name:"PAWN",
color:"BLACK",
code:'<div class="reusable-rect piece-base"> <div class="sides side1"></div> <div class="sides side2"></div> </div><div class="reusable-rect piece-thick"> <div class="sides side1"></div> <div class="sides side2"></div> </div><div class="reusable-rect piece-head"> <div class="sides side1"></div><div class="sides side2"></div> </div>'}
]
var piece2 =
[
{name:"QUEEN",
color:"WHITE",
code:'<div class="reusable-rect piece-base"> <div class="sides side1"></div><div class="sides side2"></div> </div><div class="reusable-rect piece-thick"> <div class="sides side1"></div> <div class="sides side2"></div> </div><div class="piece-head"></div><div class="reusable-rect piece-hood"><div class="sides side1"></div> <div class="sides side2"></div></div>'},

{name:"KING",
color:"WHITE",
code:'<div class="reusable-rect piece-base"> <div class="sides side1"></div> <div class="sides side2"></div></div><div class="reusable-rect piece-thick"> <div class="sides side1"></div> <div class="sides side2"></div> </div><div class="piece-head"></div><div class="reusable-rect piece-hood"> <div class="sides side1"></div> <div class="sides side2"></div> </div>'},

{name:"BISHOP",
color:"WHITE",
code:'<div class="reusable-rect piece-base"> <div class="sides side1"></div> <div class="sides side2"></div> </div><div class="reusable-rect piece-thick"> <div class="sides side1"></div> <div class="sides side2"></div> </div><div class="reusable-rect piece-head"> <div class="sides side1"></div><div class="sides side2"></div> </div>'},

{name:"HORSE",
color:"WHITE",
code:'<div class="reusable-rect piece-base"> <div class="sides side1"></div> <div class="sides side2"></div> </div><div class="reusable-rect piece-tilt1"> <div class="sides side1"></div><div class="sides side2"></div> </div><div class="reusable-rect piece-tilt2"> <div class="sides side1"></div><div class="sides side2"></div> </div><div class="reusable-rect piece-tilt3"> <div class="sides side1"></div><div class="sides side2"></div> </div>'},

{name:"ROOK",
color:"WHITE",
code:'<div class="reusable-rect piece-base"> <div class="sides side1"></div> <div class="sides side2"></div> </div><div class="reusable-rect piece-thick"> <div class="sides side1"></div> <div class="sides side2"></div> </div><div class="reusable-rect piece-head"><div class="sides side1"></div><div class="sides side2"></div><div class="reusable-rect piece-head-left"> <div class="sides side1"></div><div class="sides side2"></div> </div><div class="reusable-rect piece-head-right"> <div class="sides side1"></div><div class="sides side2"></div> </div></div><div class="reusable-rect piece-head-center"> <div class="sides side1"></div><div class="sides side2"></div> </div>'},

{name:"PAWN",
color:"WHITE",
code:'<div class="reusable-rect piece-base"> <div class="sides side1"></div> <div class="sides side2"></div> </div><div class="reusable-rect piece-thick"> <div class="sides side1"></div> <div class="sides side2"></div> </div><div class="reusable-rect piece-head"> <div class="sides side1"></div><div class="sides side2"></div> </div>'}
]
var table = [[piece[4],piece[3],piece[2],piece[1],piece[0],piece[2],piece[3],piece[4]],
[piece[5],piece[5],piece[5],piece[5],piece[5],piece[5],piece[5],piece[5]],
[piece[5],,,,,,,piece2[5]],
[,,,,,,,],
[,,,,,,,],
[,,,,,,,],
[,,,,,,,],
[,,,,,,,],
[,,,,,,,],
[,,,,,,,],
[piece2[5],piece2[5],piece2[5],piece2[5],piece2[5],piece2[5],piece2[5],piece2[5]],
[piece2[4],piece2[3],piece2[2],piece2[1],piece2[0],piece2[2],piece2[3],piece2[4]]
];

function d3(){
  document.getElementById('ViewSide').disabled = false;
  document.getElementById('DView').value = "2D";
  document.getElementById('DView').setAttribute("onclick","d2()");
  if(document.getElementById('ViewSide').value == "jobb"){
    jobb();
  }
  else{
    bal();
  }
  apply([45,0,-30,0,0,215,3705,0.6]);
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
var selected;
var lastselected = document.body;
function Click(){
  if (lasthover.classList.contains(nextstep_p[nextstep])) {    
    lastselected.classList.remove("selected");
    selected = lasthover;
    lastselected = selected;
    selected.classList.add("selected");
    Possiblesteps();
  }else if(lasthover.classList.contains("possible")){
    Lepes();
  }
}
function Lepes(){
  document.getElementById(lasthover.id).classList = selected.classList;
  selected.classList = "piece";
  document.getElementById(lasthover.id).classList.remove("selected");
  var iy = selected.id.split(":")
  var iy2 = lasthover.id.split(":");
  document.getElementById(lasthover.id).innerHTML = table[iy[0]][iy[1]].code;
  table[iy2[0]][iy2[1]] = table[iy[0]][iy[1]];
  table[iy[0]][iy[1]] = undefined;
  for (let i = 0; i < possibles.length; i++) {
    document.getElementById(possibles[i]).classList.remove("possible");
    document.getElementById(possibles[i]).classList.remove("attack");
  }
  if (nextstep == 0) {
    nextstep = 1;
  }else{
    nextstep = 0;
  }
  selected = null;
  possibles = [];
}
var possibles = new Array();
function Possiblesteps(){
  if (possibles != undefined) {    
    for (let i = 0; i < possibles.length; i++) {
      document.getElementById(possibles[i]).classList.remove("possible");
      document.getElementById(possibles[i]).classList.remove("attack");

    }
    possibles = new Array();
  }
  var iy = selected.id.split(':');
  var type = selected.classList[2];
  if (type == "PAWN") {
    for (let i = 0; i < 3; i++) {
      if (selected.classList[1] == "WHITE" || selected.classList[1] == "BLACK" && selected.classList.contains("forditva")) {
        iy[0] = parseInt(iy[0])-1;
      }else{
        iy[0] = parseInt(iy[0])+1;
      }
      if(document.getElementById(iy[0]+":"+iy[1]).classList[1] == nextstep_p.filter(i => i == nextstep_p[nextstep])[0] || document.getElementById(iy[0]+":"+iy[1]).classList[1] == nextstep_p.filter(i => i != nextstep_p[nextstep])[0]){
        break;
      }
      if(document.getElementById(iy[0]+":"+iy[1]).classList[1] != nextstep_p[nextstep]){
        possibles.push(iy[0]+":"+iy[1]);
        document.getElementById(iy[0]+":"+iy[1]).classList.add("possible");
      }
    }
    iy = selected.id.split(':');
    if (selected.classList[1] == "BLACK" || (selected.classList[1] == "WHITE" && selected.classList.contains("forditva"))) {
      if ((parseInt(iy[0])+1)<12 && (parseInt(iy[1])+1)<8 && document.getElementById((parseInt(iy[0])+1)+":"+(parseInt(iy[1])+1)).classList[1] == nextstep_p.filter(i => i != nextstep_p[nextstep])[0]) {
        possibles.push((parseInt(iy[0])+1)+":"+(parseInt(iy[1])+1));
        document.getElementById((parseInt(iy[0])+1)+":"+(parseInt(iy[1])+1)).classList.add("attack");
      }
      if ((parseInt(iy[0])+1)<12 && (parseInt(iy[1])-1)>-1 && document.getElementById((parseInt(iy[0])+1)+":"+(parseInt(iy[1])-1)).classList[1] == nextstep_p.filter(i => i != nextstep_p[nextstep])[0]) {
        possibles.push((parseInt(iy[0])+1)+":"+(parseInt(iy[1])-1));
        document.getElementById((parseInt(iy[0])+1)+":"+(parseInt(iy[1])-1)).classList.add("attack");
      }
    }else{
      if ((parseInt(iy[0])-1)>-1 && (parseInt(iy[1])-1)>-1 && document.getElementById((parseInt(iy[0])-1)+":"+(parseInt(iy[1])-1)).classList[1] == nextstep_p.filter(i => i != nextstep_p[nextstep])[0]) {
        possibles.push((parseInt(iy[0])-1)+":"+(parseInt(iy[1])-1));
        document.getElementById((parseInt(iy[0])-1)+":"+(parseInt(iy[1])-1)).classList.add("attack");
      }
      if ((parseInt(iy[0])-1)>-1 && (parseInt(iy[1])+1)<8 && document.getElementById((parseInt(iy[0])-1)+":"+(parseInt(iy[1])+1)).classList[1] == nextstep_p.filter(i => i != nextstep_p[nextstep])[0]) {
        possibles.push((parseInt(iy[0])-1)+":"+(parseInt(iy[1])+1));
        document.getElementById((parseInt(iy[0])-1)+":"+(parseInt(iy[1])+1)).classList.add("attack");
      }
    }
    /*for (let i = 0; i < 3; i++) {
      iy[0] = selected.classList[1] == "WHITE" ? parseInt(iy[0])-1:parseInt(iy[0])+1;
      if(document.getElementById(iy[0]+":"+iy[1]).classList[1] != nextstep_p[nextstep]){
        possibles.push(iy[0]+":"+iy[1]);
        document.getElementById(iy[0]+":"+iy[1]).classList.add("possible");
    }
    if (document.getElementById(iy[0]+":"+iy[1]).classList[1] == nextstep_p.filter(i => i != nextstep_p[nextstep])[0]) {
      possibles.push(iy[0]+":"+iy[1]);
      document.getElementById(iy[0]+":"+iy[1]).classList.add("attack");
    }*/
  }
}
function General(){
  var board = document.getElementById("board");
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 8; j++) {
      board.innerHTML+= `<div onclick="Click()" class="piece" id="${i}:${j}" style="--v:${i};--h:${j};"></div>`;
      if (table[i][j] != undefined) {        
        var div = document.getElementById(i+":"+j);
        div.innerHTML+=table[i][j].code;
        div.classList.add(table[i][j].color);
        div.classList.add(table[i][j].name);
      }
    }
  }
}
window.addEventListener('load', function(){
  setTimeout(function(){apply([0,0,0,0,-150,0,3705,0.6])},1000)
  setTimeout(function(){General(),Mouse()},4000)
});
var lasthover = document.body;
function Mouse(){
  document.getElementById("board").addEventListener('mousemove', e => {
    var element = document.elementFromPoint(e.clientX, e.clientY).closest('.piece');
    if (element != null) {
      lasthover.classList.remove("hover");
      if (element != null) {
        lasthover = element;
      }else{
        element = document.elementsFromPoint(e.clientX, e.clientY).filter(i => i.classList.contains('.piece'));
        if (element.length == 1) {
          lasthover = element[0];
        }
      }
      if (element.length != 0 && (element.classList.contains(nextstep_p[nextstep]) || possibles!= undefined && possibles.includes(element.id))) {
        element.classList.add("hover");
      }
    }
    setTimeout(function(){Mouse()},0)
  }, {passive: true,once: true})
}