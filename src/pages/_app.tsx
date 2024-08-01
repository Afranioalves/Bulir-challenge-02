import "@/styles/globals.css";
import "@/styles/boxicons-2.1.4/css/boxicons.css"
import "@/styles/aos-css/aos.css";
import 'swiper/css';
import 'swiper/css/pagination';
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
