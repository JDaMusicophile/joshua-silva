import styles from '../styles/Home.module.scss'
import {Text} from '@chakra-ui/react'

const Footer = () => {
    return (
    <footer className={styles.footer}
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
        
    >
        <stack>
            <a href="https://vercel.com">
            <div className={styles.vercel} >
                Powered by &nbsp; 
                <span role="img" aria-label="Vercel Logo">▲</span>
                Vercel
            </div>
            </a>
        <div>
            <Text padding="4">
            © Joshua Silva | 2021
            </Text>
        </div>
        </stack>
        
    </footer>
    )
}
export default Footer;