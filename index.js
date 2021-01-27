function randomNumber(max) {
    var numRandom = Math.floor((Math.random() * (max + 1)));

    return numRandom;
}

function functionExcuse() {
    let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

    let excuse = who[randomNumber(who.length - 1)] + " " +
        action[randomNumber(action.length - 1)] + " " +
        what[randomNumber(what.length - 1)] + " " +
        when[randomNumber(when.length - 1)];

    return excuse
}

window.onload = function () {
    this.document.getElementById('lanzar_excusa').innerHTML = functionExcuse();
}

/* Checar como funciona */
let boton = document.querySelector('button');
boton.addEventListener('click', function () {
    document.querySelector('h2').innerHTML = functionExcuse();
})
