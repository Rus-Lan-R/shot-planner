import ClientLayout from "@/lib/ClientLayout";
import type { AppProps } from "next/app";
import "@/assets/styles/fonts.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClientLayout>
      <Component {...pageProps} />
    </ClientLayout>
  );
}
