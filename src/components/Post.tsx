import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';

export function Post(){
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/leonardoReizz.png"/>
          <div className={styles.authorInfo}>
            <strong>Leonardo Reis</strong>
            <span>Developer</span>
          </div>
        </div>
        <time title="29 de Novembro às 11:10" dateTime='2022-11-29 11:10:30'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala Geleraaaa</p>
        <p>Acabei de subir mais um projeto em meu portifolio. É um projeto que fiz no Ignite</p>
        <p>
          <a href="">#ignite</a>
          <a href="">#projetoNovo</a>
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form action="" className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder='Deixe um comentário'
        />
        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}