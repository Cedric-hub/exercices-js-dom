// var container = window.document.getElementById("container");
// console.log(container.innerHTML);

var container = document.getElementById("container");
console.log(container.innerHTML);
// innerHTML récupère le contenu html avec les balises :
console.log(container.textContent)

var paragraphes = document.getElementsByTagName("p");
for (let paragraphe of paragraphes) {
    console.log(paragraphe.innerHTML);
}

var bleus = container.getElementsByClassName("blue");
for (let bleu of bleus) {
    console.log(bleu.innerHTML);
}

var parConteneurs = document.getElementsByName("parConteneur");
for (let parConteneur of parConteneurs) {
    console.log(parConteneur.innerHTML);
}


// SELECTOR CSS
// p.blue cible tous les éléments blue d'une balise p

var pbleus = document.querySelectorAll('p.blue');
// boucle pour afficher tous les éléments
for (let pbleu of pbleus) {
    console.log(pbleu.innerHTML);
}

var prouge = document.querySelector('p.red');
// car il n'y a qu'un élément red
console.log(prouge.innerHTML);

var lien = document.querySelector("a");
var href = lien.getAttribute("href");
console.log(href);

// set le lien href
lien.setAttribute("href", "https://www.w3schools.com");
console.log(lien);

console.log(lien.href);

// lien.removeAttribute("href");

var container = document.getElementById("container");

var parent = container.parentNode;
console.log(parent);
console.log(parent.nodeName);
// plus lisible :
// console.log(parent.innerHTML);

var premierFils = container.firstElementChild;
// premierFils = container.firstChild;
console.log(premierFils.nodeName);

var dernierFils = container.lastElementChild;
console.log(dernierFils.nodeName)

// var enfants = container.childNodes;
var enfants = container.children;
for (let enfant of enfants) {
    console.log(enfant.innerHTML);
}

container.innerHTML += "<p>Hello</p>";
// affiche le code html :
console.log(container.innerHTML);
// affiche seulement le texte :
console.log(container.textContent)
// console.log(container.className);


container.className = "blue";
console.log(container.className);

container.className += " red";
console.log(container.className);

var list = container.classList;
list.add("green");
// Si on n'avait pas déjà ajouté les classes bleu et red
// list.add("blue", "red");
console.log(list);


function myFunction() {
    document.getElementById("myDiv").classList.add("mystyle");
    var x = document.getElementById("myDiv").classList.length;
    console.log(x);
    var x = document.getElementById("myDiv").classList.contains("mystyle");
    console.log(x);
}

var x = document.getElementById("myDiv").classList.length;
console.log(x);

var x = document.getElementById("myDiv").classList.contains("mystyle");
console.log(x);

function affichePrenom() {
    var x = document.getElementById("prenom").value;
    document.getElementById("demo").innerHTML = x;
}