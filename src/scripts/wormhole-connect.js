import { wormholeConnectHosted } from '@wormhole-foundation/wormhole-connect';

addEventListener('DOMContentLoaded', (event) => {
  const container = document.getElementById('wormhole-connect');
  const config = {
    chains: ['Ethereum', 'Solana'],
    rpcs: {
      Ethereum:
        'https://eth-mainnet.g.alchemy.com/v2/BixxSzC92isf7VxF1WWUywL5YQovd9_T',
      Solana:
        'https://mainnet.helius-rpc.com/?api-key=74fe8678-9e5e-4193-9766-1bb1b313d317',
    },
  };

  wormholeConnectHosted(container, {
    config,
  });
});
