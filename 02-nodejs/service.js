var a = require("./data/devfest-2015");

//liste des presentateurs
function afficherlistepresentateur(){
   return a.speakers;
};

//liste des sessions
function listertoutesessions(){
    return a.sessions;
};

//listertoppresentateur
function listertop(){
    return a.speakers.filter(function(element){
        return element.topspeaker == true;
   })
};

//trouver une session
function afficherunesession(idSession){ 
    return listertoutesessions().filter(function(element){
        return element.id == idSession;
    })
};


 exports.listerTousLesPresentateurs = afficherlistepresentateur;
 exports.listerToutesLesSessions = listertoutesessions;
 exports.listerTopPresentateurs = listertop;
 exports.trouverUneSession = afficherunesession;