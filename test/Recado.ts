import { expect } from "chai";
import { network } from "hardhat";

const { ethers } = await network.connect();

describe("Recado", function () {
  it("deve guardar a mensagem inicial e permitir atualizar", async function () {
    const Recado = await ethers.getContractFactory("Recado");
    const recado = await Recado.deploy("Ola, Web3!");

    expect(await recado.mensagem()).to.equal("Ola, Web3!");

    await recado.atualizarMensagem("Nova mensagem!");
    expect(await recado.mensagem()).to.equal("Nova mensagem!");
  });
});