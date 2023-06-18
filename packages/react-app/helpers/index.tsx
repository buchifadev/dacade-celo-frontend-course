import Blockies from 'react-blockies';
import { ethers } from 'ethers';

// Returns an identicon for the given address
export const identiconTemplate = (address : string) => {
    return <Blockies size={10} 
    scale={4} 
    className="identicon border-2 border-white rounded-full" // optional className
    seed={address} // seed used to generate icon data, default: random
    />
}

// Reduce the length of a given address
export const shortenAddress = (address: string) => {
    const shortAddress = address.slice(0, 5) + "..." + address.slice(address.length - 4, address.length);
    if (!address) {
        return null;
    } else {
        return shortAddress;
    }
}

// Convert the given amount from ether (10^18) to wei
export const amountFromEther = (etherAmount: number) => {
    const amount = ethers.utils.formatEther(
        etherAmount.toString()
    );
    return amount;
}

// Convert the give amount from wei to ether
export const amountToEther = (amount: number) => {
    const etherAmount = ethers.utils.parseEther(
        amount.toString()
    );
    return etherAmount
}

export const checkUrl = (rawURL: string) => {
    let givenURL ;
    try {
        givenURL = new URL (rawURL);
    } catch (error) {
        console.log ("error is", error);
       return false; 
    }
    return true;
  }