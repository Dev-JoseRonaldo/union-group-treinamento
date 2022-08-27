import { FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import styles from './styles.module.scss'

import logoImg from '../../../assets/logo.png'

export const Header = () => {
  return(
    <header className={styles.header}>
        <div className={styles.contentHeader}> 
          <div className={styles.headerLeftBox}>
            <img src={logoImg} alt="logo Union Group" />
            <div className={styles.searchBox}>
              <input placeholder='Search...' type="text" />
              <button type='submit' aria-label='Search'>
                <FiSearch className={styles.headerSearchIcon} />
              </button>
            </div>         
          </div>     
          <div className={styles.headerRightBox}>
            <button>Log in</button>
            <a href="#">Create account</a>
          </div>
        </div>
      </header>
  )
}