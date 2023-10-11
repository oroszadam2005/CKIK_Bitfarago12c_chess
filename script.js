var nextstep = 1;var nextstep_p = ["BLACK","WHITE"];var point = [0,0];
var duplalepes = [true,true];var joker = [true,true];
function apply(v1){
  var prefix = ["--x","--y","--z","--tx","--ty","--tz","--p","--s"];var prefix2 = ["deg","deg","deg","px","px","px","px",""];for (let index = 0; index < 8; index++) {document.documentElement.style.setProperty(prefix[index], v1[index]+prefix2[index]);}
}
var piece =[
{name:"QUEEN",point:5,color:"BLACK",
code:'<div class="reusable-rect piece-base"> <div class="sides side1"></div><div class="sides side2"></div> </div><div class="reusable-rect piece-upbase"> <div class="sides side1"></div><div class="sides side2"></div> </div><div class="reusable-rect piece-thick"> <div class="sides side1"></div> <div class="sides side2"></div> </div><div class="piece-head"><div class="reusable-trapezoid"><div class="trapesides trapeside1"></div><div class="trapesides trapeside2"></div><div class="trapesides trapeside3"></div><div class="trapesides trapeside4"></div><div class="trapesides trapeside5"></div></div></div><div class="reusable-rect piece-diamond"> <div class="sides side1"></div><div class="sides side2"></div> </div><div class="reusable-rect piece-hood"><div class="sides side1"></div> <div class="sides side2"></div></div>',
},
{name:"KING",point:2,color:"BLACK",
code:'<div class="reusable-rect piece-base"> <div class="sides side1"></div> <div class="sides side2"></div></div><div class="reusable-rect piece-upbase"> <div class="sides side1"></div><div class="sides side2"></div> </div><div class="reusable-rect piece-thick"> <div class="sides side1"></div> <div class="sides side2"></div> </div><div class="piece-head"><div class="reusable-trapezoid"><div class="trapesides trapeside1"></div><div class="trapesides trapeside2"></div><div class="trapesides trapeside3"></div><div class="trapesides trapeside4"></div><div class="trapesides trapeside5"></div></div></div><div class="reusable-rect piece-diamond"> <div class="sides side1"></div> <div class="sides side2"></div> </div><div class="reusable-rect piece-hood"> <div class="sides side1"></div> <div class="sides side2"></div> </div>',
},
{name:"BISHOP",point:2,color:"BLACK",
code:'<div class="reusable-rect piece-base"> <div class="sides side1"></div> <div class="sides side2"></div> </div><div class="reusable-rect piece-upbase"> <div class="sides side1"></div><div class="sides side2"></div> </div><div class="reusable-rect piece-thick"> <div class="sides side1"></div> <div class="sides side2"></div> </div><div class="reusable-rect piece-head"> <div class="sides side1"></div><div class="sides side2"></div> </div><div class="piece-crown"><div class="ccside ccside1"></div><div class="ccside ccside2"></div><div class="ccside ccside3"></div><div class="ccside ccside4"></div></div>',
},
{name:"HORSE",point:2,color:"BLACK",
code:'<div class="reusable-rect piece-base"> <div class="sides side1"></div> <div class="sides side2"></div> </div><div class="reusable-rect piece-upbase"> <div class="sides side1"></div><div class="sides side2"></div> </div><div class="reusable-rect piece-tilt1"> <div class="sides side1"></div><div class="sides side2"></div> </div><div class="reusable-rect piece-tilt2"> <div class="sides side1"></div><div class="sides side2"></div> </div><div class="reusable-rect piece-tilt3"> <div class="sides side1"></div><div class="sides side2"></div> </div>',
},
{name:"ROOK",point:3,color:"BLACK",
code:'<div class="reusable-rect piece-base"> <div class="sides side1"></div> <div class="sides side2"></div> </div><div class="reusable-rect piece-upbase"> <div class="sides side1"></div><div class="sides side2"></div> </div><div class="reusable-rect piece-thick"> <div class="sides side1"></div> <div class="sides side2"></div> </div><div class="reusable-rect piece-head"><div class="sides side1"></div><div class="sides side2"></div><div class="reusable-rect piece-head-left"> <div class="sides side1"></div><div class="sides side2"></div> </div><div class="reusable-rect piece-head-right"> <div class="sides side1"></div><div class="sides side2"></div> </div></div><div class="reusable-rect piece-head-center"> <div class="sides side1"></div><div class="sides side2"></div> </div>',
},
{name:"PAWN",point:1,color:"BLACK",
code:'<div class="reusable-rect piece-base"> <div class="sides side1"></div> <div class="sides side2"></div> </div><div class="reusable-rect piece-upbase"> <div class="sides side1"></div><div class="sides side2"></div> </div><div class="reusable-rect piece-thick"> <div class="sides side1"></div> <div class="sides side2"></div> </div><div class="reusable-rect piece-head"> <div class="sides side1"></div><div class="sides side2"></div> </div>',
}];
var table = [[piece[4],piece[3],piece[2],piece[1],piece[0],piece[2],piece[3],piece[4]],
[piece[5],piece[5],piece[5],piece[5],piece[5],piece[5],piece[5],piece[5]],
[,,,,,,,],[,,,,,,,],[,,,,,,,],[,,,,,,,],[,,,,,,,],[,,,,,,,],[,,,,,,,],[,,,,,,,],
[piece[5],piece[5],piece[5],piece[5],piece[5],piece[5],piece[5],piece[5]],
[piece[4],piece[3],piece[2],piece[1],piece[0],piece[2],piece[3],piece[4]]
];
function d3(){
  document.getElementById('ViewSide').disabled = false;
  document.getElementById('DView').classList.add('EnableClass');
  document.getElementById('DView').setAttribute("onclick","d2()");
  document.getElementById("DView").value = "2D";
  document.getElementById('ViewSide').value == "jobb"
  bal();setTimeout(function(){d3general();},2000);
}
function d2(){
  document.getElementById('ViewSide').disabled = true;
  document.getElementById('DView').classList.remove('EnableClass');
  document.getElementById('DView').setAttribute("onclick","d3()");
  document.getElementById("DView").value = "3D";
  apply([0,0,0,0,-100,0,3705,0.6]);d2general();
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
var selected;var lastselected = document.body;
function Click(){
  if (lasthover.classList.contains(nextstep_p[nextstep])) {    
    lastselected.classList.remove("selected");
    selected = lasthover;
    lastselected = selected;
    selected.classList.add("selected");
    Possiblesteps();
  }else if(lasthover.classList.contains("possible")){
    Lepes();
  }else if(lasthover.classList.contains("attack")){
    var iy2 = lasthover.id.split(":");
    point[nextstep]+=table[iy2[0]][iy2[1]].point;
    Lepes();
  }
}
var duplalepesa = false;
function duplalepesf(c){
  console.log(1);
  if(duplalepes[c] && duplalepesa != true){
    duplalepesa =  true;
    document.getElementById("dupla"+c).style.borderColor ="gold";
  }else if(duplalepes[c]){
    duplalepesa = false;
    document.getElementById("dupla"+c).style.borderColor ="lime";
  }
}
var jokerl = false;
var pnumber;
function jokerlepes(num){
  var button = document.getElementById("joker"+num);
  if(joker[num] && jokerl !=true){
    jokerl = true;
    button.style.border = "2px solid gold"
    pnumber = num;
  }else if(joker[num]){
    jokerl = false
    button.style.border = "2px solid lime"
  }
}
function Lepes(){
  lasthover.classList = selected.classList;
  selected.classList = "piece";
  selected.innerHTML = "";
  lasthover.classList.remove("selected");
  var iy = selected.id.split(":")
  var iy2 = lasthover.id.split(":");
  if(document.getElementById('DView').value == "3D"){
    lasthover.innerHTML = "<img src="+table[iy[0]][iy[1]].img+">";
  }
  else{
    lasthover.innerHTML = table[iy[0]][iy[1]].code;
  }
  table[iy2[0]][iy2[1]] = table[iy[0]][iy[1]];
  table[iy[0]][iy[1]] = undefined;
  for (let i = 0; i < possibles.length; i++) {
    document.getElementById(possibles[i]).classList.remove("possible");
    document.getElementById(possibles[i]).classList.remove("attack");
  }
  if (nextstep == 0 && !duplalepesa) {
    nextstep = 1;
    LepesKinyil('feher');
  }else if(!duplalepesa){
    nextstep = 0;
    LepesKinyil('fekete');
  }
  if(duplalepesa){
    duplalepes[nextstep] = false;
    duplalepesa = false;
    document.getElementById("dupla"+nextstep).style.borderColor ="red";
  }
  if (iy2[0] == 11 || iy2[0] == 0) {
    if(lasthover.classList.contains("forditva")){
      lasthover.classList.remove("forditva");
    }else{
      lasthover.classList.add("forditva");
    }
  }
  if(jokerl){
    jokerl = false;
    joker[pnumber] = false;
    document.getElementById("joker"+pnumber).style.borderColor = "red"
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
  if(jokerl){
    lepesek(0,12,1,selected.id.split(':'),0,-1);
    lepesek(0,8,1,selected.id.split(':'),-1,0);
    lepesek(0,8,1,selected.id.split(':'),0,1);
    lepesek(0,12,1,selected.id.split(':'),1,0);
    lepesek(0,8,1,selected.id.split(':'),1,1);
    lepesek(0,8,1,selected.id.split(':'),-1,-1);
    lepesek(0,8,1,selected.id.split(':'),1,-1);
    lepesek(0,8,1,selected.id.split(':'),-1,1);
    iy = selected.id.split(':');
    horse([parseInt(iy[0])+2,parseInt(iy[1])+1]);
    horse([parseInt(iy[0])+2,parseInt(iy[1])-1]);
    horse([parseInt(iy[0])+1,parseInt(iy[1])+2]);
    horse([parseInt(iy[0])-1,parseInt(iy[1])+2]);
    horse([parseInt(iy[0])-2,parseInt(iy[1])+1]);
    horse([parseInt(iy[0])-2,parseInt(iy[1])-1]);
    horse([parseInt(iy[0])+1,parseInt(iy[1])-2]);
    horse([parseInt(iy[0])-1,parseInt(iy[1])-2]);
    }else if (type == "PAWN") {
    for (let i = 0; i < 3; i++) {
      if (parseInt(iy[0])-1 >-1 && selected.classList[1] == "WHITE" && !selected.classList.contains("forditva") || selected.classList[1] == "BLACK" && selected.classList.contains("forditva")) {iy[0] = parseInt(iy[0])-1;
      }else if(parseInt(iy[0])+1 <12){iy[0] = parseInt(iy[0])+1;}
      if(document.getElementById(iy[0]+":"+iy[1]).classList.length != 1 && document.getElementById(iy[0]+":"+iy[1]).classList[1] == nextstep_p.filter(i => i == nextstep_p[nextstep])[0] || document.getElementById(iy[0]+":"+iy[1]).classList[1] == nextstep_p.filter(i => i != nextstep_p[nextstep])[0]){break;}
      if(document.getElementById(iy[0]+":"+iy[1]).classList[1] != nextstep_p[nextstep]){possibles.push(iy[0]+":"+iy[1]);document.getElementById(iy[0]+":"+iy[1]).classList.add("possible");}}
    iy = selected.id.split(':');
    if (selected.classList[1] == "BLACK" && !selected.classList.contains("forditva") || (selected.classList[1] == "WHITE" && selected.classList.contains("forditva"))) {
      if ((parseInt(iy[0])+1)<12 && (parseInt(iy[1])+1)<8 && document.getElementById((parseInt(iy[0])+1)+":"+(parseInt(iy[1])+1)).classList[1] == nextstep_p.filter(i => i != nextstep_p[nextstep])[0]) {
        possibles.push((parseInt(iy[0])+1)+":"+(parseInt(iy[1])+1));document.getElementById((parseInt(iy[0])+1)+":"+(parseInt(iy[1])+1)).classList.add("attack");}
      if ((parseInt(iy[0])+1)<12 && (parseInt(iy[1])-1)>-1 && document.getElementById((parseInt(iy[0])+1)+":"+(parseInt(iy[1])-1)).classList[1] == nextstep_p.filter(i => i != nextstep_p[nextstep])[0]) {
        possibles.push((parseInt(iy[0])+1)+":"+(parseInt(iy[1])-1));document.getElementById((parseInt(iy[0])+1)+":"+(parseInt(iy[1])-1)).classList.add("attack");}
    }else{
      if ((parseInt(iy[0])-1)>-1 && (parseInt(iy[1])-1)>-1 && document.getElementById((parseInt(iy[0])-1)+":"+(parseInt(iy[1])-1)).classList[1] == nextstep_p.filter(i => i != nextstep_p[nextstep])[0]) {
        possibles.push((parseInt(iy[0])-1)+":"+(parseInt(iy[1])-1));document.getElementById((parseInt(iy[0])-1)+":"+(parseInt(iy[1])-1)).classList.add("attack");}
      if ((parseInt(iy[0])-1)>-1 && (parseInt(iy[1])+1)<8 && document.getElementById((parseInt(iy[0])-1)+":"+(parseInt(iy[1])+1)).classList[1] == nextstep_p.filter(i => i != nextstep_p[nextstep])[0]) {
        possibles.push((parseInt(iy[0])-1)+":"+(parseInt(iy[1])+1));document.getElementById((parseInt(iy[0])-1)+":"+(parseInt(iy[1])+1)).classList.add("attack");}}
  }else if(type == "KING"){
    lepesek(0,2,1,selected.id.split(':'),0,-1);
    lepesek(0,2,1,selected.id.split(':'),-1,0);
    lepesek(0,2,1,selected.id.split(':'),0,1);
    lepesek(0,2,1,selected.id.split(':'),1,0);
    lepesek(0,2,1,selected.id.split(':'),1,1);
    lepesek(0,2,1,selected.id.split(':'),-1,-1);
    lepesek(0,2,1,selected.id.split(':'),1,-1);
    lepesek(0,2,1,selected.id.split(':'),-1,1);
  }else if(type == "QUEEN"){
    lepesek(0,12,1,selected.id.split(':'),0,-1);
    lepesek(0,8,1,selected.id.split(':'),-1,0);
    lepesek(0,12,1,selected.id.split(':'),0,1);
    lepesek(0,8,1,selected.id.split(':'),1,0);
    lepesek(0,8,1,selected.id.split(':'),1,1);
    lepesek(0,8,1,selected.id.split(':'),-1,-1);
    lepesek(0,8,1,selected.id.split(':'),1,-1);
    lepesek(0,8,1,selected.id.split(':'),-1,1);
  }else if(type == "ROOK"){
    lepesek(0,12,1,selected.id.split(':'),0,-1);
    lepesek(0,12,1,selected.id.split(':'),0,1);
    lepesek(0,8,1,selected.id.split(':'),1,0);
    lepesek(0,8,1,selected.id.split(':'),-1,0);
  }else if(type =="BISHOP"){
    lepesek(0,8,1,selected.id.split(':'),1,1);
    lepesek(0,8,1,selected.id.split(':'),-1,-1);
    lepesek(0,8,1,selected.id.split(':'),1,-1);
    lepesek(0,8,1,selected.id.split(':'),-1,1);
  }else if(type == "HORSE"){
    iy = selected.id.split(':');
    horse([parseInt(iy[0])+2,parseInt(iy[1])+1]);
    horse([parseInt(iy[0])+2,parseInt(iy[1])-1]);
    horse([parseInt(iy[0])+1,parseInt(iy[1])+2]);
    horse([parseInt(iy[0])-1,parseInt(iy[1])+2]);
    horse([parseInt(iy[0])-2,parseInt(iy[1])+1]);
    horse([parseInt(iy[0])-2,parseInt(iy[1])-1]);
    horse([parseInt(iy[0])+1,parseInt(iy[1])-2]);
    horse([parseInt(iy[0])-1,parseInt(iy[1])-2]);
  }
}
function horse(iy){
  if (parseInt(iy[0]) <12 && parseInt(iy[1]) >-1 && parseInt(iy[0]) >-1 && parseInt(iy[1]) <8) {   
    possibles.push(iy[0]+":"+iy[1]);
    if(document.getElementById(iy[0]+":"+iy[1]).classList.length != 1 && document.getElementById(iy[0]+":"+iy[1]).classList[1] == nextstep_p.filter(i => i == nextstep_p[nextstep])[0] || document.getElementById(iy[0]+":"+iy[1]).classList[1] == nextstep_p.filter(i => i != nextstep_p[nextstep])[0]){
      if(document.getElementById(iy[0]+":"+iy[1]).classList[1] == nextstep_p.filter(i => i != nextstep_p[nextstep])[0]){document.getElementById(iy[0]+":"+iy[1]).classList.add("attack");}return;}
    document.getElementById(iy[0]+":"+iy[1]).classList.add("possible");
  }
}
function lepesek(imin,imax,dir,iy,ic,yc){
  for (let i = imin; i < imax; i+=dir) {
    if (parseInt(iy[0])+(1*yc) <12 && parseInt(iy[1])+(1*ic) >-1 && parseInt(iy[0])+(1*yc) >-1 && parseInt(iy[1])+(1*ic) <8) {   
      iy[1] = parseInt(iy[1])+(1*ic);iy[0] = parseInt(iy[0])+(1*yc);possibles.push(iy[0]+":"+iy[1]);
      if(document.getElementById(iy[0]+":"+iy[1]).classList.length != 1 && document.getElementById(iy[0]+":"+iy[1]).classList[1] == nextstep_p.filter(i => i == nextstep_p[nextstep])[0] || document.getElementById(iy[0]+":"+iy[1]).classList[1] == nextstep_p.filter(i => i != nextstep_p[nextstep])[0]){
        if(document.getElementById(iy[0]+":"+iy[1]).classList[1] == nextstep_p.filter(i => i != nextstep_p[nextstep])[0]){document.getElementById(iy[0]+":"+iy[1]).classList.add("attack");}break;}
      document.getElementById(iy[0]+":"+iy[1]).classList.add("possible");
    }
  }
}
function d3general(){
  document.getElementById('QualityEnable').style.opacity = "1";
  document.getElementById('QualityEnable').style.cursor = "pointer";
  document.getElementById('QualityEnable').setAttribute("onclick","QualityLenyil()");
  document.getElementById("board").className = "board d3";
}
function d2general(){
  document.getElementById('QualityEnable').style.opacity = "0";
  document.getElementById('QualityEnable').style.cursor = "default";
  document.getElementById('QualityEnable').removeAttribute("onclick");
  document.getElementById("WhitePlayer").classList.add('WhitePlayerOpen');
  if(document.getElementById('low').classList.contains('QualityButtonsLMegjelen') && document.getElementById('medium').classList.contains('QualityButtonsLMegjelen') && document.getElementById('high').classList.contains('QualityButtonsLMegjelen')){
    document.getElementById('QualityEnable').classList.remove("EnableClass");
    QualityLenyil();
  }
  document.getElementById("board").className = "board d2";
}
function general(){
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 8; j++) {
      board.innerHTML+= `<div onclick="Click()" class="piece" id="${i}:${j}" style="--v:${i};--h:${j};"></div>`;
      if (table[i][j] != undefined) {        
        var div = document.getElementById(i+":"+j);
        let img = document.createElement("img");
        if(i<2){div.classList.add("BLACK");img.src="babuk/BLACK"+table[i][j].name+".png";}
        else{img.src="babuk/"+table[i][j].name+".png";}
        div.classList.add(table[i][j].name);
        img.classList.add("figures")
        div.appendChild(img);
        div.innerHTML+=table[i][j].code;
      }
    }
  }
}
window.addEventListener('load', function(){
  apply([0,0,0,0,-100,0,3705,0.6]);
  general();
  setTimeout(function(){Mouse()},1000)
});
var lasthover = document.body;
document.getElementById("main").addEventListener("click",Click)
function Mouse(){
  document.getElementById("board").addEventListener('mousemove', e => {
    var element = document.elementFromPoint(e.clientX, e.clientY).closest('.piece');
    if (element != null && element != lasthover) {
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
  }, {once: true})
}
var ido = 0;
function IdoEnable(){ 
  if(ido == 0){
    document.getElementById("IdoAddPerc").style.opacity = "1";
    document.getElementById("IdoAdMasodPerc").style.opacity = "1";
    document.getElementById("IdoAddPercLabel").style.opacity = "1";
    document.getElementById("IdoAdMasodPercLabel").style.opacity = "1";
    ido = 1;
  }
  else{
    document.getElementById("IdoAddPerc").style.opacity = "0";
    document.getElementById("IdoAdMasodPerc").style.opacity = "0";
    document.getElementById("IdoAddPercLabel").style.opacity = "0";
    document.getElementById("IdoAdMasodPercLabel").style.opacity = "0";
    ido = 0;
  }
}
function KorokSzamaFV(div){
  document.getElementById('KorokSzama').innerHTML = "<p>"+div.value+"</p>";
}
var Quality = "low";var lenyil = 0;
function QualityLenyil(){
  if(lenyil == 0){
    lenyil = 1;
    document.getElementById('QualityEnable').classList.add("EnableClass");
    document.getElementById('low').classList.add("QualityButtonsLenyil");
    document.getElementById('medium').classList.add("QualityButtonsLenyil");
    document.getElementById('high').classList.add("QualityButtonsLenyil");
    setTimeout(GombokMegjelen,100);
    document.getElementById(Quality).classList.add("CurrentQuality");
  }
  else{
    lenyil = 0;
    document.getElementById('low').classList.remove("QualityButtonsLMegjelen");
    document.getElementById('medium').classList.remove("QualityButtonsLMegjelen");
    document.getElementById('high').classList.remove("QualityButtonsLMegjelen");
    document.getElementById('QualityEnable').style.cursor = "default";
    setTimeout(GombokEltuntet,100);
  }
}
function GombokMegjelen(){
  document.getElementById('low').classList.add("QualityButtonsLMegjelen");
  document.getElementById('medium').classList.add("QualityButtonsLMegjelen");
  document.getElementById('high').classList.add("QualityButtonsLMegjelen");
}
function GombokEltuntet(){
  document.getElementById('low').classList.remove("QualityButtonsLenyil");
  document.getElementById('medium').classList.remove("QualityButtonsLenyil");
  document.getElementById('high').classList.remove("QualityButtonsLenyil");
  document.getElementById('QualityEnable').classList.remove("EnableClass");
}
function qualityc(value){
  document.getElementById("main").classList = "main-elements "+value;
  Quality = value;
  document.getElementById('low').classList.remove("CurrentQuality");
  document.getElementById('medium').classList.remove("CurrentQuality");
  document.getElementById('high').classList.remove("CurrentQuality");
  document.getElementById(Quality).classList.add("CurrentQuality");
};
function LepesKinyil(value){
  if(value == 'feher'){
    document.getElementById("BlackPlayer").classList.remove('BlackPlayerOpen');
    document.getElementById("WhitePlayer").classList.remove('WhitePlayerClose');
    document.getElementById("WhitePlayer").classList.add('WhitePlayerOpen');
    document.getElementById("BlackPlayer").classList.add('BlackPlayerClose');
  }
  else if(value == 'fekete'){
    document.getElementById("BlackPlayer").classList.add('BlackPlayerOpen');
    document.getElementById("WhitePlayer").classList.add('WhitePlayerClose');
    document.getElementById("WhitePlayer").classList.remove('WhitePlayerOpen');
    document.getElementById("BlackPlayer").classList.remove('BlackPlayerClose');
  }
}