function direBonjour(nom) {
    alert("Bonjour " + nom.value);
}

function addition(nbr1, nbr2) {
    alert(+nbr1.value + +nbr2.value);
}

function soustraction(nbr1, nbr2) {
    alert(+nbr1.value - +nbr2.value);
}

function multiplication(nbr1, nbr2) {
    alert(+nbr1.value * +nbr2.value);
}

function division(nbr1, nbr2) {
    if (+nbr2.value == 0) {
        alert("Division par 0 impossible");
    } else {
        alert(+nbr1.value / +nbr2.value);
    }
}