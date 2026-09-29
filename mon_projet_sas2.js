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


function AjouterUnNouveauCandidat (){
  const CIN = prompt("entrez le num de votre cin: ");

  for (let i=0; i< candidat1.length; i++){
    if (candidat1[i].cin === CIN){
        console.log("ce num de cin est deja existe ");
        return;
     }
  }

let nom = prompt("entrez votre nom: ");
let prenom = prompt("entrez votre prenom: ");
let partiPolitique = prompt("entrez votre partie politique: ");
let age = Number(prompt("entrez ton age: "));

let candidat ={
    cin : CIN,
    nom : nom,
    prenom : prenom,
    partiPolitique : partiPolitique,
    age : age,
    electeurs:[]


};
candidat1.push(candidat);
console.log("c bon le candidat est ajouter ");

}
menuPrincipal ()

function AjouterPlusieursCandidatsàLaFois (){
    const nbrCand = Number(prompt("entrez le nombre des candidates selon votre besoin: "));
    for (let i=0; i< nbrCand; i++){
        AjouterUnNouveauCandidat()

    }
}
menuPrincipal ()

function AfficherLaListeDesCandidats (){
        console.log("=================================")
        console.log("       mini menu            ")
        console.log("1. sorte le nombre de votes ")
        console.log("2. filtrer par parti politique")
        console.log("=================================")
        let choix = Number(prompt("entrez votre choix: "))
        console.log("")
        if(choix=== 1){

            for(let i=0; i< candidat1.length -1 -i; i++ ){
                for(let j =0; j< candidat1.length -1 -i; j++){
                    if(candidat1[j].electeurs.length < candidat1[j + 1].electeurs.length){
                        let taux = candidat1[j];
                        candidat1[j] = candidat1[j + 1];
                       candidat1[j + 1] = taux;
                    }
                }
            }   
            
            for(let i=0; i< candidat1.length; i++){
                console.log("cin" + " : " + candidat1[i].cin);
                console.log("nom" + " : " +  candidat1[i].nom );
                console.log("prenom" + " : " +  candidat1[i].prenom );
                console.log("partiPolitique" + " : " +  candidat1[i].partiPolitique );
                console.log("age" + " : " + candidat1[i].age);
                console.log("electeurs" + " : " + candidat1[i].electeurs.length);
                console.log('====================')
            }
        } 
             else if (choix === 2 ){
                let trouve=false;
                let partiPolitique =prompt("entrez le partie politique: ");
                for(let i=0; i< candidat1.length; i++){
                    if(candidat1[i].partiPolitique === partiPolitique){
                        console.log("cin" + " : " + candidat1[i].cin);
                        console.log("nom" + " : " +  candidat1[i].nom );
                        console.log("prenom" + " : " +  candidat1[i].prenom );
                        console.log("partiPolitique" + " : " +  candidat1[i].partiPolitique );
                        console.log("age" + " : " + candidat1[i].age);
                        console.log("electeurs" + " : " + candidat1[i].electeurs.length);
                        console.log('=================================================');
                                        trouve=true
                    }
                }
                if(trouve===false){
                        console.log("la candidat est introvablle");
                       
                    }

            }
     menuPrincipal ();
}

function VoterPourUnCandidat (){
     let cin =prompt("entrez ta propre num CIN: ");
     let dejaVote = false;
     for (let i=0; i< candidat1.length; i++){
        for (let j=0; j< candidat1[i].electeurs.length; j++){
            if (candidat1[i].electeurs[j] === cin){
                dejaVote = true;
                break;
            }
        }
           
     }
    if(dejaVote){
    console.log("Vous avez déjà voté et tu na pas le droit de modifier votre vote ni de voter à nouveau");
    menuPrincipal();
    return;

}
let choix = prompt("entrez le num de cin de candidat par votre choix: ")
let trouve =false;
     for(let i=0; i< candidat1.length; i++){
            if (candidat1[i].cin === choix ){
        candidat1[i].electeurs.push(cin);
        trouve=true;
        console.log("vote save avec succes ");
        menuPrincipal();
        break
    }
}
if(!trouve) {
console.log("candidat introuvable" );
}
}


