//nome do usuário ao acessar o sistema e saudação.
function inicio() {
    const nomeUsuario = prompt("Insira seu nome: ");
        if (nomeUsuario){
            alert(`Olá ${nomeUsuario}', bem vindo ao TheBank!`)
        } else {
            alert("Inválido, tente novamente...");
            inicio();
        }
}   exibirMenuPrincipal();
//validar a opção escolhida pelo usuário
function exibirMenuPrincipal() {
    const opcao = parseInt(prompt("Escolha uma opção:\n1. Saldo\n2. Extrato\n3. Saque\n4. Depósito\n5. Transferência\n6. Sair"));
    switch(opcao) {
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        case 6:
                sair();
                    break;
            default: erro ("Opção inválida.")
            inicio();
    }
}
//Validar o valor restante após o saque, para que não fique negativa
function sacar() {
    const valorSaque = parseFloat(prompt("Informe o valor do saque: "));
    if (valorSaque <= 0 || isNaN(valorSaque)) {
        erro("Operação não autorizada. Para utilizar a reserva, entre em contato com a central.");
        return;
    }
    if (valorSaque > saldo) {
        erro("Operação não autorizada. saldo insuficiente.")
        return;
    }
}
//exibir extrato
function exibirExtrato() {
    
}
//Fazer Transferência