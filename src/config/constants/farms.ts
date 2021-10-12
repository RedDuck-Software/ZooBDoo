import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 441,
    lpSymbol: 'ZBDO-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xAD52fEbea684EDB7325B3A97Dcaf09593De765f6',
    },
    token: tokens.zbdo,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 0,
    lpSymbol: 'BURGER-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0xd937FB9E6e47F3805981453BFB277a49FFfE04D7',
    },
    token: tokens.burger,
    quoteToken: tokens.wbnb,
  },
]

export default farms
