import styles from './styles.module.scss'

import { FcLike, FcLikePlaceholder } from 'react-icons/fc'
import { FaRegComment, FaRegBookmark, FaBookmark } from 'react-icons/fa'
import { MouseEvent, useState } from 'react';

export const Post = () => {
  const [isLiked, setIsLiked] = useState(true);
  const [isSaved, setIsSaved] = useState(true);

  function handleIsLiked(e: MouseEvent) {
    e.preventDefault();

    setIsLiked(()=> !isLiked)
  }

  function handleIsSaved(e: MouseEvent) {
    e.preventDefault();

    setIsSaved(()=> !isSaved)
  }

  return (
    <div className={styles.container}>
      <img src="https://github.com/Dev-JoseRonaldo.png" alt="" />
      <article>
        <strong>José Ronaldo</strong>
        <time>Aug 28 (49 mins ago)</time>

        <div>
          <p>How React and NextJS can power your next web project</p>
          <div className={styles.hashtagBox}>
            <a href="#">#github</a>
            <a href="#">#bash</a>
            <a href="#">#programming</a>
          </div>
        </div>
        <div className={styles.reactionsContainer}>
            <div className={styles.reactionsContainer__leftSide}>
              <div className={styles.reactionsContainer__reactionBox}>
                {isLiked ? <FcLike size={18} onClick={handleIsLiked}/> : <FcLikePlaceholder size={18} onClick={handleIsLiked}/>}
                <span>6 Reactions</span>
              </div>
              <div className={styles.reactionsContainer__reactionBox}>
                <FaRegComment size={18} />
                <span>1 Comment</span>
              </div>
            </div>
            <div className={styles.reactionsContainer__rightSide}>
              {isSaved ? <FaRegBookmark size={18} onClick={handleIsSaved}/> : <FaBookmark size={18} onClick={handleIsSaved}/>}
            </div>
          </div>
      </article>
    </div>
  )
}
