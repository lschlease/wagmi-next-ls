'use client'

import {
  useAccount,
  useConnect,
  useDisconnect,
  useReadContract,  // 读取合同
  useWriteContract  // 写入合同
} from 'wagmi'


import { wagmiContractConfig } from './contract'


function App() {
  const account = useAccount()
  const { connectors, connect, status, error } = useConnect()
  const { disconnect } = useDisconnect()

  const { data: readContractSayHelloWorld } = useReadContract({
    ...wagmiContractConfig,
    functionName: 'name',
  })

  const { data: hash, isPending, writeContract } = useWriteContract()

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const amount = formData.get('amount') as any
    const address = formData.get('address') as any

    writeContract({
      ...wagmiContractConfig,
      functionName: 'mint',
      args: [address, amount],
    })
  }


  return (
    <>
      <div>
        <h2>Account</h2>

        <div>
          status: {account.status}
          <br />
          addresses: {JSON.stringify(account.addresses)}
          <br />
          chainId: {account.chainId}
        </div>
      </div>

      <div>
        <h2>Connect</h2>
        {account.status === 'connected' ? null : connectors.map((connector) => (
          <button
            key={connector.uid}
            onClick={() => connect({ connector })}
            type="button"
          >
            {connector.name}
          </button>
        ))
        }

        {account.status === 'connected' && (
          <button type="button" onClick={() => disconnect()}>
            与钱包断开连接
          </button>
        )}
        <div>{status === 'idle' ? '请链接钱包matemask钱包' : JSON.stringify(account.addresses)}</div>
        <div>{error?.message}</div>
      </div>


      <div>
        <h2>与合约交互</h2>
        <h5>读取合约信息 </h5>
        <div>代币 : {readContractSayHelloWorld}</div>

        <h5>铸造代币到地址//</h5>

        <form onSubmit={submit}>
          amount:
          <br />
          <input name="amount" placeholder="amount" required style={{ width: 200, height: 30, marginRight: 8 }} />
          <br />
          to:
          <br />
          <input name="address" placeholder="address" required style={{ width: 200, height: 30, marginRight: 8 }} />
          <br />
          <br />
          <button type="submit" disabled={isPending}>
            {isPending ? '确认中...' : '铸造代币'} </button>
        </form>

      
        <h5>发送交易 test...</h5>

      </div>
    </>
  )
}

export default App
