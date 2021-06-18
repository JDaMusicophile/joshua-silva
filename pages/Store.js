import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {background, Code, flexbox, Image, Text, Button, Stat, StatNumber, Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,} from '@chakra-ui/react'
import { PhoneIcon, CloseButton } from '@chakra-ui/icons'
import products from '../products.json'
import { fromImageTOUrl } from '../Components/urls'
import NextLink from 'next/link'

export default function Home() {
   return (
    <div className={styles.container} >
     <background/>
      <Head>
        <title>Josh Silva | Photography</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/Josh_Logo_White.png" />
        <script data-ad-client="ca-pub-1604087287433448" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Head>
      
      
      <main className={styles.main}>    
        <h1 className={styles.title}>
          <a href="https://www.instagram.com/j_daphotophile/" fontWeight="extrabold">Store</a>
        </h1>
        
        <Text className={styles.description} fontWeight='thin'>
          Welcome to my Photography Store
        </Text>
        {products.map(product => (
          <div key={product.name} className={styles.product}>
            <div className={styles.product_Row}>
            <a className={styles.card}>
                <div className={styles.product_ColImg}>
                    <img src={fromImageTOUrl(product.image)}/>
                </div>
                <div className={styles.product_Col}>
                    {product.name}
                    <Stat>
                    <StatNumber>${product.price}</StatNumber>
                    </Stat>
                    
                </div>
              </a>
            </div>
          </div>
        ))}
        <div>
          <Text>Want to go back to my gallery? Click below to head over there</Text>
          <NextLink href="/photography">
            <Button>Gallery</Button> 
          </NextLink>
        </div>     
      </main>      
    </div>
  )
}