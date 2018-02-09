var service = require('./service.js');
var listerTousPresentateurs = service.listerTousLesPresentateurs();
var listerToutesLesSessions = service.listerToutesLesSessions();
var listerTopPresentateurs = service.listerTopPresentateurs();
var trouverUneSession = service.trouverUneSession();


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


var recursiveAsyncReadLine = function () {

    console.log("*** Application Conférence ***");
    console.log("1. Liste de tous les présentateurs");
    console.log("2. Top présentateurs");
    console.log("3. Liste des sessions");
    console.log("4. Détail d'une session");

    rl.question('Choisissez une option ', (answer) => {
        if(answer.match("1")){
            listerTousPresentateurs.forEach(function(element){
                console.log(element.firstname, element.lastname);
            })
        }else if(answer.match("3")){
            listerToutesLesSessions.forEach(function(element){
                console.log(element.title);
            })
        }else if(answer.match("2")){
            listerTopPresentateurs.forEach(function(element){
                console.log(element.firstname, element.lastname);
            })
        }else if(answer.match("4")){
            rl.question('Choisissez un id ', (answer) => {
               console.log(service.trouverUneSession(answer)[0].desc);
               service.trouverUneSession(answer)[0].speakers.forEach(function(element){
                    console.log(element);
     
               });
               recursiveAsyncReadLine();

            });
        }
        recursiveAsyncReadLine();
    });
};

recursiveAsyncReadLine();


