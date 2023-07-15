const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const {ethers} = require("ethers");

describe("Lock", function () {


  describe("some function", ()=>{
    it("should print 100 Ethers", async ()=> {
      console.log(ethers.utils.parseEther("100"))
    })
  })


});