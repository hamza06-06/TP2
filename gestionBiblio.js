 export class Library{
    constructor(){
        this.livres=[];
    }


    addBook(livres){
        this.livres.push(livres);
    }


    listBooks(){
        this.livres.map((livre)=>{
            console.log(livre)
        });
    }


    findBookByTitle(titre){
        const livre = this.livres.find(livre=>livre.titre===titre);
        if (livre){
            console.log(livre);
        }else{
            console.log(`Erreur: J'ai pas trouver le livre '${titre}'. `)
        }
    }
}