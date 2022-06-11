import React from "react";

import { ethers, BigNumber } from "ethers";
import PiggyBank from "../contracts/abis/PiggyBank.json";
import { useState, useEffect } from "react";

const piggyBankAddress = "0xf900BB65faE6EC097ae1Be624DA062fD5DB753fe";

const MainArea = ({ accounts, setAccounts }) => {
  const [amount, setAmount] = useState(0);
  const isConnected = Boolean(accounts[0]);

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contractSigner = new ethers.Contract(
    piggyBankAddress,
    PiggyBank.abi,
    signer
  );
  const contractProvider = new ethers.Contract(
    piggyBankAddress,
    PiggyBank.abi,
    provider
  );

  const depositToPiggy = () => {
    contractSigner
      .payMe({ value: ethers.utils.parseEther("0.1") })
      .then((transaction) => {
        transaction
          .wait()
          .then((transaction) => {
            console.log(transaction);
            getAmount();
          });
      })
      .catch((e) => console.log(e));
  };

  const getAmount = () => {
    contractProvider
      .getTotalAmount()
      .then((value) =>
        setAmount(ethers.utils.formatEther(BigNumber.from(value.toString())))
      )
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getAmount();
  }, []);

  return (
    <div>
      <p>Current amount in piggy: {amount}</p>
      {isConnected ? (
        <div>
          <button onClick={depositToPiggy}>Deposit 0.1 Ether to Piggy</button>
        </div>
      ) : (
        <div>
          <p>Connect to Wallet to be able to Deposit{amount}</p>
        </div>
      )}
    </div>
  );
};

export default MainArea;
