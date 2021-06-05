import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Image from 'react'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      {/* <Image src="Profile.jpg" layout='fill'/> */}
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp
