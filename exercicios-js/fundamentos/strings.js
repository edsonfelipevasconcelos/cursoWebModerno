const escola = "Cod3r"

console.log(escola.charAt(4)) // Mostra o conteudo do indice ()
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) //Pega o valor do indice () e converte para tabela Unicode
console.log(escola.indexOf('d')) // Busca por caractere no indice ()
console.log(escola.substring(1)) // Mostra apartir do indice ()
console.log(escola.substring(0, 3)) // Mostra do indice inicial ao final separando por virgula ( , )
console.log('Escola '.concat(escola).concat("!")) // Concatenação usando. concat
console.log('Escola ' + escola + '!') // Concatenação usando o simbolo de +
console.log(escola.replace(3, 'e')) // Pra substituir por um determinado caractere 
console.log(escola.replace(/\w/g, 'e')) //Pra substituir todos por um determinado caractere
console.log('Ana,Maria,Pedro'.split(','))