'use client'


// TanStack Query 大大简化了前端应用程序中异步数据管理的复杂性，
// 通过自动的缓存和更新机制，让开发者可以专注于业务逻辑，而不是繁琐的数据请求和状态管理。
// 它可以有效地减少网络请求的次数，提高应用程序的性能和响应速度，
// 同时提供了丰富的功能来处理数据获取、更新、错误处理和加载状态显示等方面的问题，为构建高效、稳定的前端应用程序提供了强大的支持。


import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { type ReactNode, useState } from 'react'
import { type State, WagmiProvider } from 'wagmi'

import { getConfig } from '@/wagmi'

export function Providers(props: {
  children: ReactNode
  initialState?: State
}) {
  const [config] = useState(() => getConfig())
  const [queryClient] = useState(() => new QueryClient())

  return (
    <WagmiProvider config={config} initialState={props.initialState}>
      <QueryClientProvider client={queryClient}>
        {props.children}
      </QueryClientProvider>
    </WagmiProvider>
  )
}
