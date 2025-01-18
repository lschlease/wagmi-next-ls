"use client";

import React from "react";
import { useReadContract } from "wagmi";
import { wagmiContractConfig } from "../contract";

const ContractRead: React.FC = () => {
  const { data: name, isLoading, isError, error } = useReadContract({
    ...wagmiContractConfig,
    functionName: "name",
  });

  return (
    <div>
      <h4>Contract Read 读取合约</h4>
      {isLoading ? (
        <p>Loading contract data...</p>
      ) : isError ? (
        <p style={{ color: "red" }}>Error: {error?.message}</p>
      ) : (
        <p>Contract Name: {name || "Unknown"}</p>
      )}
    </div>
  );
};

export default ContractRead;
