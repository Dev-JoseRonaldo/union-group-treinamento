import { HashtagCard } from '../HashtagCard'
import styles from './styles.module.scss'

export const RightSidebar = () => {
  return (
    <aside className={styles.container}>
      <HashtagCard />
    </aside>
  )
}
