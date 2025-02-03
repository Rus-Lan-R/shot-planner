import ClientLayout from "@/lib/ClientLayout";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ClientLayout>
          <Main />
          <NextScript />
        </ClientLayout>
      </body>
    </Html>
  );
}
