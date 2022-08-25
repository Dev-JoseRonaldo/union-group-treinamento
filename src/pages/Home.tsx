import { Link } from "react-router-dom"

import styles from '../styles/home.module.scss'

export const Home = () => {
  return (
    <>
      <main className={styles.container}>
        <nav>
          <ul>
            <li><Link to="/reactjs">React.js</Link></li>
            <li><Link to="/typescript">Typescript</Link></li>
            <li><Link to="/sass">Sass</Link></li>
          </ul>
        </nav>
      </main>
    </>
  )
}
