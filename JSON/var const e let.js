
// VAR x LET x CONST

var myvar = "Hello"             // Var  ' A diferença  entre Let e Const pro Var é o scop e VAR não é muito usado utimamente'

let mylet = "Olá"               // Let e Const são iguais
const myconst = "Hei"           //  CONST não muda valor ou variavel ela é fixa

    // EXEMPLO DE SCOP abaixo
    if(true) {
            
    let mylet = "hello"               // Let e Const são iguais porem não tem acesso fora do IF, só VAR tem acesso.

    const myconst = "Hei"

    
        console.log(mylet)
    }