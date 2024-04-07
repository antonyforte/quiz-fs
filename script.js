const perguntas = [
    {
      pergunta: "Qual linguagem é usada para definir a estrutura de uma página web?",
      respostas: ["JavaScript", "HTML", "CSS"],
      correta: 1
    },
    {
      pergunta: "Qual linguagem é usada para estilizar o conteúdo de uma página web?",
      respostas: ["JavaScript", "HTML", "CSS"],
      correta: 2
    },
    {
      pergunta: "Qual linguagem é usada para adicionar interatividade a uma página web?",
      respostas: ["JavaScript", "HTML", "CSS"],
      correta: 0
    },
    {
      pergunta: "Qual elemento HTML é usado para criar um link para outra página?",
      respostas: ["<link>", "<a>", "<href>"],
      correta: 1
    },
    {
      pergunta: "Qual propriedade CSS é usada para definir a cor de fundo de um elemento?",
      respostas: ["background-color", "color", "font-family"],
      correta: 0
    },
    {
      pergunta: "Qual método JavaScript é usado para selecionar um elemento pelo seu ID?",
      respostas: ["getElementById()", "selectElementById()", "findElementById()"],
      correta: 0
    },
    {
      pergunta: "Qual tag HTML é usada para definir o conteúdo principal de uma página web?",
      respostas: ["<header>", "<main>", "<body>"],
      correta: 1
    },
    {
      pergunta: "Qual propriedade CSS é usada para definir a fonte de texto em um elemento?",
      respostas: ["font-family", "text-style", "font-size"],
      correta: 0
    },
    {
      pergunta: "Qual evento JavaScript é acionado quando um usuário clica em um elemento?",
      respostas: ["onhover", "onclick", "onsubmit"],
      correta: 1
    },
    {
      pergunta: "Qual elemento HTML é usado para criar uma lista ordenada?",
      respostas: ["<ul>", "<li>", "<ol>"],
      correta: 2
    }
  ];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for (let resposta of item.respostas) {

       const dt = quizItem.querySelector('dl dt').cloneNode(true)
       dt.querySelector('span').textContent = resposta

       dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))

       dt.querySelector('input').value = item.respostas.indexOf(resposta)
       dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta

        corretas.delete(item)
        if(estaCorreta){
            corretas.add(item)
        }

        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

       }

       quizItem.querySelector('dl').appendChild(dt)
       
    }
    quizItem.querySelector('dl dt').remove()
    quizItem.querySelector('dl dt').remove()  
    // Coloca a Pergunta na tela
    quiz.appendChild(quizItem)

}