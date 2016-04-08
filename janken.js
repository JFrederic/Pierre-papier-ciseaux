




$('.plateau').hide();


var chrono = $('#chrono');
var compteur =  3;

function decompte()
{
    if(compteur >= 0){
       chrono.text("Vous pourrez jouer dans : " + compteur);
        compteur-- ;
      setTimeout(decompte,1000);
}
if(compteur==0) {
     clearTimeout();
     $('.plateau').show();


}
}


var choix = [];


function ChoixJoueur(objImg){
      choix = objImg;
      $(".choix").attr({ src:choix, alt: "test"});

}




var tabImg = [$('#pierre').attr('src'),$('#feuille').attr('src'),$('#ciseaux').attr('src')];


function ChoixOrdinateur() {

    rangAlea = tirage();
    var alea = tabImg[rangAlea];
    $('.choixOrdi').attr({src:alea});



}


function tirage() {

   carteAleatoire = Math.floor(Math.random()*tabImg.length);

  return carteAleatoire;
}

var pointsJ = 0;
var pointsO = 0;

function comparer(indiceChoix,indiceOrdi) {


if ((indiceChoix==1) && (rangAlea==0)) {
$('.res').text("Pierre et pierre, égalité !");

}
if ((indiceChoix==2) && (rangAlea==1)) {
$('.res').text("Feuille et feuille, égalité !");
}
if ((indiceChoix==3) && (rangAlea==2)) {
$('.res').text("Ciseau et ciseau, égalité !");
}
if ((indiceChoix==1) && (rangAlea==1)) {
$('.res').text("Vainqueur : Ordinateur.");
pointsO++;
}
if ((indiceChoix==2) && (rangAlea==2)) {
$('.res').text("Vainqueur : Ordinateur.");
pointsO++;
}
if ((indiceChoix==3) && (rangAlea==0)) {
$('.res').text("Vainqueur : Ordinateur.");
pointsO++;
}
if ((indiceChoix==1) && (rangAlea==2)) {
$('.res').text("Vainqueur : Vous !");
pointsJ++;
}
if ((indiceChoix==2) && (rangAlea==0)) {
$('.res').text("Vainqueur : Vous!");
pointsJ++;
}
if ((indiceChoix==3) && (rangAlea==1)) {
$('.res').text("Vainqueur : Vous!");
pointsJ++;
}

$('.pointJoueur').text("Le joueur possède " + pointsJ + " point.");
$('.pointOrdi').text("L'ordinateur possède " + pointsO + " point.");


}
