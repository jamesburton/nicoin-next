import { createContext, useContext } from "react";

export const Web3Context = createContext();
export const { Provider } = Web3Context;
export const useWeb3Context = () => useContext(Web3Context);
// export const withWeb3ContextProvider = (Component, web3Properties = {}) => props => <Web3Context.Provider value={web3Properties}>
//     <Component {...props} />
// </Web3Context.Provider>;
