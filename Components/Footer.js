import styles from '../styles/Home.module.scss'
import Image from 'next/image'

const Footer = () => {
    return (
    <footer className={styles.footer}
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
        
    >
        Powered by{' '}
        <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span> &nbsp;
        © Joshua Silva | 2021
    </footer>
    )
}
export default Footer;