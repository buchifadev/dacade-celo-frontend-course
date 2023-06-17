import Blockies from 'react-blockies';
import { ethers } from 'ethers';
export const identiconTemplate = (address : string) => {
    return <Blockies size={10} 
    scale={4} 
    className="identicon border-2 border-white rounded-full" // optional className
    seed={address} // seed used to generate icon data, default: random
    />
}

export const shortenAddress = (address: string) => {
    const shortAddress = address.slice(0, 5) + "..." + address.slice(address.length - 4, address.length);
    if (!address) {
        return null;
    } else {
        return shortAddress;
    }
}

export const amountFromEther = (etherAmount: number) => {
    const amount = ethers.utils.formatEther(
        etherAmount.toString()
    );
    return amount;
}

export const amountToEther = (amount: number) => {
    const etherAmount = ethers.utils.parseEther(
        amount.toString()
    );
    return etherAmount
}