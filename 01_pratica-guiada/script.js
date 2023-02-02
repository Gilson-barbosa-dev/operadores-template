//PRIMEIRO EXERCICIO

/*
let tenho, recebo, gastei, irmaos, aplicacao, meuDinheiro, totalDinheiro, totalDinheiro1, repartindo

tenho = 15.00
recebo = 22.40
gastei = 12.34
aplicacao = 3.42

totalDinheiro = tenho + recebo
console.log(`Tenho: R$ ${tenho} e recebi mais R$ ${recebo}, fiquei com um total de R$ ${totalDinheiro}`)

totalDinheiro1 = totalDinheiro - gastei
console.log(`Gastei ${gastei} e agora tenho: R$ ${totalDinheiro1}`)

irmaos = totalDinheiro1 / 3
console.log(`Dividi com meus irmãos cada um ficou com R$ ${irmaos}`)

meuDinheiro = irmaos * aplicacao
console.log(`Apliquei a minha parte e ela rendeu 3.42x, o total do meu dinheiro agora é R$ ${meuDinheiro}`)

repartindo = meuDinheiro % 3 
console.log(`Comprei de chiclete ${repartindo}`)


// SEGUNDO EXERCICIO


const resultado = 5 === 5
console.log(`O Resultado 1 é: ${resultado}`)

const resultado1 = 5 !== 5
console.log(`O Resultado 2 é: ${resultado1}`)

const resultado2 = 5 !== "5"
console.log(`O Resultado 3 é: ${resultado2}`)

const resultado3 = "5" === "cinco"
console.log(`O Resultado 4 é: ${resultado3}`)

const resultado4 = typeof 5 === typeof 20
console.log(`O Resultado 5 é: ${resultado4}`)

const resultado5 = typeof "5" === typeof "cinco"
console.log(`O Resultado 6 é: ${resultado5}`)


// TERCEIRO EXERCICIO

let numero1, numero2 

numero1 = 15
numero2 = 24

const compara1 = numero1 === numero2
console.log(`O primeiro número é igual ao segundo número?: ${compara1}`)
const compara2 = numero1 <= numero2
console.log(`O primeiro número é menor que segundo número?: ${compara2}`)
const compara3 = numero1 > numero2
console.log(`O primeiro número é maior que segundo número?: ${compara3}`)
const compara4 = numero1 < numero2
console.log(`O primeiro número é menor que segundo número?: ${compara4}`)


// QUARTO EXERCICIO

let idade1, idade2

idade1 = Number(prompt('Qual é a sua idade? '))
idade2 = Number(prompt('Qual é a idade do seu amigo? '))

const resultado = idade1 > idade2
console.log(`Sua idade é maior que a do seu amigo? ${resultado}`)

const diferenca = idade1 - idade2
console.log(`A diferença de idade é de ${diferenca} anos`)
*/


// QUINTO EXERCICIO 

const a = 'vou pra praia'
const b = 'sou maior de idade'
const c = 'posso tomar uma cervejinha'
const d = 'quero passear de carro'

const resultado = !b && d
console.log(`${resultado}`)

const resultado2 = b && a && !d
console.log(`${resultado2}`)

const resultado3 = a || d
console.log(`${resultado3}`)

const resultado4 = c && !d
console.log(`${resultado4}`)


