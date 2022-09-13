// com condições múltiplas no JS, utiliza-se 'break' no final de cada 'case' e 'default' para que ao final do bloco do case a leitura do JS seja direcionada para o final da condição/expressão.

var agora = new Date()

var diaSem = agora.getDay()
/* o JS lê os dias da semana nessa ordem
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/

// console.log(diaSem)

switch(diaSem) {
    case 0:
        console.log(`Domingo`)
        break

    case 1: 
        console.log(`Segunda`)
        break
    
    case 2:
        console.log(`Terça`)
        break

    case 3: 
        console.log(`Quarta`)
        break

    case 4:
        console.log(`Quinta`)
        break

    case 5:
        console.log(`Sexta`)
        break

    case 6:
        console.log(`Sábado`)
        break

    default: 
        console.log(`[ERRO] Dia inválido.`)
        break
}