# Lógica de Programação Essencial
Repositório para armazenamento do exercícios e anotações das aulas realizadas no **Lógica de Programação Essencial**.

# 1. Entendendo o que é lógica
Programar vai além de desenvolver códigos, é necessário entender quais problemas serão resolvidos e qual a lógica adequada para solucionar tal problema.

## O que é lógica?
O dicionário Aurélio descreve lógica como, **"coerência de raciocínio, de ideias"** ou como, **"sequência coerente, regular e necessária de acontecimentos, coisas"**.

## O que significa Lógica de programação?
"**Lógica de programação significa apenas contextualizar a lógica na programação de computadores, buscando a melhor sequência de ações para solucionar um problema**". Também podemos chamar de algoritmo.

## Metacognição
Metacognição significa "**Pensar como você pensa**".

### Abstração
Podemos entender a abstração como "**a habilidade de concentrar nos aspectos essenciais de um contexto qualquer, ignorando características menos importantes ou acidentais**", ou seja, outras formas de resolver o mesmo problema.

### Exercício
Crie um mapa mental para resolver um determinado problema, por exemplo, calcular a média aritmética de 4 notas, sabendo que as notas são as seguintes:

Nota 1: 5

Nota 2: 7

Nota 3: 10

Nota 4: 3

### Solução
<table>
    <tr>
        <th>nota_1</th>
        <th>nota_2</th>
        <th>nota_3</th>
        <th>nota_4</th>
        <th>soma_das_notas</th>
        <th>media</th>
    </tr>
    <tr>
        <td>5</td>
        <td>7</td>
        <td>10</td>
        <td>3</td>
        <td>25</td>
        <td>6,25</td>
    </tr>
</table>

### Abstração
<table>
    <tr>
        <th>nota_1</th>
        <th>nota_2</th>
        <th>nota_3</th>
        <th>nota_4</th>
        <th>media</th>
    </tr>
    <tr>
        <td>5</td>
        <td>7</td>
        <td>10</td>
        <td>3</td>
        <td>6,25</td>
    </tr>
</table>

# 2. O que são algoritmos e pseudocódigo
## O que é um algoritmo?
Podemos definir um algoritmo como "**uma sequência de passos finitos que resolvem um problema**".

Um bom exemplo de algoritmo é uma rotina matinal:

    Início-dia
        Acordar
        Levantar da cama
        Trocar de roupa
        Escovar os dentes
        Tomar café
        Escovar os dentes
        Ir trabalhar
        ...
    Fim-dia

## O que é um pseudocódigo?
Pseudocódigo é uma forma genérica de escrever um algoritmo, utilizando uma linguagem simples (nativa, ou seja, em português a quem o escreve, de forma a ser entendida por qualquer pessoa).

# 3. Aprendendo fluxograma, variáveis e constantes
## O que é um Fluxograma?
Fluxograma é uma ferramenta utilizada para representar graficamente um algoritmo, isto é, uma sequência lógica  e coerente do fluxo de dados.

![Fluxograma](/assets/fluxograma.png)

Também podemos definir fluxograma como, "**Um tipo de diagrama que pode ser entendido como uma representação esquemática de um processo. Podemos entendê-lo, na prática, como a documentação dos passos necessários para a execução de um processo qualquel**".

![Fluxograma](/assets/fluxograma2.png)

## Diagrama de blocos
Para construir um fluxograma, podemos utilizar o diagrama de bloco:

![Diagrama de Bloco](/assets/diagrama_bloco.png)

## O que são variáveis?
"**Na programação, uma variável é um objeto (uma posição, frequentemente localizada na memória do computador) capaz de guardar e representar um valor ou expressão**". O valor guardado nesta variável pode ser alterado ao decorrer da execução do programa. Desta forma, uma variável que recebeu, por exemplo, o valor 7, pode posteriormente receber 8 como valor.

## O que são constantes?
Na programação, uma constante tem a mesma função que uma variável, apenas com as seguintes diferença:
.Seu valor não pode ser alterado na decorrer da execução do programa;
.Deve, obrigatóriamente, receber um valor no momento de inicialização;

## Tipos de dados?
As variáveis e constantes podem receber basicamente quatro tipos de dados:
--Numéricos;
--Caracteres;
--Alfanuméricos
--Lógicos;

## Exercício
### Calcular médio
![Calcular Média](/assets/calcula_media.png)