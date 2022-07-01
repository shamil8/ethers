import { ethers, } from 'ethers';

const filter = {
  address: '0xa6727591613a16689f0d12415d1ba2cf89a4b961',
  // topics: [
  //   // the name of the event, parnetheses containing the data type of each event, no spaces
  //   utils.id('Transfer(address,address,uint256)')
  // ],
};

const moraliKey = 'your_moralis_shit';

async function main() {
  // const provider = new ethers.providers.JsonRpcProvider(`https://speedy-nodes-nyc.moralis.io/${moraliKey}/eth/rinkeby`);
  // const provider = new ethers.providers.JsonRpcProvider(`https://speedy-nodes-nyc.moralis.io/${moraliKey}/bsc/mainnet`);
  const provider = new ethers.providers.WebSocketProvider(`wss://speedy-nodes-nyc.moralis.io/${moraliKey}/bsc/testnet/ws`);
  // const signer = provider.getSigner();

  const lastBlock = await provider.getBlockNumber();

  console.log('provider', provider);
  console.log('lastBlock', lastBlock);

  provider.on(filter, (params) => {
    // do whatever you want here
    // I'm pretty sure this returns a promise, so don't forget to resolve it
    console.log('WebSocketProviderWebSocketProvider', params);
  });
}

main()
  .then(() => console.log('Finished'))
  .catch((e) => console.error('Error in main', e));
