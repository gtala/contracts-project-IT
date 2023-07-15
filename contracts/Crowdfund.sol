// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Crowdfund is Ownable {

    struct Capania {
        uint fechaIncio;
        uint fechaFin;
        string nombre;
        address beneficiario;
    }


    Capania camapnia;

    constructor(uint fechaIncio,
        uint fechaFin,
        string memory nombre,
        address beneficiario) onlyOwner {

    }


    function contribuir() external {

    }

    function retirar() external {

    }


}