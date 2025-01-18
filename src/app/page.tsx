import { AccountInfo, ContractRead, MintTokenForm, TransferForm, WalletConnect } from "./components";

const App = () => {
  return (
    <div className="app-container">
      <AccountInfo />
      <hr />
      <WalletConnect />
      <hr />
      <section className="section">
        <h2>Contract Interaction 合约交互</h2>
        <article>
          <ContractRead/>
        </article>
        <article>
          <h3>Mint Tokens 铸造代币</h3>
          <MintTokenForm />
        </article>
        <article>
          <h3>Transfer Tokens 转移代币</h3>
          <TransferForm />
        </article>
      </section>
    </div>
  );
};

export default App;
