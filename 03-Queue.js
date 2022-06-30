// Passo 1: Modelagem

class Queue {
    constructor() {
        this.data = []

    }

    enqueue(item) {
        this.data.push(item)
        console.log(`${item} entrou na fila!`)
    }

    dequeue() {
        const item = this.data.shift() 
        console.log(`${item} saiu na fila!`)
    }

}


// Passo 2: Utilizando

const fila = new Queue()

// adicionando itens:


fila.enqueue("Wesley")
fila.enqueue("João")
fila.enqueue("Bruno")

// Imprimeindo no console
console.log("-----")
console.log(fila)
console.log("-----")

// returabdi elementos da fila:

fila.dequeue()
console.log(fila)