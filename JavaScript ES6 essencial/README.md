# JavaScript ES6 essencial
Repositório para armazenamento e anotações das aulas realizadas no **JavaScript ES6 essencial**.

--Lançamento em setembro de 1995
--Criado por Brendan Eich
--ECMAScript: Especificação da linguaguem
--TC39:
--Fluxo de resposta
--ES2018
--ES.Next

O JavaScript é uma linguagem interpretada, ou seja, não é necessário uma compilação antes de ser executada.

## Tipos e variáveis
A linguagem JavaScript possui os seguintes tipos de dados:
--string: tipo de dado que representa textos
--number: tipo de dado que representa números;
--boolean: tipo de dado que representa valores lógicos true ou false;
--null: tipo de dado que representa valores nulos;
--underfined: tipo de dado representa valores não definidos;
--symbol: (estudar sobre este tipo de dado);
--Object: tipo de dado que represente um conjunto de informações;
--Function: tipo de dado que representa um bloco de instruções;
--Array: tipo de dado que representa uma coleção de dados;

### String
Retornar o tamanho de uma string: podemos retonar o tamanho de uma string utilizando a propriedade length.
```js
const textSize = 'Texto'.length;
console.log(`Quantidade de letas: ${textSize}`);
```

Retornar um array quebrando a string por um delimitador: 
```js
const splittedText = 'Texto'.split('x');
console.log("Array com as posições separadas peloi delimitador", splittedText);
```
