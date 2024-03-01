import { BienImmobilier } from "./BienImmobilier.js";
console.log("hey");
export class Appartement extends BienImmobilier{

    #etage

    constructor(titre, description, prix, adresse){
        super(titre, description, prix, adresse);
        this.#etage = etage;
    }

    get etage(){
        return this.#etage;
    }

    set etage(value){
        this.#etage = value;
    }



}