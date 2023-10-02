function apply(i,o,u){
  var output;
  if(u){output = i + (u + '')}
  else{output = Number(i)}
  document.documentElement.style.setProperty(o, output);
}
window.addEventListener('load', function(){
  setTimeout(function(){
    apply(0, '--x', 'deg');
    apply(0, '--y', 'deg');
    apply(0, '--z', 'deg');
    apply(0, '--tx', 'px');
    apply(-150, '--ty', 'px');
    apply(0, '--tz', 'px');
    apply(3705, '--p', 'px');
    apply(0.6, '--s');
  }, 1000);});
function d3(){
  document.getElementById('DView').value = "2D";
  document.getElementById('DView').setAttribute("onclick","d2()");
  setTimeout(function(){
    apply(45, '--x', 'deg');
    apply(0, '--y', 'deg');
    if(document.getElementById('ViewSide').value == "bal"){
      jobb();
    }
    else{
      bal();
    }
    apply(0, '--tx', 'px');
    apply(0, '--ty', 'px');
    apply(215, '--tz', 'px');
    apply(3705, '--p', 'px');
    apply(0.6, '--s');
  });
}
function d2(){
  document.getElementById('DView').value = "3D";
  document.getElementById('DView').setAttribute("onclick","d3()");
  apply(0, '--x', 'deg');
  apply(0, '--y', 'deg');
  apply(0, '--z', 'deg');
  apply(0, '--tx', 'px');
  apply(-150, '--ty', 'px');
  apply(0, '--tz', 'px');
  apply(3705, '--p', 'px');
  apply(0.6, '--s');
}
function jobb(){
  document.getElementById('ViewSide').value = "bal";
  document.getElementById('ViewSide').setAttribute("onclick","bal()");
  apply(30, '--z', 'deg');
}
function bal(){
  document.getElementById('ViewSide').value = "jobb";
  document.getElementById('ViewSide').setAttribute("onclick","jobb()");
  apply(-30, '--z', 'deg');
}