import { ThemeProvider } from "styled-components";
import Layout from "../components/layout/Layout";
import { GlobalStyles } from "../styles/global";
import "../styles/global";
import {theme} from "../styles/theme"


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </ThemeProvider>
  )
  
}

export default MyApp;
