import { BienImmobilier } from "./BienImmobilier.js";
export class Maison extends BienImmobilier{
    #terasse;
// constructor
    constructor(titre, description, prix, adresse){
        super(titre, description, prix, adresse);
        this.#terasse = terasse;
    }

    // setters & getters

    get terasse(){
        return this.#terasse;
    }

    set terasse(value){
        this.#terasse = value;
    }

    // methods

 setStorage(){
const getStorage = localStorage.getItem("products"); 
 }


}