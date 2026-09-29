const prompt = require("prompt-sync")();
let candidat1 =[
  {
    cin : "A111",
    nom : "Boushaba",
    prenom : "Soufiane",
    partiPolitique : "Indépendant",
    age: 40,
    electeurs: ['aa','bb', 'er', 'fr' ]
  },
  {
    cin : "A222",
    nom : "arbaoui",
    prenom : "ikram",
    partiPolitique : "fleur",
    age: 19,
    electeurs: ["cc","dd"]
},
{
    cin : "A333",
    nom : "haysson",
    prenom : "fatima",
    partiPolitique : "lion",
    age: 40,
    electeurs: ["ee"]
},
{
cin : "A444",
    nom : "ben",
    prenom : "ahmad",
    partiPolitique : "fleur",
    age: 50,
    electeurs: ["jj","hh", "yu"]
},
{
    cin : "A555",
    nom : "arb",
    prenom : "hakim",
    partiPolitique : "lion",
    age: 35,
    electeurs: ["ii","kk","hui", "ewt", "owi", "qwe"]
},
];

function menuPrincipal (){
     console.log("======================================================");
     console.log(" Gestion des Élections et Listes Électorales au Maroc ");
     console.log("======================================================");
        console.log("1. Ajouter un nouveau candidat");
        console.log("2. Ajouter plusieurs candidats à la fois");
        console.log("3. Afficher la liste des candidats ");
        console.log("4. Voter pour un candidat");
        console.log("5. Modifier les informations pour candidat");
        console.log("6. Supprimer un candidat");
        console.log("7. Rechercher des candidats");
        console.log("8. Statistiques de l'élection");
        console.log("0. Quite");
        console.log("=========================================");
        let opération =Number(prompt("entrez votre choix depuis le menuPrancipal: "));
        switch(opération){
            case 1:
                AjouterUnNouveauCandidat();
                break;
            case 2:
                AjouterPlusieursCandidatsàLaFois();
                break;
            case 3:
                AfficherLaListeDesCandidats();
                break;
            case 4:
                VoterPourUnCandidat ();
                break;
            case 5:
                 ModifierLesInformationsPourCandidat();
                 break;
            case 6:
                 SupprimerUnCandidat();
                break;
            case 7:
                RechercherDesCandidats();
                break;
            case 8:
                
               StacantistiquesDeSelection();
                break;
            case 0:
                break

                default:
                    console.log("lopérations est introvable");
    }
}
menuPrincipal();

