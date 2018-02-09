function Personne(nom, prenom, pseudo) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function() {
        return this.nom + " " + this.prenom + " " + this.pseudo;
    }
}

var jules = new Personne("LEMAIRE", "Jules", "jules77");
var paul = new Personne("LEMAIRE", "Paul", "paul44");

console.log(jules.nom, jules.prenom, jules.pseudo, jules.getNomComplet(jules.nom, jules.prenom, jules.pseudo));
console.log(paul.nom, paul.prenom, paul.pseudo, paul.getNomComplet(paul.nom, paul.prenom, paul.pseudo));

function afficherPersonne(p) {
    console.log(p.nom, p.prenom, p.pseudo, p.getNomComplet)
}


jules.pseudo = "jules44";
console.log(jules.getNomComplet(jules.nom, jules.prenom, jules.pseudo));
console.log(jules.age);

Personne.prototype.age = "NON RENSEIGNE";
console.log(jules.age);

jules.age = 30;
console.log(jules.age);

Personne.prototype.getInitiales = function(){
    return this.nom.charAt(0)  + this.prenom.charAt(0);
}
console.log(jules.getInitiales());

var robert = new Personne("LEPREFET", "Robert", "robert77");

console.log(robert);