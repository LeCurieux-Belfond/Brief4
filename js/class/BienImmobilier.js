export class BienImmobilier {
    #id;
    #titre;
    #description;
    #prix;
    #adresse;

    constructor(titre, description, prix, adresse) {
        this.#id = Math.floor(Math.random() * 9999) + 1;
        this.#titre = titre;
        this.#description = description;
        this.#prix = prix;
        this.#adresse = adresse;
    }


    get id(){
        return this.#id;
    }

    get titre() {
        return this.#titre;
    }

    set titre(value) {
        this.#titre = value;
    }

    get description() {
        return this.#description;

    }

    set description(value) {
        this.#description = value;
    }


    get prix(){
        return this.#prix;
    }

    set prix(value) {
        this.#prix = value;
    }


    get adresse(){
        return this.#adresse;
    }


    set adresse(value){
        this.#adresse = value;
    }
}