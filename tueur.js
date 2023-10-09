"use strict"

let caracteristiques = ["nerd","sportif","mysterieux","musclé","drole"];
let prenom = ["Steven","William","Chris","Aaron","Brad"];
let starts = [[0.2,0.6,0.3],[0.4,0.1,0.5],[0.3,0.6,0.2],[0.4,0.1,0.3],[0.3,0.3,0.4]];
let joueur = [];
let tueur = ["jason",100];

class personnage {
    constructor (nom, caracteristiques, meurt, deg, degmeurt){
        this.nom = nom;
        this.caracteristiques = caracteristiques;
        this.meurt = meurt;
        this.deg = deg;
        this.degmeurt = degmeurt;
    }
}

function combat() {
    if(joueurs.lenght >= 1 && tueur[1] > 0) {
        let nombresurvivantsaleatoire = Math.floor(Math.random() = joueur.lenght);
        console.log(nombresurvivantsaleatoire);
        let survivantcible = jours[nombresurvivantsaleatoire];

        attaquetueur(survivantcible)

    }else if (joueur.lenght>= 1 && tueur[1] <=0) {
        console.log("Jason est mort alors les eurvivants ont gagne");

    }else if (joueur.lenght == 0 && tueur[1] > 0){
        console.log("Tous les survivants sont mort alors Jason a gagne");
    }
}

function attaquetueur(survivantcible) {
    let valeuraleatoire = Maths.random()

    if (valeuraleatoire < survivantcible ["meurt"]) {
        console.log("Jason a assassiner",survivantcible["nom"]);
        joueur.splice(survivantcible, 1)
        console.log(joueurs);
        survivantmort.push(survivantcible["nom"]);

    }else if (survivantcible["meurt"] < valeuraleatoire < 1 - survivantcible["degmeurt"]) {
        console.log(srvivantcible ["nom"],"contre en mettant 10 de degats de dommage a Jason");
        tueur-=10;
    }else {
        console.log("le joueur met des degats de dommage puis meurt");
    }

   console.log(survivantcible)
   console.log(joueurs)
   combat()


}

