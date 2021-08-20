import '../styles/globals.scss'
import { ChakraProvider } from "@chakra-ui/react"
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { AnimatePresence } from 'framer-motion'
import theme from '../Components/theme'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import * as ga from '../lib/ga'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <AnimatePresence>
      <ChakraProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </AnimatePresence>
  )
}



export default MyApp
