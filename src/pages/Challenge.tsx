import { Header } from "../components/Challenge/Header"
import { LeftSidebar } from "../components/Challenge/LeftSidebar"
import { Post } from "../components/Challenge/Post"
import { RightSidebar } from "../components/Challenge/RightSidebar"

import styles from '../styles/challenge.module.scss'

export const Challenge = () => {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <LeftSidebar />
        <section className={styles.container__postBox}>
          <Post />
          <Post />
          <Post />
        </section>
        <RightSidebar />
      </main>
    </>
  )
}
