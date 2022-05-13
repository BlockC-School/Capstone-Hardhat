import "./App.css";
import React, { useEffect, useState } from "react";
import { getContracts, getWeb3 } from "./utils";
import { Spin } from "antd";
import Container from "./components/Container";
import "antd/dist/antd.css";

function App() {
  const [provider, setProvider] = useState(undefined);
  const [contracts, setContracts] = useState(undefined);
  const [accounts, setAccounts] = useState([]);
  const [selectedToken, setSelectedToken] = useState("DAI");
  const [balance, setBalance] = useState({});

  useEffect(() => {
    const init = async () => {
      const provider = await getWeb3();
      console.log(provider);

      const contracts = await getContracts(provider);
      const accounts = await provider.listAccounts();

      setProvider(provider);
      setContracts(contracts);
      setAccounts(accounts);
    };
    init();
  }, []);

  const isReady = () => {
    return provider && contracts && accounts.length > 0;
  };

  return (
    <div className="App">
      {!isReady() ? (
        <Spin />
      ) : (
        <Container
          provider={provider}
          contracts={contracts}
          accounts={accounts}
          setSelectedToken={setSelectedToken}
          selectedToken={selectedToken}
          balance={balance}
          setBalance={setBalance}
          setAccounts={setAccounts}
        ></Container>
      )}
    </div>
  );
}

export default App;
