const { assert } = require("console");

const Lottery = artifacts.require("Lottery");

contract("Lottery", () => {
  it("Should be deployed properly", async () => {
    const lottery = await Lottery.deployed();
    assert(lottery.address !== "");
  });

  it("should recieve payments", async () => {
    const lottery = await Lottery.deployed();
    assert(lottery.recieve !== "");
  });

  it("should give the balance to manager", async () => {
    const lottery = await Lottery.deployed();
    const result = await lottery.getBalance();
    assert(result !== "");
  });
});
