export const HORIZON_URLS = {
  TESTNET: 'https://horizon-testnet.stellar.org',
  PUBLIC: 'https://horizon.stellar.org',
};

export interface StellarBalance {
  balance: string;
  asset_type: string;
  asset_code?: string;
  asset_issuer?: string;
}

export async function fetchAccountBalances(address: string, network: string = 'Testnet'): Promise<StellarBalance[]> {
  const isTestnet = network.toLowerCase() === 'testnet';
  const url = isTestnet ? HORIZON_URLS.TESTNET : HORIZON_URLS.PUBLIC;

  try {
    const response = await fetch(`${url}/accounts/${address}`);
    if (!response.ok) {
      if (response.status === 404) {
        // Account not found (probably unfunded)
        return [];
      }
      throw new Error(`Failed to fetch account info: ${response.statusText}`);
    }

    const data = await response.json();
    return data.balances || [];
  } catch (error) {
    console.error('Error fetching Stellar account:', error);
    throw error;
  }
}
