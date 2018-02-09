var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];
villes.forEach(function(element){
    console.log(element);
});

var a = function(element) {
    return element.includes("a");
}
console.log("lettreADansToutesLesVilles == " + villes.every(a));

var b = function(element){
    return !(element.includes('-'));
}
console.log("auMoinsUneVilleAvecUnTiret == " + villes.some(b));

 var villesSansTiretSansEspace = villes.filter(function(element){
    return !(element.includes("-")) && !(element.includes(" "));
 });
console.log("villesSansTiretSansEspace ==",villesSansTiretSansEspace);


var tab = villes.filter(function(element){
    if(element.endsWith("s")){
       return element;
    }
});
villesMajusculeSterimantParS = tab.map(function(element){
    if(element.endsWith("s")){
        return element.toUpperCase(element);
     }
    
})
console.log("villesMajusculeSterimantParS ==", villesMajusculeSterimantParS);