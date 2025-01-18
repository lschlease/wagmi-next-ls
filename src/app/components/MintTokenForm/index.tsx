"use client";

import React from "react";
import { useWriteContract } from "wagmi";
import { wagmiContractConfig } from "../contract"; // 假设合约配置在 `../contract` 文件中

const MintTokenForm: React.FC = () => {
  const { data, isLoading, isSuccess, write, error } = useWriteContract() as any;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const amount = formData.get("amount") as string;
    const address = formData.get("address") as string;

    if (write) {
      write({
        ...wagmiContractConfig,
        functionName: "mint",
        args: [address, amount],
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Mint Tokens 写入合约 - 铸造代币</h4>
      <label>
        Amount:
        <input
          name="amount"
          type="text"
          placeholder="Enter token amount"
          required
          style={{ width: "300px", marginBottom: "10px", display: "block" }}
        />
      </label>
      <label>
        To Address:
        <input
          name="address"
          type="text"
          placeholder="Enter recipient address"
          required
          style={{ width: "300px", marginBottom: "10px", display: "block" }}
        />
      </label>
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Minting..." : "Mint Tokens"}
      </button>

      {isSuccess && <p style={{ color: "green" }}>Tokens minted successfully! Transaction Hash: {data?.hash}</p>}
      {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
    </form>
  );
};

export default MintTokenForm;
