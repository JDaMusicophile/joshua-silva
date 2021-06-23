import Head from 'next/head'
import { useContext, useState } from 'react'
import AuthContext from '../Components/Context/AuthContext'
import {FormControl, FormLabel, Input, FormHelperText} from '@chakra-ui/react'
import styles from '../styles/Login.module.css'

export default function Login() {

    const [email, setEmail] = useState("")
    const { loginUser } = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        loginUser(email)
    }

    return(
        <div className={styles.container}>
            <Head>
                <title>Login</title>
                <meta name="description" content="Login here to make your purchase"/>
            </Head>

            <main className={styles.main}>  
            <h1 className={styles.title}>Login</h1>
            <br/>
            <form onSubmit={handleSubmit}>
            <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" size="lg" onChange={(event) => setEmail(event.target.value)}/>
                <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <br/>
                <button className={styles.button} type="Submit">Login</button>
            </form>
            </main>
        </div>
    )
}