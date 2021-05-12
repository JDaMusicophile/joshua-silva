import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import Layout from '../Components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
