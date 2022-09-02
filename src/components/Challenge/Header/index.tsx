import { FiSearch } from 'react-icons/fi'
import { FormEvent, useState } from 'react'

import styles from './styles.module.scss'
import { RiNotification3Line } from 'react-icons/ri'

import logoImg from '../../../assets/logo.png'
import { FaBars } from 'react-icons/fa'
import { MenuToggle } from '../MenuToggle'

export const Header = () => {
  const [isLogged, setIsLogged] = useState(false);

  function handleLogin(event: FormEvent){
    event.preventDefault();

    setIsLogged(() => !isLogged)
  }
  
  return(
    <header className={styles.header}>
        <div className={styles.contentHeader}> 
          <div className={styles.headerLeftBox}>
            <MenuToggle />
            <img src={logoImg} alt="logo Union Group" />
            <div className={styles.searchBox}>
              <input placeholder='Search...' type="text" />
              <button type='submit' aria-label='Search'>
                <FiSearch className={styles.headerSearchIcon} />
              </button>
            </div>         
          </div>   
          {isLogged ? (
            <div className={styles.headerRightBox}>
              <a className={styles.createPostButton} href="#">Create Post</a>
              <a className={styles.mobileSearch} href="#"><FiSearch className={styles.headerSearchIcon} /></a>
              <a className={styles.notificationIcon} href="#"><RiNotification3Line /></a>
              
              <img src="https://github.com/Dev-JoseRonaldo.png" alt="Foto de perfil de José Ronaldo" />
            </div>
          ): (
            <div className={styles.headerRightBox}>   
              <button onClick={handleLogin} type='submit'>Log in</button>  
              <a className={styles.mobileSearch} href="#"><FiSearch className={styles.headerSearchIcon} /></a>      
              <a className={styles.createAccount} href="#">Create account</a>
            </div>
          )}  
        </div>
      </header>
  )
}