/*

THIS

this em inglês signfica => este, esta, isto...

No Javascript, o this faz referência:

Node => module.exports
Web  => window

Escopo:
=> Global -> Quando começamos a escrever nossa aplixação.
    No contexto global, o this faz referência ao objeto global.
    que é o objeto window no navegador de internet ou ao objeto global no Node.js.

=> Local -> Por exemplo, dentro de uma função!
*/

// const name = "Junior" // Escopo Global

/* function myName(){
    const myName = "Junior" // Escopo Local
} */


const person = {
    name:"Junior",
    age:35,
    talk: function(){
        console.log(Olá)
    }
}

function myfunction(){
    this.console.log("Agora sou o global")
}