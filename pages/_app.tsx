import "../styles/globals.css";
import type { AppProps } from "next/app";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Layout from "../components/layout";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#7df9ff",
    },
    secondary: {
      main: "#fff87d",
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
