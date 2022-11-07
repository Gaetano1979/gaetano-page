import '../styles/index.css';
import '../styles/globals.css';
import {AppPropsWithLayout} from "./profilo";
import {createContext} from "react";

const provaContext: {nome: string, cognome: string} = {
  nome: 'Gaetano',
  cognome: 'Sabino'
}

export const TestContext = createContext(provaContext)

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return <Component {...pageProps} />
}
