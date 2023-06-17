import { useEffect, useState } from "react";

import { useAccount, useBalance } from "wagmi";

import erc20Instance from "../abi/erc20.json";

const DisplayBalance = () => {
    const [displayBalance, setDisplayBalance] = useState(false);
    const {address, isConnected} = useAccount();
    const {data: cusdBalance} = useBalance({
        address,
        token: erc20Instance.address as `0x${string}`
    });

    useEffect(() => {
        if (isConnected && cusdBalance) {
            setDisplayBalance(true);
            return;
        }
        setDisplayBalance(false);
    }, [cusdBalance, isConnected])

    return (
        <div>
            {displayBalance && (
                <span
                    className="inline-block text-dark ml-4 px-6 py-2.5 font-medium text-md leading-tight rounded-2xl shadow-none "
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalCenter"
                    >
                    Balance: {Number(cusdBalance?.formatted || 0).toFixed(2)} cUSD
                </span>
            )}
        </div>
    )
}

export default DisplayBalance;