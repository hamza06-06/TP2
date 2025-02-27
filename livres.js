 export class Books{
    constructor(titre,auteur){
        this.titre=titre;
        this.auteur=auteur;
    }

    
    getDetails(){
        return console.log(`Titre : ${this.titre} / Auteur : ${this.auteur}`);
    }

}





