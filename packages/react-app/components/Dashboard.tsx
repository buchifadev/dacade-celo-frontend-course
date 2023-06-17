// This component is used to add a product to the marketplace and show the user's cUSD balance

// Importing the dependencies
import { useState } from "react";
import { ethers } from "ethers";
import { useContractCall } from "@/hooks/contract/useContractRead";
import { shortenAddress, identiconTemplate, amountFromEther } from "@/helpers";
import Link from "next/link";

// Define the AddProductModal component
const Dashboard = () => {
    const {data: topSpender} = useContractCall("getTopSpender", [], true);
    const {data: topSpenderAmount} = useContractCall("getTopSpenderNumber", [topSpender], true);
    const {data: topBuyer} = useContractCall("getTopBuyer", [], true);
    const {data: topBuyerAmount} = useContractCall("getTopBuyerNumber", [topBuyer], true);

  // The visible state is used to toggle the visibility of the modal
  const [visible, setVisible] = useState(false);

  // Define the JSX that will be rendered
  return (
    <div className={"flex flex-row w-full justify-between"}>
      <div>
        {/* Add Product Button that opens the modal */}
        <button
          type="button"
          onClick={() => setVisible(true)}
          className="inline-block ml-4 px-6 py-2.5 bg-black text-white font-medium text-md leading-tight rounded-2xl shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalCenter"
        >
          View Dashboard
        </button>

        {/* Modal */}
        {visible && (
          <div
            className="fixed z-40 overflow-y-auto top-0 w-full left-0"
            id="modal"
          >
            <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
                <div className="absolute inset-0 bg-gray-900 opacity-75" />
            </div>
            {/* Mobile view */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
                &#8203;
            </span>

            <div
                className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
            >
                {/* Table to display dashboard data */}
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-lg">
                                            Dashboard Data
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Top Spender
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Top Buyer
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Avatar
                                        </th>
                                        <td className="px-6 py-4">
                                            <Link
                                                href={`https://explorer.celo.org/alfajores/address/${topSpender}`}
                                                className={"absolute -mt-7 ml-6 h-16 w-16 rounded-full"}
                                            >
                                                {identiconTemplate(String(topSpender))}
                                            </Link>
                                        </td>
                                        <td className="px-6 py-4">
                                            <Link
                                                    href={`https://explorer.celo.org/alfajores/address/${topSpender}`}
                                                    className={"absolute -mt-7 ml-6 h-16 w-16 rounded-full"}
                                                >
                                                    {identiconTemplate(String(topBuyer))}
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Address
                                        </th>
                                        <td className="px-6 py-4 font-mono">
                                            {shortenAddress(String(topSpender))}
                                        </td>
                                        <td className="px-6 py-4 font-mono">
                                            {shortenAddress(String(topBuyer))}    
                                        </td>
                                    </tr>
                                    <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Amount
                                        </th>
                                        <td className="px-6 py-4 font-mono">
                                            {amountFromEther(Number(topSpenderAmount))} cUSD
                                        </td>
                                        <td className="px-6 py-4 font-mono">
                                            {Number(topBuyerAmount)} Quantity
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                </div>
                {/* Button to close the modal */}
                <div className="bg-gray-200 px-4 py-3 text-right">
                <button
                    type="button"
                    className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"
                    onClick={() => setVisible(false)}
                >
                    <i className="fas fa-times"></i> Close
                </button>
                </div>
            </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;