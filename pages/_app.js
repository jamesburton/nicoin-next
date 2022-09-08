import '../styles/globals.css'
import Head from "next/head";
import DefaultLayout from '../layouts/DefaultLayout';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider as Web3ContextProvider } from 'contexts/web3Context';
import { useCallback, useEffect, useState, useRef } from 'react';
import Web3 from 'web3';

const SelectWeb3Network = ({set, network}) => {
  return <select onChange={(e) => set(e.target.value)} value={network||''}>
    <option value="" key={0}>[None]</option>
    <option key="rinkeby">rinkeby</option>
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
  const setAndStoreAddress = useCallback((address) => {
    const key = `${network}#address`;
    if(address?.length)
      localStorage.removeItem(key);
    else
      localStorage.setItem(key, address);
    setAddress(address);
    // alert(address);
  },[network]);

  useEffect(() => {
    web3Ref.current = null;
    setAddress();
    setBalance();
    setWeb3Ready(false);
    if(network?.length) {
      var web3;
      switch(network) {
        case 'rinkeby':
          web3 = new Web3('https://rinkeby.infura.io/v3/8b1c256e54f04ebf8a4c0b38458c6d71');
          break;
        default:
          throw new Error(`Unknown web3 network: ${network}`);
      }
      web3Ref.current = web3;
      setWeb3Ready(true);
      var address = localStorage.getItem(`address#${network}`);
      if(address?.length) {
        setAddress(address);
      }
    }
  },[network]);

  useEffect(() => {
    if(address?.length) {
      web3Ref.current.eth.getBalance(address).then(amount => setBalance(amount));
    }
  },[address]);

  const web3Values = {
    example: 'Web1-123-Example',
    network,
    web3Ref,
    web3Ready,
    balance,
    address,
    setAddress: setAndStoreAddress,
  };

  return <>
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <CssBaseline />
    </Head>
    <Web3ContextProvider value={web3Values}>
      <SelectWeb3Network set={setNetwork} network={network} />
      {/* <div><strong>Web3 Ready?: </strong>{(!!web3Ready).toString()}</div> */}
      {getLayout(<Component {...pageProps} />)}
    </Web3ContextProvider>
    </>;
}

export default MyApp
