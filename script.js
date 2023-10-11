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
    if (point.includes(29)) {
      JatekVeg(nextstep_p.filter(i => i != nextstep));
    }
  }
}
var duplalepesa = false;
function duplalepesf(c){
  if(duplalepes[c] && duplalepesa != true){duplalepesa =  true;document.getElementById("dupla"+c).style.borderColor ="gold";
  }else if(duplalepes[c]){
    duplalepesa = false;document.getElementById("dupla"+c).style.borderColor ="lime";}
}
var jokerl = false;var pnumber;
function jokerlepes(num){
  var button = document.getElementById("joker"+num);
  if(joker[num] && jokerl !=true){jokerl = true;button.style.border = "2px solid gold";pnumber = num;
  }else if(joker[num]){jokerl = falsebutton.style.border = "2px solid lime"}
}
var FeherLeszamol;var FeketeLeszamol;
function Lepes(){
  lasthover.classList = selected.classList;selected.classList = "piece";lasthover.classList.remove("selected");
  var iy = selected.id.split(":");var iy2 = lasthover.id.split(":");
  lasthover.innerHTML = selected.innerHTML;selected.innerHTML = "";
  table[iy2[0]][iy2[1]] = table[iy[0]][iy[1]];table[iy[0]][iy[1]] = undefined;
  for (let i = 0; i < possibles.length; i++) {
    document.getElementById(possibles[i]).classList.remove("possible");document.getElementById(possibles[i]).classList.remove("attack");
  }
  if (nextstep == 0 && !duplalepesa) {
    nextstep = 1;
    if(ido == 1){clearInterval(FeketeLeszamol);FeherLeszamol = setInterval(IdoMegy,1000,'0');}
    LepesKinyil('feher');KorKiir();
  }else if(!duplalepesa){
    nextstep = 0;
    if(ido == 1){clearInterval(FeherLeszamol);FeketeLeszamol = setInterval(IdoMegy,1000,'1');}
    LepesKinyil('fekete');
  }
  if(duplalepesa){duplalepes[nextstep] = false;duplalepesa = false;document.getElementById("dupla"+nextstep).style.borderColor ="red";}
  if (iy2[0] == 11 || iy2[0] == 0) {
    if(lasthover.classList.contains("forditva")){lasthover.classList.remove("forditva");
    }else{lasthover.classList.add("forditva");}
  }
  if(jokerl){jokerl = false;joker[pnumber] = false;document.getElementById("joker"+pnumber).style.borderColor = "red"}
  selected = null;possibles = [];
}
var possibles = new Array();
function Possiblesteps(){
  if (possibles != undefined) {    
    for (let i = 0; i < possibles.length; i++) {
      document.getElementById(possibles[i]).classList.remove("possible");document.getElementById(possibles[i]).classList.remove("attack");
    }
    possibles = new Array();
  }
  var iy = selected.id.split(':');var type = selected.classList[2];
  if(jokerl){
    lepesek(selected.id.split(':'),[[12,0,1],[12,0,-1],[8,1,0],[8,-1,0],[8,1,1],[8,-1,-1],[8,1,-1],[8,-1,1]]);
    iy = selected.id.split(':');var v1 =parseInt(iy[0]);var v2 = parseInt(iy[1]);horse([[v1+2,v2+1],[v1+2,v2-1],[v1+1,v2+2],[v1-1,v2+2],[v1-2,v2+1],[v1-2,v2-1],[v1+1,v2-2],[v1-1,v2-2],]);
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
  }else if(type == "KING"){lepesek(selected.id.split(':'),[[2,0,1],[2,0,-1],[2,1,0],[2,-1,0],[2,1,1],[2,-1,-1],[2,1,-1],[2,-1,1]]);
  }else if(type == "QUEEN"){lepesek(selected.id.split(':'),[[12,0,1],[12,0,-1],[8,1,0],[8,-1,0],[8,1,1],[8,-1,-1],[8,1,-1],[8,-1,1]]);
  }else if(type == "ROOK"){lepesek(selected.id.split(':'),[[12,0,1],[12,0,-1],[8,1,0],[8,-1,0]]);
  }else if(type =="BISHOP"){lepesek(selected.id.split(':'),[[8,1,1],[8,-1,-1],[8,1,-1],[8,-1,1]]);
  }else if(type == "HORSE"){var v1 =parseInt(iy[0]);var v2 = parseInt(iy[1]);horse([[v1+2,v2+1],[v1+2,v2-1],[v1+1,v2+2],[v1-1,v2+2],[v1-2,v2+1],[v1-2,v2-1],[v1+1,v2-2],[v1-1,v2-2],]);}
}
function horse(data){
  for (let i = 0; i < 8; i++) {
    var iy = data[i];
    if (parseInt(iy[0]) <12 && parseInt(iy[1]) >-1 && parseInt(iy[0]) >-1 && parseInt(iy[1]) <8) {   
      possibles.push(iy[0]+":"+iy[1]);
      if(document.getElementById(iy[0]+":"+iy[1]).classList.length != 1 && document.getElementById(iy[0]+":"+iy[1]).classList[1] == nextstep_p.filter(i => i == nextstep_p[nextstep])[0] || document.getElementById(iy[0]+":"+iy[1]).classList[1] == nextstep_p.filter(i => i != nextstep_p[nextstep])[0]){
        if(document.getElementById(iy[0]+":"+iy[1]).classList[1] == nextstep_p.filter(i => i != nextstep_p[nextstep])[0]){document.getElementById(iy[0]+":"+iy[1]).classList.add("attack");}return;}
      document.getElementById(iy[0]+":"+iy[1]).classList.add("possible");
    }
  }
}
function lepesek(pos,data){
  for (let index = 0; index < data.length; index++) {    
    let iy = Object.assign({},pos);let imax = data[index][0];let ic = data[index][1];let yc = data[index][2];
    for (let i = 0; i < imax; i++) {
      if (parseInt(iy[0])+(1*yc) <12 && parseInt(iy[1])+(1*ic) >-1 && parseInt(iy[0])+(1*yc) >-1 && parseInt(iy[1])+(1*ic) <8) {   
        iy[1] = parseInt(iy[1])+(1*ic);iy[0] = parseInt(iy[0])+(1*yc);possibles.push(iy[0]+":"+iy[1]);
        if(document.getElementById(iy[0]+":"+iy[1]).classList.length != 1 && document.getElementById(iy[0]+":"+iy[1]).classList[1] == nextstep_p.filter(i => i == nextstep_p[nextstep])[0] || document.getElementById(iy[0]+":"+iy[1]).classList[1] == nextstep_p.filter(i => i != nextstep_p[nextstep])[0]){
          if(document.getElementById(iy[0]+":"+iy[1]).classList[1] == nextstep_p.filter(i => i != nextstep_p[nextstep])[0]){document.getElementById(iy[0]+":"+iy[1]).classList.add("attack");}break;}
        document.getElementById(iy[0]+":"+iy[1]).classList.add("possible");
      }
    }
  }
}
function d3general(){
  document.getElementById('QualityEnable').style.opacity = "1";document.getElementById('QualityEnable').style.cursor = "pointer";document.getElementById('QualityEnable').setAttribute("onclick","QualityLenyil()");document.getElementById("board").className = "board d3";
}
function d2general(){
  if(document.getElementById('QualityEnable').style.opacity == "1"){document.getElementById('QualityEnable').classList.remove("EnableClass");document.getElementById('QualityEnable').style.opacity = "0";document.getElementById('QualityEnable').style.cursor = "pointer";lenyil = 1;QualityLenyil();}
  document.getElementById("board").className = "board d2";
}
function general(){
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 8; j++) {
      board.innerHTML+= `<div onclick="Click()" class="piece" id="${i}:${j}" style="--v:${i};--h:${j};"></div>`;
      if (table[i][j] != undefined) {        
        var div = document.getElementById(i+":"+j);let img = document.createElement("img");
        if(i<2){div.classList.add("BLACK");img.src="babuk/BLACK"+table[i][j].name+".png";}
        else{div.classList.add("WHITE");img.src="babuk/"+table[i][j].name+".png";}
        div.classList.add(table[i][j].name);img.classList.add("figures");div.appendChild(img);div.innerHTML+=table[i][j].code;
      }
    }
  }
}
window.addEventListener('load', function(){
  apply([0,0,0,0,-100,0,3705,0.6]);
});
var lasthover = document.body;
document.getElementById("main").addEventListener("click",Click)
function Mouse(){
  document.getElementById("board").addEventListener('mousemove', e => {
    var element = document.elementFromPoint(e.clientX, e.clientY).closest('.piece');
    if (element != null && element != lasthover) {
      lasthover.classList.remove("hover");
      if (element != null) {lasthover = element;
      }else{
        element = document.elementsFromPoint(e.clientX, e.clientY).filter(i => i.classList.contains('.piece'));
        if (element.length == 1) {lasthover = element[0];}
      }
      if (element.length != 0 && (element.classList.contains(nextstep_p[nextstep]) || possibles!= undefined && possibles.includes(element.id))) { element.classList.add("hover");}
    }
    setTimeout(function(){Mouse()},0)
  }, {once: true})
}
var ido = 0;var kor = 1;var CurrentKor = 0;var LepesekList = [];
function IdoEnable(){
  if(ido == 0){ido = 1;document.getElementById("IdoAddPerc").style.opacity = "1";document.getElementById("IdoAdMasodPerc").style.opacity = "1";document.getElementById("IdoAddPercLabel").style.opacity = "1";document.getElementById("IdoAdMasodPercLabel").style.opacity = "1";IdoValtozik();}
  else{ido = 0;document.getElementById("IdoAddPerc").style.opacity = "0";document.getElementById("IdoAdMasodPerc").style.opacity = "0";document.getElementById("IdoAddPercLabel").style.opacity = "0";document.getElementById("IdoAdMasodPercLabel").style.opacity = "0";document.getElementById("IdoAddPerc").value = "0";document.getElementById("IdoAdMasodPerc").value = "1";LepesekList = [];document.getElementById('WhiteTimer').innerHTML = "";document.getElementById('BlackTimer').innerHTML = "";}
}
function IdoValtozik(){
  if(ido == 1){
    LepesekList[0] = {perc:document.getElementById("IdoAddPerc").value, mperc: document.getElementById("IdoAdMasodPerc").value};LepesekList[1] ={perc:document.getElementById("IdoAddPerc").value, mperc: document.getElementById("IdoAdMasodPerc").value};
    if(document.getElementsByClassName('WhitePlayerOpen').length > 0){IdoKiir('0');
    }else{IdoKiir('0');}
  }
}
function KorokSzamaFV(div){
  kor = div.value;
}
var Quality = "low";var lenyil = 0;
function QualityLenyil(){
  console.log(111);
  if(lenyil == 0){lenyil = 1;document.getElementById('QualityEnable').classList.add("EnableClass");document.getElementById('low').classList.add("QualityButtonsLenyil");document.getElementById('medium').classList.add("QualityButtonsLenyil");document.getElementById('high').classList.add("QualityButtonsLenyil");setTimeout(GombokMegjelen,500);document.getElementById(Quality).classList.add("CurrentQuality");}
  else{lenyil = 0;document.getElementById('low').classList.remove("QualityButtonsLMegjelen");document.getElementById('medium').classList.remove("QualityButtonsLMegjelen");document.getElementById('high').classList.remove("QualityButtonsLMegjelen");document.getElementById('QualityEnable').style.cursor = "default";setTimeout(GombokEltuntet,500);}
}
function GombokMegjelen(){
  document.getElementById('low').classList.add("QualityButtonsLMegjelen");document.getElementById('medium').classList.add("QualityButtonsLMegjelen");document.getElementById('high').classList.add("QualityButtonsLMegjelen");
}
function GombokEltuntet(){
  document.getElementById('low').classList.remove("QualityButtonsLenyil");document.getElementById('medium').classList.remove("QualityButtonsLenyil");document.getElementById('high').classList.remove("QualityButtonsLenyil");document.getElementById('QualityEnable').classList.remove("EnableClass");
}
function qualityc(value){
  document.getElementById("main").classList = "main-elements "+value;Quality = value;document.getElementById('low').classList.remove("CurrentQuality");document.getElementById('medium').classList.remove("CurrentQuality");document.getElementById('high').classList.remove("CurrentQuality");document.getElementById(Quality).classList.add("CurrentQuality");
};
function LepesKinyil(value){
  if(value == 'feher'){document.getElementById("BlackPlayer").classList.remove('BlackPlayerOpen');document.getElementById("WhitePlayer").classList.remove('WhitePlayerClose');document.getElementById("WhitePlayer").classList.add('WhitePlayerOpen');document.getElementById("BlackPlayer").classList.add('BlackPlayerClose');IdoKiir('0');}
  else if(value == 'fekete'){document.getElementById("BlackPlayer").classList.add('BlackPlayerOpen');document.getElementById("WhitePlayer").classList.add('WhitePlayerClose');document.getElementById("WhitePlayer").classList.remove('WhitePlayerOpen');document.getElementById("BlackPlayer").classList.remove('BlackPlayerClose');IdoKiir('0');}
}
function IdoKiir(value){
  if(ido == 1){
    let Idik = ['WhiteTimer','BlackTimer']
    if(LepesekList[Number(value)].mperc.length == 1 || LepesekList[Number(value)].mperc < 10){document.getElementById(Idik[Number(value)]).innerHTML = "<p>"+LepesekList[Number(value)].perc+":0"+LepesekList[Number(value)].mperc+"</p>";
    }else{document.getElementById(Idik[Number(value)]).innerHTML = "<p>"+LepesekList[Number(value)].perc+":"+LepesekList[Number(value)].mperc+"</p>";}
  }
} 
function IdoMegy(value){
  if(ido == 1){
    let masodperc = Number(LepesekList[Number(value)].perc) * 60 + Number(LepesekList[Number(value)].mperc);masodperc = masodperc - 1;
    if(masodperc >-1){LepesekList[Number(value)].perc = Math.floor(masodperc/60);LepesekList[Number(value)].mperc = masodperc%60;IdoKiir(Number(value));
    }else{JatekVeg(value);}
  }
}
function KorKiir(){
  if(CurrentKor != kor){document.getElementById('KorSzamlalo').innerHTML = "<p>"+(CurrentKor++)+" / "+kor+"</p>";
  }else{JatekVeg('Letelt');}
}
function Inditas(){
  setTimeout(general,800);setTimeout(function(){Mouse()},1000);EltuntetMindent();setTimeout(Elindit,400);
}
function EltuntetMindent(){
  let Idik = ['WarningSignh1','WarningSignh3','KorokLabel','KorokAdd','Ido','IdoLabel','IdoAddPerc','IdoAdMasodPerc','Inditas','IdoAddPercLabel','IdoAdMasodPercLabel'];
  Idik.forEach(elem => {
    document.getElementById(elem).style.opacity = "0";
  });
  setTimeout(InditasDivEltuntet,500);
}
function InditasDivEltuntet(){
  document.getElementById('StarterDiv').style.opacity = "0";
  document.getElementById('StarterDiv').style.zIndex = "-1";
}
function Elindit(){
  document.getElementById('ViewSide').disabled = true;document.getElementById("BlackPlayer").classList.remove('WhitePlayerClose');document.getElementById("WhitePlayer").classList.remove('BlackPlayerClose');document.getElementById('ViewSide').style.opacity = "1";document.getElementById('ViewSide').setAttribute('onclick','bal()');document.getElementById('DView').style.opacity = "1";document.getElementById('DView').setAttribute('onclick','d3()');document.getElementById('DView').style.cursor = "pointer";document.getElementById('ViewSide').style.cursor = "pointer";document.getElementById('KorSzamlalo').style.opacity = "1";document.getElementById('QualityEnable').style.opacity = "0";document.getElementById('QualityEnable').style.cursor = "default";document.getElementById('QualityEnable').removeAttribute("onclick");document.getElementById("WhitePlayer").classList.add('WhitePlayerOpen');
  IdoKiir('0');KorKiir();setTimeout(TimerInditas,400);
}
function TimerInditas(){
  if(ido == 1){clearInterval(FeketeLeszamol);FeherLeszamol = setInterval(IdoMegy,1000,'0');}
}
function JatekVeg(value){
  clearInterval(FeketeLeszamol);clearInterval(FeherLeszamol);
  document.getElementById("BlackPlayer").classList.remove('BlackPlayerOpen');document.getElementById("WhitePlayer").classList.remove('WhitePlayerOpen');document.getElementById("WhitePlayer").classList.add('WhitePlayerClose');document.getElementById("BlackPlayer").classList.add('BlackPlayerClose');document.getElementById('ViewSide').style.opacity = "0";document.getElementById('ViewSide').removeAttribute('onclick');document.getElementById('DView').style.opacity = "0";document.getElementById('DView').removeAttribute('onclick');document.getElementById('DView').style.cursor = "default";document.getElementById('ViewSide').style.cursor = "default";document.getElementById('KorSzamlalo').style.opacity = "0";document.getElementById('QualityEnable').style.opacity = "0";document.getElementById('QualityEnable').style.cursor = "default";document.getElementById('QualityEnable').removeAttribute("onclick");
  document.getElementById('Jategveg').style.opacity = "1";document.getElementById('Jategveg').style.zIndex = "10";
  if(value == '0' || value == '1'){
    if(value == "0"){document.getElementById('JatekVegDiv').innerHTML = "<h1>A Fekete játékos nyert!</h1>";
    }else{document.getElementById('JatekVegDiv').innerHTML = "<h1>A Fehér játékos nyert!</h1>";}
  }else if('Letelt'){
    if(point[0] > point[1]){document.getElementById('JatekVegDiv').innerHTML = "<h1>A Fekete játékos nyert!</h1>";
    }else if(point[0] < point[1]){document.getElementById('JatekVegDiv').innerHTML = "<h1>A Fehér játékos nyert!</h1>";}
    else{
      document.getElementById('JatekVegDiv').innerHTML = "<h1>Döntetlen!</h1>";
    }
  }
}
function Restart(){
  ido = 0;document.getElementById('Jategveg').style.opacity = "0";document.getElementById('Jategveg').style.zIndex = "-1";document.getElementById('Ido').checked = false;document.getElementById("IdoAddPerc").style.opacity = "0";document.getElementById("IdoAdMasodPerc").style.opacity = "0";document.getElementById("IdoAddPercLabel").style.opacity = "0";document.getElementById("IdoAdMasodPercLabel").style.opacity = "0";document.getElementById("IdoAddPerc").value = "0";document.getElementById("IdoAdMasodPerc").value = "1";document.getElementById('WhiteTimer').innerHTML = "";document.getElementById('BlackTimer').innerHTML = "";kor = 1;CurrentKor = 0;LepesekList = [];lenyil = 0;nextstep = 1;point = [0,0];setTimeout(Ujraindit,400);
}
function Ujraindit(){
  location.reload();
}