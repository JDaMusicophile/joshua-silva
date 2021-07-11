import '../styles/globals.scss'
import { ChakraProvider } from "@chakra-ui/react"
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { AnimateSharedLayout } from 'framer-motion'

function MyApp({ Component, pageProps }) {
  return (

    <AnimateSharedLayout type="crossfade">
      <ChakraProvider>
        <Header/>
          <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </AnimateSharedLayout>
    
  )
}

export default MyApp
