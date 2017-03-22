# React com ES6: de Padawan a Mestre Jedi

Esse repositório tem como objetivo compartilhar arquivos das aulas do curso **React com ES6: de Padawan a Mestre Jedi**. Além disso, disponibilizamos os arquivos
do projeto que será feito no decorrer das aulas. 

Os arquivos estão divididos por módulos. Cada módulo tem seu próprio contexto e cada aula pode conter um ou mais arquivos 
relacionados com o tema da aula.

***

<p align="center"><b> Quer aprender mais?</b><br>Visite <a href="http://skillo.io">skillo.io</a> onde temos outros cursos</p>

***

## Módulo 1 : Introdução

### Aula 1: Introdução ###
React é uma biblioteca popular e por uma boa razão, ela é extremamente útil. Mas quando alguns desenvolvedores consideram aprender 
React, eles frequentemente acabam enfrentando um problema: Eles não tem muita certeza do que o React é ou problema que ele resolve. 

Essa aula vai ajudar exatamente nesse aspecto. Explicar o problema que o React resolve e como ele resolve. 

### Aula 2: Entendendo o problema ###
Antes do React (e bibliotecas modernas similares), manter o DOM em sincronia com o seu modelo de dados era doloroso.

Havia geralmente duas abordagens:

1. Renderizar novamente grandes seções do DOM quando seus dados mudam.
2. Escrever funções que manipulavam o DOM para sincronizar o DOM com seus dados.

Ambas as abordagens tiveram grandes problemas, que você verá como em um exemplo.

### Aula 3: Abordagem 1: Renderizar Novamente a Lista ###
Se você usar a abordagem de renderizar o DOM novamente, o navegador terá que destruir e criar muitos elementos.
Esta abordagem tem alguns problemas:

1. Lento com um grande número de elementos.
2. Os manipuladores de eventos serão perdidos.
3. O estado de foco será perdido.


### Aula 4: Abordagem 2: Utilizar Funções de Atualização do DOM ###
Você poderia escrever uma função que atualize o DOM adicionando um elemento ao final da lista:

```javascript
function addItem (itemName) {
   var node = document.createElement('li');
   node.textContent = itemName;
   document.querySelector('ul').appendChild(node);
}
```

Funciona! E é rápido! Mas, à medida que você adiciona recursos, essa abordagem é interrompida. 
Deseja escrever funções de atualização de DOM para cada um desses cenários?

1. Adicionar item ao topo
2. Adicionar item ao meio
3. Remover item
4. Sort da lista
5. Checkbox State

Escrever funções de atualização de DOM para cada tipo de alteração de dados rapidamente 
incha sua base de código e cria maior potencial para erros.

### Aula 5: Como o React resolve o problema? ###

### Aula 6: Semântica do React ###

### Aula 7: Conclusão ###

***

## Módulo 2 : Configuração Básica React/Babel

### Aula 1: React e ReactDOM em uma página HTML ###
Usando react.js e react-dom.js em uma página HTML

### Aula 2: JSX via Babel ###
Usando JSX via Babel

### Aula 3: ES6/React ###
 Usando ES6 & ES* com React

***

## Módulo 3 : React Nodes/Elements    

Nesse módulo iremos aprender o que são React Nodes/Elements e como criá-los. Além disso, vamos ver a diferença entre 
React Components, Elements, and Instances. 

### Arquivos ###

### Aula 3: Criando React Nodes/Elements ###
Nessa aula vamos ver diversas formas possíveis de criar componentes com React. 

### Aula 4: Criando React Nodes/Elements - Exemplo prático ###
Nessa aula iremos aplicar o que vimos até agora em um exemplo prático.   

***

## Módulo 4 : Javascript Syntax Extension (JSX)    

Nesse módulo iremos aprender a como criar nossos elementos e componentes usando JSX. 

JSX é uma extensão de sintaxe XML-like para ECMAScript sem qualquer semântica definida. Destina-se a ser utilizado por vários pré-processadores (transpilers)
para transformar estes tokens em ECMAScript padrão.

Vamos entender como usar essa extensão e como ela facilita o noso trabalho. 

### Aula 0: Configurando Ambiente ###
Nessa aula vamos configurar o nosso ambiente para começar a usar JSX sendo compilado pelo Babel, além do ES6. 

### Aula 1: JSX ###
Nessa aula vamos começar a analisar essa extensão.

### Aula 2: Criando React Nodes/Elements ###
Nessa aula vamos pegar os exemplos que fizemos no módulo passado e refatorá-los usando JSX e ES6.

### Aula 4: Usando Expressões JS no JSX ###
Nessa aula vamos ver como podemos usar expressões do javascript e executar dentro do JSX. Essa abordagem nos ajuda na prática a 
renderizar nosso elemento de acordo determinadas condições ou propriedades. 

### Links ###
[JSX](https://facebook.github.io/jsx/)

[Webpack](https://webpack.js.org/)

***

## Módulo 5 : React Components
  
Nesse módulo ainda não temos arquivos

***

## Módulo 6 : Propriedades dos Componentes    

Nesse módulo ainda não temos arquivos

***

## Módulo 7 : Estado dos Componentes
    
Nesse módulo ainda não temos arquivos

***


