"use client";

import React from "react";
import { useWriteContract } from "wagmi";
import { wagmiContractConfig } from "../contract"; // 假设合约配置在 `../contract` 文件中

const TransferForm: React.FC = () => {
  const { data, isLoading, isSuccess, write, error } = useWriteContract() as any;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const amount = formData.get("amount") as string;
    const address = formData.get("address") as string;

    if (write) {
      write({
        ...wagmiContractConfig,
        functionName: "transfer",
        args: [address, amount],
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Transfer Tokens 写入合约 -- 发送交易</h4>
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
        {isLoading ? "Transferring..." : "Transfer Tokens"}
      </button>

      {isSuccess && <p style={{ color: "green" }}>Transfer successful! Transaction Hash: {data?.hash}</p>}
      {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
    </form>
  );
};

export default TransferForm;
