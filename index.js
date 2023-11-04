let resultado = saldoVitorias(50, 25)


function saldoVitorias(vitorias, derrotas){
    let diferença = vitorias - derrotas
    return diferença

}

if (resultado < 10){
    console.log("O Herói tem " + resultado + " de saldo de vitórias e está no nível ferro")
} else if (resultado >= 11 && resultado <= 20) {
    console.log("O Herói tem " + resultado + " de saldo de vitórias e está no nível bronze")
} else if (resultado >= 21 && resultado <= 50) {
    console.log("O Herói tem " + resultado + " de saldo de vitórias e está no nível prata")
} else if (resultado >= 51 && resultado <= 80) {
    console.log("O Herói tem " + saldoVitorias + " de saldo de vitórias e está no nível ouro")
} else if (resultado >= 81 && resultado <= 90) {
    console.log("O Herói tem " + saldoVitorias + " de saldo de vitórias e está no nível diamante")
} else if (resultado >= 91 && resultado <= 100) {
    console.log("O Herói tem " + saldoVitorias + " de saldo de vitórias e está no nível lendário")
} else if (resultado >= 101) {
    console.log("O Herói tem " + saldoVitorias + " de saldo de vitórias e está no nível imortal")
}

