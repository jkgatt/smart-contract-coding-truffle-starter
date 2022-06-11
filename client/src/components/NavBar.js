import React from 'react'

import { ethers } from 'ethers';
import { useEffect } from 'react';

const NavBar = ({accounts, setAccounts}) => {
  const isConnected = Boolean(accounts[0]);

  const connectToWallet = () => {
    if (!window.ethereum) {
      console.log("Install Metamask");
      return;
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    provider
      .send("eth_requestAccounts", [])
      .then((accounts) => {
        setAccounts(accounts);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    connectToWallet();
  }, []);

  return (
    <nav>
      {isConnected ? (
        <p>Connected to {accounts[0]}</p>
      ): (
        <button onClick={connectToWallet}>Connect To Account</button>
      )}
    </nav>
  )
}

export default NavBar