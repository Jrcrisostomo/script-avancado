/*  JSON - JavaScript Object Notation

- Padrão de troca e armazenamento de informações
- Padrão Lógistico simples
- Leve para ser enviado e recebido
- Simples e fácil de entender
- Derivado do JavaScript
- Utiliza o formato chave / valor

*/

const user = {
    nome: "Junior",
    idade: 36,
    filhos: 1,
    hobbies:["Codar", "Filmes", "Séries", "Acadamia"],
    casado: true,
    empresas:{
        DDKidS:{
            fundada:2024,
            colaboradores: 40
        },
        monsterapp: {
            fundada: 2023,
            colaboradores: 4
        },
        agendasua: {
            fundada: 2023,
            colaboradores: 4
        }
    }

}


const userJson = JSON.stringify(user)

const userJsonToJs = JSON.user(userJson)

console.log(userJsonToJs)