// Exercice 1

function changerStyleQ1() {
    var x = document.getElementById('parag1');
    x.style.color = "white";
    x.style.backgroundColor = "black";
    x.style.padding = "5px";
    x.style.border = "dotted";
}

function changerStyleQ2() {
    document.getElementById("parag1").classList.add("active");
}


// Exercice 2
// Écrivez une fonction JavaScript pour obtenir
// la valeur des attributs href, hreflang, rel,
// target et type du lien spécifié.

function getAttributes() {
    var attributs = document.querySelector("a");
    var href = attributs.getAttribute("href");
    var hreflang = attributs.getAttribute("hreflang");
    var rel = attributs.getAttribute("rel");
    var target = attributs.getAttribute("target");
    var type = attributs.getAttribute("type");
    document.getElementById("displayhref").innerHTML = href;
    document.getElementById("displayhreflang").innerHTML = hreflang;
    document.getElementById("displayrel").innerHTML = rel;
    document.getElementById("displaytarget").innerHTML = target;
    document.getElementById("displaytype").innerHTML = type;
}


// Exercice 3
// Écrivez une fonction JavaScript pour obtenir
// les valeurs du prénom et du nom de
// famille du formulaire suivant.

function getFormvalue() {
    var nom = document.getElementById("form1").elements[0].value;
    var prenom = document.getElementById("form1").elements[1].value;
    document.getElementById("result").innerHTML = nom + " " + prenom;
}

// function getFormvalueCedric() {
//     var nom = document.getElementById("form1").elements[0].value;
//     var prenom = document.getElementById("form1").elements[1].value;
//     document.getElementById("ici").innerHTML = nom + " " + prenom;
// }


// Exercice 4 : 
// À un document HTML, ajouter des alertes :
// - Au chargement de la page (attribut onload)
// - Quand on passe sur une image (attribut onmouseover)
// - Quand on clique sur un bouton (attribut onclick)
// Avec des boutons :
// - Changer la couleur de fond quand on clique sur un bouton
// - Changer aussi l'apparence du bouton
// - Ajouter un bouton qui permette de revenir à la normale.
// Sur des images : 
// - Changer une image par une autre quand la souris
// passe dessus (attribut onmouseover)
// - Remettre l'image d'origine quand la souris quitte
// l'image (attribut onmouseout)


function fondnoir() {
    document.documentElement.style.backgroundColor = "black";
}

// Avec id="body"
// function fondnoir() {
//     document.getElementById("body").classList.add("bgColor");
// }

function buttonRed() {
    var red = document.getElementById('button2');
    red.style.color = "white";
    red.style.backgroundColor = "red";
}


// Exercice 5
// Un premier controle de formulaire
// 1. Ecrire une page HTML comportant un mini-formulaire
// composé d'un champ de saisie et d'un simple bouton. 
// 2. Creer un fichier exo1.js 
// 3. Rajouter l'instruction precedente par :
// function controler() {
// var zoneSaisie = document.getElementById("zoneSaisie");
// alert("La Zone de saisie contient : " + zoneSaisie.value);
// }
// Decrivez le code de cette fonction. Il faudrait
// maintenant associer ce code de controle a l'evenement
// click sur le bouton du formulaire. Ecrivez le code correspondant.
// 4. Modifier la fonction de controle pour afficher un
// message d'erreur lorsque le champ est vide, et
// afficher le contenu du champ lorsqu'il ne l'est pas.
// 5. La fonction eval, prenant en parametre une chaıne
// de caracteres representant une expression,
// permet d'evaluer cette derniere. Par exemple :
// eval("3+4"); // retourne la valeur 7
// eval("bon"+"jour"); //retourne bonjour
// Ajouter (concatenez) le resultat de l´evaluation de
// l'expression donn´ee par l'utilisateur dans le
// champ de saisie a votre affichage. Cela donne une page
// HTML contenant un formulaire permettant d'executer "online"
// de petites operations.
