import { Maison } from "./class/Maison";


// const checkLocalStorage = localStorage.getItem("products");
// if (checkLocalStorage === null) {
//   const data = {
//     maisons: [],
//     appartements: [],
//     terrains: [],
//   };
//   const dataStringify = JSON.stringify(data);
//   localStorage.setItem("products", dataStringify);
// };
// new Maison ()

// class BienImmobilier {
//     #id;
//     #titre;
//     #description;
//     #prix;
//     #adresse;

//     constructor(titre, description, prix, adresse) {
//         this.#id = Math.floor(Math.random() * 9999) + 1;
//         this.#titre = titre;
//         this.#description = description;
//         this.#prix = prix;
//         this.#adresse = adresse;
//     }


//     get id(){
//         return this.#id;
//     }

//     get titre() {
//         return this.#titre;
//     }

//     set titre(value) {
//         this.#titre = value;
//     }

//     get description() {
//         return this.#description;

//     }

//     set description(value) {
//         this.#description = value;
//     }


//     get prix(){
//         return this.#prix;
//     }

//     set prix(value) {
//         this.#prix = value;
//     }


//     get adresse(){
//         return this.#adresse;
//     }


//     set adresse(value){
//         this.#adresse = value;
//     }
// }


//     class Appartement extends BienImmobilier(){

//         #etage

//         constructor(titre, description, prix, adresse){
//             super(titre, description, prix, adresse);
//             this.#etage = etage;
//         }

//         get etage(){
//             return this.#etage;
//         }

//         set etage(value){
//             this.#etage = value;
//         }



//     }

//     class Maison extends BienImmobilier(){
//         #terasse;

//         constructor(titre, description, prix, adresse){
//             super(titre, description, prix, adresse);
//             this.#terasse = terasse;
//         }

//         get terasse(){
//             return this.#terasse;
//         }

//         set terasse(value){
//             this.#terasse = value;
//         }

//     }

document.getElementById('aparte').addEventListener('change', function() {
  var selectedOption = this.value;
  
  // Cacher tous les contenus supplémentaires
  var allContents = document.querySelectorAll('[id^="content"]');
  allContents.forEach(function(content) {
    content.style.display = 'none';
  });
  
  // Afficher le contenu supplémentaire correspondant à l'option sélectionnée
  document.getElementById('content' + selectedOption.substr(-1)).style.display = 'block';
});



    






