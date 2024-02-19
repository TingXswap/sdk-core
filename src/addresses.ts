import { ChainId, SUPPORTED_CHAINS, SupportedChainsType } from './chains'

type AddressMap = { [chainId: number]: string }

type ChainAddresses = {
  v3CoreFactoryAddress: string
  multicallAddress: string
  quoterAddress: string
  v3MigratorAddress?: string
  nonfungiblePositionManagerAddress?: string
  tickLensAddress?: string
  swapRouter02Address?: string
  swapRouter03Address?: string
  v1MixedRouteQuoterAddress?: string
}

// HELA TESTNET v3 addresses
const HALE_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x4892d7CF6869a0a653da89D5e101f0Ee153Aa16C',
  multicallAddress: '0x813aAD393EA7637af4b1aB5b5F757D32ccA4723B',
  quoterAddress: '0x02eD997E4dD19f6CDaDf733f618F703d8F7412b8',
  nonfungiblePositionManagerAddress: '0x8BD267bA173EA6e57319863F3fCd8510a259B15B',
  tickLensAddress: '0x95306378eF83b05Cc5BD2DE5d3c39d874eBF4fE4',
  swapRouter03Address: '0xbE813B23145E5940E0938EC44aa86D09149e722F'
}

// HELA MAINNET v3 addresses
const HELA_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x4892d7CF6869a0a653da89D5e101f0Ee153Aa16C',
  multicallAddress: '0x813aAD393EA7637af4b1aB5b5F757D32ccA4723B',
  quoterAddress: '0x02eD997E4dD19f6CDaDf733f618F703d8F7412b8',
  nonfungiblePositionManagerAddress: '0x8BD267bA173EA6e57319863F3fCd8510a259B15B',
  tickLensAddress: '0x95306378eF83b05Cc5BD2DE5d3c39d874eBF4fE4',
  swapRouter03Address: '0xbE813B23145E5940E0938EC44aa86D09149e722F'
}

export const CHAIN_TO_ADDRESSES_MAP: Record<SupportedChainsType, ChainAddresses> = {
  [ChainId.HELA]: HELA_ADDRESSES,
  [ChainId.HALE]: HALE_ADDRESSES
}

/* V3 Contract Addresses */
export const V3_CORE_FACTORY_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].v3CoreFactoryAddress
    return memo
  }, {})
}

export const MULTICALL_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].multicallAddress
    return memo
  }, {})
}

export const QUOTER_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].quoterAddress
    return memo
  }, {})
}

export const NONFUNGIBLE_POSITION_MANAGER_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const nonfungiblePositionManagerAddress = CHAIN_TO_ADDRESSES_MAP[chainId].nonfungiblePositionManagerAddress
    if (nonfungiblePositionManagerAddress) {
      memo[chainId] = nonfungiblePositionManagerAddress
    }
    return memo
  }, {})
}

export const TICK_LENS_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const tickLensAddress = CHAIN_TO_ADDRESSES_MAP[chainId].tickLensAddress
    if (tickLensAddress) {
      memo[chainId] = tickLensAddress
    }
    return memo
  }, {})
}

export const SWAP_ROUTER_03_ADDRESSES = (chainId: number) => {
  if (chainId in SUPPORTED_CHAINS) {
    const id = chainId as SupportedChainsType
    return CHAIN_TO_ADDRESSES_MAP[id].swapRouter02Address ?? '0xbE813B23145E5940E0938EC44aa86D09149e722F'
  }
  return ''
}
