"use client";

import React from "react";
import { useAccount, useConnect, useDisconnect, Connector } from "wagmi";

const WalletConnect: React.FC = () => {
  const { isConnected } = useAccount();
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect() as any;
  const { disconnect } = useDisconnect();

  const renderConnected = () => (
    <>
      <p>Wallet is connected</p>
      <button onClick={() => disconnect()} type="button" className="button">
        Disconnect Wallet
      </button>
    </>
  );

  const renderNotConnected = () => (
    <>
      <p>Wallet is not connected</p>
      {connectors.map((connector: Connector) => (
        <button
          key={connector.id}
          className="button"
          onClick={() => connect({ connector })}
          disabled={isLoading && pendingConnector?.id === connector.id}
          type="button"
        >
          {connector.name}
        </button>
      ))}
      {error && <p className="error">Error: {error.message}</p>}
    </>
  );

  return (
    <div>
      <h2>Wallet Connection 钱包链接</h2>
      {isConnected ? renderConnected() : renderNotConnected()}
    </div>
  );
};

export default WalletConnect;
