// Passo 1: Modelagem

class Stack {
    // constructor é a função executada ao criar nosso objeto
    constructor(){ 
        // O this neste exemplo vai ser a referencia ao objeto que será criado mais tarde
        this.data = []
        this.top = -1
    }

    // A função push serve para inserir um novo valor no array -> data
    push(value) {

        this.top++
        // Data recebe no seu index um valor vindo do parametro "value"
        this.data[this.top] = value
        return this.data
    }

    // A função pop serve para retirar da pilha o ultimo elemento.
    pop() {
        // Se o numero de elementos for menor que 0 entao retorna undefined
        if (this.top < 0) return undefined
        // Pega o ultimo elemento e o salva em poppedTop
        const poppedTop = this.data[this.top]
        // Deleta o ultimo elemento da pilha
        delete this.data[this.top]
        //Decrementamos o top pra dizer que temos um elemento a menos
        this.top--
        // Retornamos o elemento tirado
        return poppedTop

    }

    peek() {
        // Se top for maior ou igual a zero eu vou retornar o elemento no topo da pilha.
        return this.top >= 0 ? this.data[this.top]: undefined
    }

}



// Passo 2: Utilizando

// A função new Stack serve pra instanciar um novo objeto, fazendo a variavel stack se tornar um novo objeto.
const stack = new Stack()




// Adicionando dados:

stack.push("learning")
stack.push("data")
stack.push("structures")
console.log(stack)

// removendo dados:
stack.pop()
console.log(stack) 

// Pegar os dados no topo da lista:

console.log("Peguei o elemento: " + stack.peek())