import { PencilLine } from 'phosphor-react';
import bannerImage from '../assets/banner.png';
import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';

export function Sidebar(){
  return (
    <aside className={styles.sidebar}>
      <img src={bannerImage} alt="Banner" className={styles.cover} />

      <div className={styles.profile}>
        <Avatar src="https://github.com/leonardoReizz.png" />
        <strong>Leonardo Reis</strong>
        <span>Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}