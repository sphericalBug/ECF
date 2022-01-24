var juriste = document.querySelector('#juriste > span');
var auteur = document.querySelector('#auteur > span');

var formJuriste = document.getElementById('juristeForm');
var formAuteur = document.getElementById('auteurForm');

juriste.addEventListener('click', function(){
    juriste.style.borderBottom = '5px solid orange';
    auteur.style.borderBottom = 'none';
    formJuriste.style.display = 'block';
    formAuteur.style.display = 'none';
});

auteur.addEventListener('click', function(){
    auteur.style.borderBottom = '5px solid orange';
    juriste.style.borderBottom = 'none';
    formJuriste.style.display = 'none';
    formAuteur.style.display = 'block';
});