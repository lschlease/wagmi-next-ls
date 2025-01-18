"use client";

import React from "react";
import { useAccount } from "wagmi";

import "./index.css";

const AccountInfo: React.FC = () => {
  const { status, address, isConnected, connector } = useAccount();

  const truncateAddress = (addr: string) =>
    `${addr.slice(0, 6)}...${addr.slice(-4)}`;

  return (
    <div className="account-info">
      <h2>Account Information 账户信息</h2>
      <div>
        <p>Status: {status}</p>
        <p>
          Connected:{" "}
          <span
            style={{
              color: isConnected ? "green" : "red",
              fontWeight: "bold",
            }}
          >
            {isConnected ? "Yes" : "No"}
          </span>
        </p>
        {isConnected && (
          <>
            <p>
              Address: {truncateAddress(address!)}{" "}
              <button
                onClick={() => navigator.clipboard.writeText(address!)}
                style={{
                  marginLeft: "8px",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  padding: "4px 8px",
                  cursor: "pointer",
                  borderRadius: "4px",
                }}
              >
                Copy
              </button>
            </p>
            <p>Connector: {connector?.name}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default AccountInfo;
