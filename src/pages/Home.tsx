import { Header } from "../components/Header"
import styles from '../styles/home.module.scss'

export const Home = () => {
  return (
    <>
      <Header />
      <main className={styles.container}>
        Home
      </main>
    </>
  )
}
