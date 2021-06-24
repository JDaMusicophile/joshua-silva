import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    
      <ChakraProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    
  )
}

export default MyApp
