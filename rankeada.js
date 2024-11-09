const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//saldo de vitorias e nivel do jogador
function calcularSaldoEvit(vit, derr){
    const saldo = vit - derr;
    let nivel;

    //classifica o nivel com base nas vitorias
    if(vit < 10){
        nivel = "Ferro";
    }else if(vit >= 11 && vit <= 20){
        nivel = "Bronze";
    }else if(vit >= 21 && vit <= 50){
        nivel = "Prata";
    }else if(vit >= 51 && vit <= 80){
        nivel = "Ouro";
    }else if(vit >= 81 && vit <= 90){
        nivel = "Diamante";
    }else if(vit >= 91 && vit <= 100){
        nivel = "Lendário";
    }else if(vit >= 101){
        nivel = "Imortal";
    }
    return{saldo, nivel};
}

//recebe o numero de vitórias e derrotas
rl.question("Digite o número de vitórias do jogador: ", (inputvit) => {
    const vit = parseInt(inputvit);

    rl.question("Digite o número de derrotas do jogador: ", (inputderr) => {
        const derr = parseInt(inputderr);

        //chama a função para calcular o saldo e o nivel
        const { saldo, nivel } = calcularSaldoEvit(vit, derr);

        //exibe a mensagem final
        console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);

        rl.close();
    });
});