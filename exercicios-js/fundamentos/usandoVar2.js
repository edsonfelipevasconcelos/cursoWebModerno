var numero = 1
{
    var numero = 2
    console.log('Dentro =', numero)
}

console.log('Fora = ', numero)

function teste() {
    var numero = 3
    console.log('Dentro da function =', numero)
}

teste()