function ModifierLesInformationsPourCandidat(){
    let CIN =prompt("entrez le cin de candidat1 que tu veux le modifier: ");
    let exist = false;
       for (let i=0; i< candidat1.length; i++){
            if (candidat1[i].cin === CIN){
                exist = true;
            }
        }
        if(!exist){
            console.log("le cin de candidat est introvablle");
            menuPrincipal()
            return;
        }

    console.log("===================================================");
    console.log("     menu de modification     ");
    console.log("1. Modifier le parti politique d'un candidat");
    console.log("2. Modifier l'âge d'un candidat")
    console.log("====================================================")
     let choix = Number(prompt("entrez votre choix: "))
        console.log("")

    
if(choix === 1){
    for(let i=0; i< candidat1.length; i++){
        if(candidat1[i].cin === CIN){
            let nouveauPartiPolitique =prompt("entrez la nouvelle modification de la parti politique:  ");
            candidat1[i].partiPolitique = nouveauPartiPolitique;
            console.log("le parti politique d'un candidat a ete modifier");
            break;
        }
    }

} else if (choix===2){
    for(let i=0; i< candidat1.length; i++){
        if(candidat1[i].cin === CIN){
            let nouveauAge =prompt("entrez la nouveelle modification de lage:  ");
            candidat1[i].age = nouveauAge;
            console.log(" l'age d'un candidat a ete modifier");
            break;
        }
    }

} 
menuPrincipal()
}


function SupprimerUnCandidat(){
     let CIN =prompt("entrez le cin de candidat1 qui tu veux le suppreimer: ");
     let index ;
     let exist = false;
       for (let i=0; i< candidat1.length; i++){
            if (candidat1[i].cin === CIN){
                exist = true;
                index = i;
                candidat1.splice(index, 1);
                console.log("le candidat de la liste a ete Supprimer ")
            }
        }
        if(!exist){
            console.log("le cin de candidat est introvablle");
            menuPrincipal()
            return;
        }

menuPrincipal()
}

function  RechercherDesCandidats (){
    let NOM =prompt("entrez le nom de candidat1 que tu veux le checher: ");
     let exist = false;
       for (let i=0; i< candidat1.length; i++){
            if (candidat1[i].nom === NOM){
                console.log("cin" + " : " + candidat1[i].cin)
                console.log("nom" + " : " +  candidat1[i].nom )
                console.log("prenom" + " : " +  candidat1[i].prenom )
                console.log("partiPolitique" + " : " +  candidat1[i].partiPolitique )
                console.log("age" + " : " + candidat1[i].age)
                console.log("electeurs" + " : " + candidat1[i].electeurs.length)
                
                          exist = true;
            }
        }
        if(!exist){
            console.log("le nom est introvablle");
            menuPrincipal()
            return;
        }
        menuPrincipal()
}

function StacantistiquesDeSelection(){
    // Afficher le nombre total de candidats.
let conteur =0;
let total =0;
for (let i=0; i< candidat1.length; i++){
    conteur ++
   } 
    // Afficher le nombre total de votes exprimés dans toute l'élection
for (let i=0; i< candidat1.length; i++){
    total = total + candidat1[i].electeurs.length ;
}
// console.log("le nombre total de votes exprimés dans toute l'élection : " + total);
console.log("le nombre total de candidats est : " + conteur);
console.log("le nombre total de votes exprimés dans toute l'élection : " + total);

// Afficher le Top 3 des candidats ayant le plus de votes.
function vot(){
    for(let i=0; i< candidat1.length -1 -i; i++ ){
                for(let j =0; j< candidat1.length -1 -i; j++){
                    if(candidat1[j].electeurs.length < candidat1[j + 1].electeurs.length){
                        let taux = candidat1[j];
                        candidat1[j] = candidat1[j + 1];
                       candidat1[j + 1] = taux;
                    }
                }
            }   
}
vot ();
console.log("les Top 3 des candidats sont : ")
    for (let i=0 ; i< 3 && i<candidat1.length; i++){
console.log(candidat1[i].nom + " " + candidat1[i].electeurs.length);
    }
let  partie = {};
for (let i=0; i< candidat1.length; i++){
    let partiPolitique = candidat1[i].partiPolitique;
    if(partie[partiPolitique] === undefined ){
        partie[partiPolitique] = 1
    } else {
        partie[partiPolitique]++;
    }
   } 
   console.log("le nombre de candidats par parti politique est : " , partie )
menuPrincipal()
}
