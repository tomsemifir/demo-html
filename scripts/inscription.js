function onSubmit(form) {
    console.log("Nom : " + form.elements["nom"].value);
    console.log("Prénom : " + form.elements["prenom"].value);
    console.log("Age : " + form.elements["age"].value);
    console.log("Sexe : " + form.elements["sexe"].value);
    console.log("Ville : " + form.elements["ville"].value);
}

function majuscule(string) {
    string.value = string.value.toUpperCase();
}

function firstLetterMaj(string) {
    string.value = string.value.charAt(0).toUpperCase() + string.value.slice(1).toLowerCase();
}