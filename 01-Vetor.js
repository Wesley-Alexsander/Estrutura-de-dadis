/*============================ Vetores ===========================*/

// Array:
const pilotos = ["Senna", "Prost", "Schumacher", "Hamilton"]

// indexação:
let piloto_01 = pilotos[0]
let piloto_02 = pilotos[3]
console.log(piloto_01) // Imprime Senna
console.log(piloto_02) // Imprime Hamilton

// Saber quantos elementos estão dentro da lista:
numero_elementos = pilotos.length
console.log(numero_elementos)


// Iterável:
console.log("----- Pilotos: -----")
cont = 1
for(let piloto of pilotos) {
    console.log(`${cont}º ${piloto}`)
    cont++
}


/* Metodos: */

// Adicionar elemento:
pilotos.push("Alonso") // Adiciona um novo elemento no fim da lista
console.log(pilotos)

// Encontrar um elento:
const senna = pilotos.find(piloto => piloto === "Senna")
console.log(senna)

// Excluir um elento:
pilotos.splice(0, 1) // deleta 1 elemento na primeira posição = index 0
console.log(pilotos)
console.log("-----------")



/*============================ Vetores Multidimensionais ===========================*/

// Basicamente é um vetor dentro de outro.
// Podemos escalar varios niveis de dimensões.

const students =  [
    ["jose", 23, "MG"],
    ["wesley", 24, "SP"],
    ["Priscila", 22, "PR"]
]


// Acessando outros arrays pelo indice:
let primeiro_aluno = students[0]
let segundo_aluno = students[1]
let terceiro_aluno = students[2]

console.log(primeiro_aluno)
console.log(segundo_aluno)
console.log(terceiro_aluno)