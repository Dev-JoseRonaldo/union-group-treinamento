import { useState } from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import { LeftSidebar } from '../LeftSidebar'

import styles from './styles.module.scss'

export const MenuToggle = () => {
  const [menuVisible, setMenuVisible] = useState(false)
  const [scrollBar, setScrollBar] = useState(false)

  function handleIsMenuMobile() {
    setMenuVisible(()=> !menuVisible)
    setScrollBar(() => !scrollBar)
    console.log(scrollBar)
  }

  {scrollBar ? document.documentElement.style.overflow = 'hidden' : document.documentElement.style.overflow = 'auto'}

  return (  
    <div>
      <div className={styles.menuToggle} onClick={handleIsMenuMobile}>
        <div className={styles.menuToggle__Item}></div>
        <div className={styles.menuToggle__Item}></div>
        <div className={styles.menuToggle__Item}></div>
      </div>
      {menuVisible && (
        <aside className={styles.menuToggle__Content}>
          <header className={styles.menuToggle__Header}>
            <h3>DEV Community 👩‍💻👨‍💻</h3>
            <IoCloseSharp 
              className={styles.menuToggle__closeIcon} 
              size={36}
              onClick={handleIsMenuMobile}
            />
          </header>
          <LeftSidebar />        
        </aside>
      )}
    </div>
  )
}
