import { ethers } from "ethers";
import { useEffect, useState } from "react";

const App = () => {
  let provider;
  let signer;

  const address = "";
  const [accounts, setAccounts] = useState([]);
  const [piggyAmount, setPiggyAmount] = useState(0);

  const connectToWallet = () => {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    signer = provider.getSigner();

    provider
      .send("eth_requestAccounts", [])
      .then((accounts) => {
        setAccounts(accounts);
      })
      .catch((e) => console.log(e));
  };

  const initContract = () => {
    
  };

  useEffect(() => {
    if (!window.ethereum) {
      console.log("Install Metamask");
      return;
    }

    connectToWallet();
  }, []);

  const outputAccounts = () => (
    <>
      {accounts.map((account, index) => (
        <h4 key={index}>Current Account: {account}</h4>
      ))}
    </>
  );

  return (
    <div>
      <header>
        <title>Piggy Bank</title>
        <h1>Piggy Bank</h1>
        {accounts ? outputAccounts() : <p>Connecting to Metamask...</p>}
      </header>
      <main>
        <p>Current amount in piggy: {piggyAmount}</p>
      </main>
    </div>
  );
};

export default App;
