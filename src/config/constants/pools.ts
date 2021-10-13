import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.zbdo,
    earningToken: tokens.wbnb,
    contractAddress: {
      97: '0x54d40618Cb89854E3eA237D4E7a6b1E780b92f8B',
      56: '0x3923E0d738fd9Ab57b429a4b3c63a2f7a0823596',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
  },
]

export default pools
