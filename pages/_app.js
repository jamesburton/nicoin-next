import '../styles/globals.css'
// import Head from "next/head";
import DefaultLayout from '../layouts/DefaultLayout';
// import CssBaseline from '@mui/material/CssBaseline';
import { Provider as Web3ContextProvider } from 'contexts/web3Context';
import { useCallback, useEffect, useState, useRef } from 'react';
import Web3 from 'web3';
// import NiCoinConfig from 'config/NiCoin-trimmed.json';
import NiCoinConfig from 'config/NiCoin-trimmed.js';
import { NiCoinContractAddresses } from 'config';

const SelectWeb3Network = ({set, network}) => {
  return <select onChange={(e) => set(e.target.value)} value={network||''}>
    <option value="" key={0}>[None]</option>
    <option key="mainnet">mainnet</option>
    <option key="rinkeby">rinkeby</option>
    <option key="kovan">kovan</option>
    <option key="ropsten">ropsten</option>
    <option key="goerli">goerli</option>
    <option key="sepolia">sepolia</option>
    <option key="aurora">aurora</option>
    <option key="aurora-test">aurora-test</option>
    <option key="near">near</option>
    <option key="near-test">neartest</option>
  </select>;
};

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />
  const getLayout = Component.getLayout || DefaultLayout;
  const web3Ref = useRef();
  const [web3Ready, setWeb3Ready] = useState(false);
  const [network, setNetwork] = useState();
  const [address, setAddress] = useState();
  const [balance, setBalance] = useState();
  const [contract, setContract] = useState();
  const [niCoinBalance,setNiCoinBalance] = useState();

  const setAndStoreAddress = useCallback((address) => {
    const key = `${network}#address`;
    if(!address?.length)
      localStorage.removeItem(key);
    else
      localStorage.setItem(key, address);
    setAddress(address);
    // alert(`Saved to ${key} (network=${network})`);
    const reloaded = localStorage.getItem(key);
    console.info(`Reloaded ${address} => ${reloaded}`);
    // alert(address);
    console.log(`Saved ${key} = ${address} (type=${typeof address}, network=${network})`);
  },[network]);

  // const setNetworkAndUpdate = useCallback(network => {
  //   setNetwork(network);
  //   setAddress(localStorage.getItem(`${network}#address`));
  // },[setNetwork])

  useEffect(() => {
    web3Ref.current = null;
    setAddress();
    setBalance();
    setContract();
    setNiCoinBalance();
    setWeb3Ready(false);
    if(network?.length) {
      var web3;
      switch(network) {
        case 'mainnet':
          web3 = new Web3('https://mainnet.infura.io/v3/8b1c256e54f04ebf8a4c0b38458c6d71');
          break;
        case 'rinkeby':
          web3 = new Web3('https://rinkeby.infura.io/v3/8b1c256e54f04ebf8a4c0b38458c6d71');
          break;
        case 'kovan':
          web3 = new Web3('https://kovan.infura.io/v3/8b1c256e54f04ebf8a4c0b38458c6d71');
          break;
        case 'ropsten':
          web3 = new Web3('https://ropsten.infura.io/v3/8b1c256e54f04ebf8a4c0b38458c6d71');
          break;
        case 'goerli':
          web3 = new Web3('https://goerli.infura.io/v3/8b1c256e54f04ebf8a4c0b38458c6d71');
          break;
        case 'sepolia':
          web3 = new Web3('https://sepolia.infura.io/v3/8b1c256e54f04ebf8a4c0b38458c6d71');
          break;
        case 'aurora':
          web3 = new Web3('https://aurora-mainnet.infura.io/v3/8b1c256e54f04ebf8a4c0b38458c6d71');
          break;
        case 'aurora-test':
          web3 = new Web3('https://aurora-testnet.infura.io/v3/8b1c256e54f04ebf8a4c0b38458c6d71');
          break;
        case 'near':
          web3 = new Web3('https://near-mainnet.infura.io/v3/8b1c256e54f04ebf8a4c0b38458c6d71');
          break;
        case 'near-test':
          web3 = new Web3('https://near-testnet.infura.io/v3/8b1c256e54f04ebf8a4c0b38458c6d71');
          break;
        default:
          throw new Error(`Unknown web3 network: ${network}`);
      }
      web3Ref.current = web3;
      setWeb3Ready(true);
      var key = `${network}#address`;
      //alert(key);
      var address = localStorage.getItem(key);
      console.log(`Loading address for ${network} with key ${key}: ${address ?? typeof address}`);
      //alert(address);
      if(address?.length) {
        setAddress(address);
      }
      var contract = NiCoinContractAddresses[network];
      if(contract?.length) {
        setContract(contract);
      }
    }
  },[network]);

  useEffect(() => {
    if(address?.length) {
      web3Ref.current.eth.getBalance(address).then(amount => setBalance(amount));
    }
  },[address]);

  useEffect(() => {
    if(address?.length && contract?.length) {
      var contractInstance = new web3Ref.current.eth.Contract(NiCoinConfig.abi, contract);
      contractInstance.methods.balanceOf(address).call().then(balance => {
        console.log(`NiCoin contractInstance.methods.balanceOf(${address}) on ${network} = ${balance}`);
        setNiCoinBalance(balance);
      }).catch(err => {
        console.error('contractInstance.methods.balanceOf call failed:', err);
      });
    }
  },[address,contract]);

  const web3Values = {
    example: 'Web1-123-Example',
    network,
    web3Ref,
    web3Ready,
    balance,
    address,
    setAddress: setAndStoreAddress,
    contract,
    niCoinBalance,
  };

  return <>
    <Web3ContextProvider value={web3Values}>
      <SelectWeb3Network set={setNetwork} /*set={setNetworkAndUpdate}*/ network={network} />
      {/* <div><strong>Web3 Ready?: </strong>{(!!web3Ready).toString()}</div> */}
      {getLayout(<Component {...pageProps} />)}
    </Web3ContextProvider>
    </>;
}

export default MyApp
