/*
                                ARRAY
    Tipo de objeto usado para armazenar múltiplos valores em uma única variável.
         const meuArrayEx = [1, 2, 3, "quatro", { nome: "exemplo" }];
         
         Indices           0  1  2  3  4  5 ...
         const meuArray = [1, 2, 3, 4, 5, 6];

                               MÉTODOS
    push(): Adiciona um ou mais elementos ao final do array. 
                Ex.: meuArray.push(4);
                    console.log(meuArray);
                    meuArray = [1, 2, 3, 4];

// /*pop(): Remove o último elemento do array.
                Ex.: meuArray.pop();
                     console.log(meuArray);
                     meuArray = [1, 2];

// shift(): Remove o primeiro elemento do array.
                Ex.: meuArray.shift();
                     console.log(meuArray);
                     meuArray = [2, 3];

// unshift(): Adiciona um ou mais elementos no início do array.
                Ex.: meuArray.unshift(5);
                     console.log(meuArray);
                     meuArray = [5, 1, 2, 3];

// splice(): Adiciona ou remove elementos em uma posição específica.
                Ex.: meuArray.splice(2, 1, "Lucas");
                     console.log(meuArray);
                     meuArray = [1, 2, "Lucas", 4, 5, 6];

// slice(): Cria um novo array com uma parte dos elementos do array original.
                Ex.: meuArray = [1, 2, 3, 4, 5, 6];
                     meuArraySlice = meuArray.slice(1, 5);
                     console.log(meuArraySlice);
                     meuArraySlice = [2, 3, 4, 5, 6]

// concat(): Combina dois ou mais arrays em um novo array.
                Ex.: const fala1 = "Olá";
                     const fala2 = "Mundo!"
                     const falaCompleta = fala1.concat(" ", fala2);
                     console.log(falaCompleta);

// join(): Converte o array em uma string, com um separador especificado.
                Ex.: const frutas = ["maçã", "uva", "laranja"];
                     console.log(frutas.join("-"));
                     "maçã-uva-laranja"

// indexOf(): Retorna o índice da primeira ocorrência de um elemento.
                     Indices           0       1        2
                Ex.: const frutas = ["maçã", "uva", "laranja"];
                     console.log(frutas.indexOf("uva"));
                     "1"

// includes(): Verifica se o array contém um determinado elemento.
                Ex.: const frutas = ["maçã", "uva", "laranja"];
                     console.log(frutas.includes("uva"));
                     "true"

// sort(): Ordena os elementos do array.
                Ex.: const frutas = ["maçã", "uva", "laranja"];
                     console.log(frutas.sort());
                     "[ 'laranja', 'maçã', 'uva' ]"

// reverse(): Inverte a ordem dos elementos do array.
                Ex.: const frutas = ["maçã", "uva", "laranja"];
                     console.log(frutas.reverse());
                     "[ 'laranja', 'uva', 'maçã' ]"

// map(): Cria um novo array com os resultados da aplicação de uma função a
// cada elemento.

// filter(): Cria um novo array com todos os elementos que passam em um teste
// específico.

// reduce(): Aplica uma função a um acumulador e cada valor do array
// (da esquerda para a direita) para reduzi-lo a um único valor.
*/
