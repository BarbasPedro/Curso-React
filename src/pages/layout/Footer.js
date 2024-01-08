import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'

const Footer = () => {
  return(
    <footer>
      <ul className={styles.social_list}>
        <li className={styles.item}><FaFacebook /></li>
        <li className={styles.item}><FaInstagram /></li>
        <li className={styles.item}><FaLinkedin /></li>
      </ul>
      <p>Nosso rodapé</p>
    </footer>
  )
}

export default Footer
