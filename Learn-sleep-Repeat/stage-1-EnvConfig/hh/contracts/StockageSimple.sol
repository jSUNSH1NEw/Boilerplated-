//SPDX-License-identifier: MIT 

pragma solidity ^0.8.0;


Contract StockageSimple{

uint256 favoriteNumber; 
// uint256 define the favorite number to 0	+ in the contract will be indexed at 0 

Struct{
	uint256 favoriteNumbers; //normaly indexed at 0 
	string userNames; //normaly indexed at 1
}

function store(uint256 _favoriteNumber) public {
favoriteNumber = _favoriteNumber;
}

}