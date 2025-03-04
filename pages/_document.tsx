import StyledJsxRegistry from "@/lib/StyledJsxRegistry";

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <StyledJsxRegistry>
          <Main />
          <NextScript />
        </StyledJsxRegistry>
      </body>
    </Html>
  );
}
