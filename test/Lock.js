const { expect } = require("chai");

describe("Lock", function () {
  it("output of getString should be abcxyz with input of xyz", async function () {
    const contract = await ethers.deployContract("Lock");

    const result = "abcxyz";
    expect(await contract.getString("xyz")).to.equal("abcxyz");
  });

  it("output of getString should be abcxyz with input of xyz", async function () {
    const contract = await ethers.deployContract("Lock");
    const result = "xyzabc";
    expect(await contract.getString("xyz")).to.equal(result);
  });
});
