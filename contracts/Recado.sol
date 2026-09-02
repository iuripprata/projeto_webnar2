// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract Recado {
    string public mensagem;
    address public autor;

    constructor(string memory _mensagemInicial) {
        mensagem = _mensagemInicial;
        autor = msg.sender;
    }

    function atualizarMensagem(string memory _novaMensagem) public {
        mensagem = _novaMensagem;
    }
}