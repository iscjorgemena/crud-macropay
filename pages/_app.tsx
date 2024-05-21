import "@/styles/globals.css";
import 'sweetalert2/src/sweetalert2.scss'
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
