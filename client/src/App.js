import { useEffect, useState } from "react";
import MainArea from "./components/MainArea";
import NavBar from "./components/NavBar";

const App = () => {
  const [accounts, setAccounts] = useState([]);

  return (
    <div>
      <header>
        <title>Piggy Bank</title>
        <h1>Piggy Bank</h1>
      </header>
      <NavBar accounts={accounts} setAccounts={setAccounts} />
      <MainArea accounts={accounts} setAccounts={setAccounts} />
    </div>
  );
};

export default App;
