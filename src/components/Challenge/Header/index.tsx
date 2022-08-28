import { FiSearch } from 'react-icons/fi'
import { FormEvent, useState } from 'react'

import styles from './styles.module.scss'
import { RiNotification3Line } from 'react-icons/ri'

import logoImg from '../../../assets/logo.png'

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
              <a href="#">Create Post</a>
              <RiNotification3Line size={26}/>
              <img src="https://github.com/Dev-JoseRonaldo.png" alt="Foto de perfil de José Ronaldo" />
            </div>
          ): (
            <div className={styles.headerRightBox}>   
              <button onClick={handleLogin} type='submit'>Log in</button>        
              <a href="#">Create account</a>
            </div>
          )}  
        </div>
      </header>
  )
}