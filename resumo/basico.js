/*
HTML (HyperText Markup Language)- linguagem de marcação de hipertexto.

CSS (Cascading Style Sheets) -  linguagem utilizada para definir a 
aparência visual de documentos HTML ou XML.

JavaScript (JS) - linguagem de programação interpretada estruturada, de script 
em alto nível com tipagem dinâmica fraca e multiparadigma.
 */

/*
                                VARIÁVEIS
    const - palavra-chave usada para declarar uma constante, ou seja, 
    uma variável cujo valor não pode ser reatribuído após sua inicialização.

    let - palavra-chave usada para declarar variáveis.

    var - é usado para declarar variáveis, mas é considerado o método mais 
    antigo e menos recomendado atualmente.

    Diferenças de var e let:
        - Escopo: var tem escopo global, ou seja, pode ser acessada dentro de 
        todo o código. Já let, se declarada dentro do bloco, pode ser acessada
        somente dentro do bloco que foi declarada.

        - Hoisting: As declarações var são "içadas" para o topo do seu escopo, 
        mas o valor atribuído não é. Isso significa que você pode acessar a 
        variável antes de sua declaração, mas ela terá o valor undefined. 
        As declarações let também são içadas, mas não são inicializadas. 
        Tentar acessar uma variável let antes de sua declaração resulta em um 
        erro (ReferenceError). 

        - Redeclaração: var permite redeclarar a mesma varíavel no mesmo escopo
        (não recomendado). Já let não permite a redeclaração da mesma variável
        no mesmo escopo. Tentar redeclarar resulta em um erro (SyntaxError). 
Ex. var: */
// var nome = "Lucas";
// var nome = "Pedro";
// console.log(nome);

/*Ex. let:*/
// let nome = "Lucas";
// let nome = "Pedro";
// console.log(nome);

/*
                            DADOS PRIMITIVOS
    String - Ex.: "Olá Mundo!", 'JavaScript', `Tamplate`

    Number - Ex.: 10, 3.14, -5

    Boolean - Ex.: true ou false

    Null - ausência de valor. Ex.: null

    Undefined - variável que foi declarada, mas não recebeu um valor.
        Ex.: undefined

    Symbol: um identificador único e imutável, introduzido no ECMAScript 6. 
        Ex.: Symbol('id') 
*/

/*                      OPERADORES DE ARITMÉTICOS                             */
// const num1 = 5;
// const num2 = 4;

// /*Adição (+):*/ console.log(num1 + num2);

// /*Subtração (-):*/ console.log(num1 - num2);

// /*Multiplicação (*):*/ console.log(num1 * num2);

// /*Divisão (+):*/ console.log(num1 + num2);

// /*Módulo ou resto (%):*/ console.log(num1 % num2);

// /*Exponencial (**):*/ console.log(num1 ** num2);

/*                      OPERADORES INCREMENTO                                 */
// let contador = 1;

// /*Incremento (++):*/ contador++;
//                      console.log(contador);

// /*Decremento (--):*/ contador--;
//                      console.log(contador);
