export enum ChainId {
  HELA=8668,
  HALE=666888
}

export const SUPPORTED_CHAINS = [
  ChainId.HELA,
  ChainId.HALE,
] as const
export type SupportedChainsType = typeof SUPPORTED_CHAINS[number]

export enum NativeCurrencyName {
  // Strings match input for CLI
  ETHER = 'ETH',
  MATIC = 'MATIC',
  CELO = 'CELO',
  GNOSIS = 'XDAI',
  MOONBEAM = 'GLMR',
  BNB = 'BNB',
  AVAX = 'AVAX',
  HELA = 'HLUSD',
}
