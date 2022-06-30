# **O que é "Estrutura de dados"?**

É uma maneira de organizar, ordenar e registrar na memoria do computador, informações como:

- Textos
- Numeros
- Booleanos
- Etc...

## **Exemplos:**

```JS

    //Array:
                [1, 2, 3] // 3 Elementos
        //Indice 0  1  2

        //Objetos:
            {nome: "wesley", idade: 24} // 2 Elementos

```

<BR>
<BR>

# **Por que estudar estrutura de dados?**

Nós como profissionai iremos lidar com muitos tipos de dados, e esses dados desde sua criação até o momento da alimentação do sistema precisam ser bem organizados e estruturados.

Isto nos possibilita não só tomar melhores decisões na construção desses dados como também nos ajuda a escrever melhores algoritimos, dando mais eficiencia a nossa aplicação.

<BR>
<BR>

## **Beneficios:**

> 1º Organizar os dados da aplicação.
>
> 2° Entender estruturas para melhor tomada de decisão.
>
> 3° Escrever melhores algoritimos.
>
> 4° Melhorar Eficiência da aplicação.
>
> 5° Algumas empresas usam como requisito.

<BR>
<BR>

## **Desafios diarios no uso de dados:**

> 1° Entendimento de como estão nossos dados na aplicação.
>
> 2° Criar listas (Ordenadas, Não Ordenadas).
>
> 3° Repetição ou não dos dados dentro da estrutura.
>
> 4° Organizar os dados pelo par identificador + valor.

<br>
<br>

## **3 estapas do Gerenciamento:**

> 1º Modelar a estrutura;
>
> 2º Dar vida a estrutura (Instanciar essa estrutura)
>
> 3° Criar as funcionalidades dessa estrutura:
>
> - Exemplo: Inserir, Excluir, Buscar, Exibir, Contar...

<BR>
<BR>

# **Arrays:**

Os arrays, vetore ou arranjos, são uma estrutura amplamente utilizada e implementada em quase todas as linguagens de programação.

É uma das estruturas mais basicas, simples de criar e de utilizar.

```JS

   //Array:
           [1, 2, 3] // 3 Elementos
   //Indice 0  1  2

```

## **Caracteristicas do array:**

- Acesso pelo index.
- Respeita a ordem de inserção dos elementos.
- Aceita valores duplicados.
- Dependendo do tamanho do Array, para encontrar ou deletar um elemento, será necessário um uso maior de performance.

<BR>
<BR>

## **Array no JavaScript:**

1° São dinamicos.

2° Você poderá ter dados de diferentes tipos misturados dentro de um array, como por exemplo:

- Strings
- Numbers
- Booleanos
- Objeos
- Funções
- Outros Arrays.

3° Aceita valores duplicados.

4° Dependendo do tamanho do Array, para encontrar ou deletar um elemento, será necessário um uso maior de performance.

<br>

## **Metodos array:**

Existem muitos métodos já implementados, como por exemplo:

> **Push( ):**
>
> - The `push()` method adds new items to the end of an array.
> - The `push()` method changes the length of the array.
> - The `push()` method returns the new length.

> **Pop( ):**
>
> - The `pop()` method removes (pops) the last element of an array.
> - The `pop()` method changes the original array.
> - The `pop()` method returns the removed element.

> **find( ):**
>
> - The `find()` method returns the value of the first element that passes a test.
> - The `find()` method executes a function for each array element.
> - The `find()` method returns undefined if no elements are found.
> - The `find()` method does not execute the function for empty elements.
> - The `find()` method does not change the original array.

> **filter( ):**
>
> - The `filter()` method creates a new array filled with elements that pass a test provided by a function.
> - The `filter()` method does not execute the function for empty elements.
> - The `filter()` method does not change the original array.

**Obs:** Estes foram alguns dos metodos existentes, mas é preciso lembrar que existem muitos outros alem destes.

<BR>
<BR>

# **Stack:**

Traduzido do ingles stack significa pilha.
Nós podemos imaginar como se fosse uma pilha de livros, um em cima do outro.
Assim como as pilhas de livros, os dados podem ser empilhados um após o outro.
<br>
<br>

## **Caracteristicas do stack:**

- Construido de forma linerar (um após o outro)
- O ultimo elemento a entrar na pilha é o primeiro a sair.

<p>
    <img src="https://www.raulmelo.dev/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fgc3hakk3%2Fproduction%2F4a0b8f23ad43a3d91153579c39c14181b474c48b-1580x889.png&w=1920&q=75"/>
    <br> ** Ilustration by <a href="https://www.raulmelo.dev/blog/data-structure-in-javascript-stack">raulmelo</a> **
</p>

**OBS:** Note na imagem acima que o bloco de numero 3 foi o ultimo a entrar na pilha, mas também vai ser o primeiro a sair dela.

## **Metodos Fundamentais:**

> **Methods:**
>
> - The `push()` method adds new items to the end of an array.
> - The `pop()` method removes (pops) the last element of an array.
> - The `peek()` the method gets the top element of the stack

Outros metodos poderão ser implementados, como por exemplo o metodo `size()` que mostra o tamanho da pilha.

<br>
<bra>

# **Queue:**

Traduzido do ingles queue significa Fila.
Nós podemos imaginar como se fosse uma fila de pessoas, uma na frente da outra.
Assim como as filas de pessoas, os dados podem ser armazenados um após o outro.
<br>
<br>

## **Caracteristicas do Queue:**

- Construido de forma linerar (um após o outro)
- O primeiro elemento a entrar na pilha é também o primeiro a sair.

<p>
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbYXlj8%2Fbtq9ziLZ76k%2FlNyqshJXkBFHj0L3rtbDZ0%2Fimg.png"/>
    <br> ** Ilustration by ** <a href="https://www.raulmelo.dev/blog/data-structure-in-javascript-stack">Code Lab</a> 
</p>

<br>
<br>

## **Conceitos:**

> 1° FIFO (First in First Out):
>
> - O primeiro elemento a entrar na fila também é o primeiro a sair.

> 2° Front (Frente):
>
> - É a referencia do primeiro elemento a entrar na fila.

> 3° Back (Fundo):
>
> - É a referencia do ultimo elemento a entrar na fila.

<br>
<br>

## **Metodos Fundamentais:**

> **Methods:**
>
> - The `enqueue()` method add an element to the end of the queue.
> - The `dequeue()` method remove the first element to enter the queue.

Outros metodos poderão ser implementados, como por exemplo:

- O metodo `size()` que mostra o tamanho da fila.
- O metodo `front()` que pega o primeiro elemento da fila, dentre tantos outros.
