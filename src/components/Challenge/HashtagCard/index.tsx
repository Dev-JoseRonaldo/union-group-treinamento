import styles from './styles.module.scss'

export const HashtagCard = () => {
  return (
      <div className={styles.container}>
        <h3>#discuss</h3>
        <a href='#' className={styles.container__hashtagPosts}>
          What are the best tools/concepts to shoot yourself in the foot again and again?
          <span className={styles.container__comments}>22 comments</span>
        </a>     

        <a href='#' className={styles.container__hashtagPosts}>
          Meme Monday!!
          <span className={styles.container__comments}>20 comments</span>
        </a>     

        <a href='#' className={styles.container__hashtagPosts}>
          What is good DX for you?
          <span className={styles.container__comments}>4 comments</span>
        </a>  

        <a href='#' className={styles.container__hashtagPosts}>
          Discussion: Is .NET releasing versions too fast in recent years?
          <span className={styles.container__comments}>13 comments</span>
        </a>  

        <a href='#' className={styles.container__hashtagPosts}>
          7 Most Important Qualities Of A Great Programmer!
          <span className={styles.container__status}>New</span>
        </a>
      </div>
  )
}
