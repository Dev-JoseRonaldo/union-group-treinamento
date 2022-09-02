import { useState } from 'react'
import { LeftSidebar } from '../LeftSidebar'
import { Post } from '../Post'

import styles from './styles.module.scss'


export const MenuToggle = () => {
  const [menuVisible, setMenuVisible] = useState(false)

  function handleIsMenuMobile() {
    console.log('clickou')
    setMenuVisible(()=> !menuVisible)
    console.log(menuVisible)
  }
  return (  
    <div>
      <div className={styles.menuToggle} onClick={handleIsMenuMobile}>
        <div className={styles.menuToggle__Item}></div>
        <div className={styles.menuToggle__Item}></div>
        <div className={styles.menuToggle__Item}></div>
      </div>
      {menuVisible && <LeftSidebar />}
    </div>
  )
}
