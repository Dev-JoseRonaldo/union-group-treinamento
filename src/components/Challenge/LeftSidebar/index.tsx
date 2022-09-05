import { FaFacebookSquare, FaGithub, FaTwitter } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { FiTwitch } from 'react-icons/fi'
import { 
  FcAbout,
  FcApproval,
  FcAssistant, 
  FcClapperboard, 
  FcCommandLine, 
  FcDocument, 
  FcHeadset, 
  FcHome, 
  FcIdea, 
  FcInspection, 
  FcKindle, 
  FcLike, 
  FcLock, 
  FcOpenedFolder, 
  FcShop } from 'react-icons/fc'

import styles from './styles.module.scss'

export const LeftSidebar = () => {
  return (
    <div className={styles.container}>
      <nav>
        <ul>
          <li>
            <a href="#" className={styles.container__iconBox}>
              <FcHome size={24}/>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#" className={styles.container__iconBox}>
              <FcOpenedFolder size={24}/>
              <span>Reading List</span>
            </a>
          </li>
          <li>
            <a href="#" className={styles.container__iconBox}>
              <FcDocument size={24}/>
              <span>Listings</span>
            </a>
          </li>
          <li>
            <a href="#" className={styles.container__iconBox}>
              <FcHeadset size={24}/>
              <span>Podcasts</span>
            </a>
          </li>
          <li>
            <a href="#" className={styles.container__iconBox}>
              <FcClapperboard size={24}/>
              <span>Videos</span>
            </a>
          </li>
          <li>
            <a href="#" className={styles.container__iconBox}>
              <FcInspection size={24}/>
              <span>Tags</span>
            </a>
          </li>
          <li>
            <a href="#" className={styles.container__iconBox}>
              <FcIdea size={24}/>
              <span>FAQ</span>
            </a>
          </li>
          <li>
            <a href="#" className={styles.container__iconBox}>
              <FcShop size={24}/>
              <span>Forem Shop</span>
            </a>
          </li>
          <li>
            <a href="#" className={styles.container__iconBox}>
              <FcLike size={24}/>
              <span>Sponsors</span>
            </a>
          </li>
          <li>
            <a href="#" className={styles.container__iconBox}>
              <FcAbout size={24}/>
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#" className={styles.container__iconBox}>
              <FcAssistant size={24}/>
              <span>Contact</span>
            </a>
          </li>
          <li>
            <a href="#" className={styles.container__iconBox}>
              <FcDocument size={24}/>
              <span>Guides</span>
            </a>
          </li>
          <li>
            <a href="#" className={styles.container__iconBox}>
              <FcCommandLine size={24}/>
              <span>Software Comparisons</span>
            </a>
          </li>
        </ul>      
      </nav>

      <nav>
        <ul className={styles.container__otherBox}>
          <p>Other</p>
          <li>
            <a className={styles.container__iconBox}>
              <FcApproval size={24}/>
              <span>Code of Conduct</span>
            </a>
          </li>

          <li>
            <a className={styles.container__iconBox}>
              <FcLock size={24}/>
              <span>Privacy Policy</span>
            </a>
          </li>

          <li>
            <a className={styles.container__iconBox}>
              <FcKindle size={24}/>
              <span>Terms of use</span>
            </a>
          </li>
        </ul>
      </nav>

      <nav>
        <ul className={styles.container__socialsIcons}>
          <li><a href="#"><FaTwitter /></a></li>
          <li><a href="#"><FaFacebookSquare /></a></li>
          <li><a href="#"><FaGithub /></a></li>
          <li><a href="#"><AiFillInstagram /></a></li>
          <li><a href="#"><FiTwitch /></a></li>
        </ul>
      </nav>
    </div>
  )
}
