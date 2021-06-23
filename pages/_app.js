import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { AuthProvider } from '../Components/Context/AuthContext'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ChakraProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </AuthProvider>
  )
}

export default MyApp
