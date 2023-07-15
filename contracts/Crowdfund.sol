// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Crowdfund is Ownable {

    struct Capania {
        uint fechaIncio;
        uint fechaFin;
        uint nombre;
        uint beneficiario;
    }


    Capania camapnia;

    constructor(Capania memory _camapnia) onlyOwner {

    }


    function contribuir() external {

    }

    function retirar() external {

    }


}