import '../styles/index.css';
import '../styles/globals.css';
import {AppPropsWithLayout} from "./profilo";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return <Component {...pageProps} />
}
