 let saldo = 1000;
        const senha = '3589';
        let transacoes = []; 

        function inicio() {
            const nomeUsuario = prompt("Insira seu nome: ");
            if (nomeUsuario){
                const senhaUsuario = prompt("Insira sua senha: ");
                if (senhaUsuario === senha) {
                    alert(`Olá ${nomeUsuario}, bem vindo ao TheBoxBank!`);
                    exibirMenuPrincipal();
                } else {
                    alert("Senha incorreta. Tente novamente.");
                    inicio();
                }
            } else {
                alert("Inválido, tente novamente...");
                inicio();
            }
        }

        function exibirMenuPrincipal() {
            const opcao = parseInt(prompt("Escolha uma opção:\n1. Saldo\n2. Extrato\n3. Saque\n4. Depósito\n5. Transferência\n6. Sair"));

            switch(opcao) {
                case 1:
                    verificarSaldo();
                    return;
                case 2:
                    exibirExtrato();
                    return;
                case 3:
                    const valorSaque = parseFloat(prompt("Informe o valor que deseja sacar:"));
                    realizarSaque(valorSaque);
                    return;
                case 4:
                    const valorDeposito = parseFloat(prompt("Informe o valor que deseja depositar:"));
                    realizarDeposito(valorDeposito);
                    return;
                case 5:
                    transferencia();
                    return;
                case 6:
                    sair();
                    break;
                default:
                    erro("Opção inválida.");
                    exibirMenuPrincipal();
            }
        }

        function verificarSaldo() {
            const senhaUsuario = prompt("Informe sua senha:");
            if (senhaUsuario === senha) {
                alert(`Seu saldo atual é: R$${saldo.toFixed(2)}`);
            } else {
                erro("Senha incorreta. Tente novamente.");
            }
        }

        function realizarSaque(valorSaque) {
            const senhaUsuario = prompt("Informe sua senha:");
            if (senhaUsuario === senha) {
                if (isNaN(valorSaque) || valorSaque <= 0) {
                    erro("Valor de saque inválido.");
                    return;
                }

                if (valorSaque > saldo) {
                    erro("Saldo insuficiente para o saque.");
                    return;
                }

                saldo -= valorSaque;
                alert(`Saque de R$${valorSaque.toFixed(2)} realizado com sucesso!`);
                registrarTransacao("Saque", valorSaque);
                exibirMenuPrincipal();
            } else {
                erro("Senha incorreta.");
            }
        }

        function realizarDeposito(valorDeposito) {
            const senhaUsuario = prompt("Informe sua senha:");
            if (senhaUsuario === senha) {
                if (isNaN(valorDeposito) || valorDeposito <= 0) {
                    erro("Valor de depósito inválido.");
                    return;
                }

                saldo += valorDeposito;
                alert(`Depósito de R$${valorDeposito.toFixed(2)} realizado com êxito!`);
                registrarTransacao("Depósito", valorDeposito);
                exibirMenuPrincipal();
            } else {
                erro("Senha incorreta.");
            }
        }

        function exibirExtrato() {
            let extratoTexto = "Extrato:\n";
            for (let i = 0; i < transacoes.length; i++) {
                extratoTexto += `ID: ${transacoes[i].id} - ${transacoes[i].tipo}: R$${transacoes[i].valor.toFixed(2)}\n`;
            }
            alert(extratoTexto);
            exibirMenuPrincipal();
        }

        function transferencia() {
            const senhaUsuario = prompt("Informe sua senha:");
            if (senhaUsuario === senha) {
                const numeroConta = parseFloat(prompt("Informe o número da conta destino:"));
                if (isNaN(numeroConta)) {
                    erro("Número de conta inválido. Tente novamente.");
                    return;
                }

                const valorTransferencia = parseFloat(prompt("Informe o valor da transferência:"));
                if (isNaN(valorTransferencia) || valorTransferencia <= 0) {
                    erro("Valor de transferência inválido. Tente novamente.");
                    return;
                }

                if (valorTransferencia > saldo) {
                    erro("Saldo insuficiente para a transferência.");
                    return;
                }

                saldo -= valorTransferencia;
                alert(`Transferência de R$${valorTransferencia.toFixed(2)} para a conta ${numeroConta} com êxito!`);
                registrarTransacao("Transferência", valorTransferencia);
                exibirMenuPrincipal();
            } else {
                erro("Senha incorreta. Tente novamente.");
            }
        }

        function registrarTransacao(tipo, valor) {
            const idTransacional = gerarIdTransacional();
            transacoes.push({ id: idTransacional, tipo: tipo, valor: valor });
        }

        function gerarIdTransacional() {
            const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let id = '';
            for (let i = 0; i < 12; i++) {
                const indice = Math.floor(Math.random() * caracteres.length);
                id += caracteres.charAt(indice);
            }
            return id;
        }

        function sair() {
            const nomeUsuario = prompt("Insira seu nome novamente para confirmar a saída:");
            if (nomeUsuario) {
                alert(`Obrigado por utilizar o TheBoxBank, ${nomeUsuario}! Volte sempre.`);
            } else {
                alert("Nome inválido. Por favor, insira seu nome novamente.");
                sair();
            }
        }

        function erro(mensagem) {
            alert(`Erro: ${mensagem}`);
        }

        inicio();
