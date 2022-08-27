import logoImg from '../../assets/logo.png'

import { Link } from 'react-router-dom'

import styles from './styles.module.scss'

export const Header = () => {
  return(
    <header className={styles.header}>
        <div className={styles.contentHeader}>      
          <img src={logoImg} alt="logo Union Group" />    
          <nav>
            <ul>
              <li><Link to="/reactjs">React.js</Link></li>
              <li><Link to="/typescript">Typescript</Link></li>
              <li><Link to="/desafio">Desafio</Link></li>
            </ul>
          </nav>
        </div>
      </header>
  )
}