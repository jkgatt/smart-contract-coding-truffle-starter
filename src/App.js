import { ethers } from "ethers";
import { useEffect, useState } from "react";

const App = () =>  {

  let provider;
  let signer;

  const address = "";
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    if(!window.ethereum){
      console.log("Install Metamask");
      return;
    }

    provider = new ethers.providers.Web3Provider(window.ethereum);
    signer = provider.getSigner();

    provider.send("eth_requestAccounts", [])
    .then((accounts) => {
      setAccounts(accounts);
    })
    .catch((e) => console.log(e))
  }, []);

  const outputAccounts = () => (
    <ul>
      {accounts.map((account, index) => (<li key={index}>{account}</li>))}
    </ul>
  );

  return (
    <div>
      <header>
        <title>Testing DAPP</title>
        {accounts ?
        outputAccounts() :
        <p>Connecting to Metamask...</p>
        }
      </header>

    </div>
  );
}

export default App;
