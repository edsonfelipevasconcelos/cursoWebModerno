let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return implícito
console.log(dobro(Math.PI))

ola = () => 'Olá'
olaa = _ => 'Oláaa' // Possui um parâmetro

console.log(ola())
console.log(olaa())