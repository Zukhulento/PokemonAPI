import { Html, Head, Main, NextScript } from "next/document";
import useThemeStore from "@/stores/themeStore";

export default function Document() {
  const { theme } = useThemeStore();
  return (
    <Html lang="en" data-theme={theme}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500&family=Rubik:wght@300;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
