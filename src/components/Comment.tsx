import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

interface CommentProps {
  comment: string;
  onDeleteComment: (commentToDelete: string) => void;
}

export function Comment({ comment, onDeleteComment }: CommentProps){

  function handleDeleteComment(){
    onDeleteComment(comment);
  }
  
  return (
    <div className={styles.comment}>
      <img src="https://github.com/leonardoReizz.png" alt="Imagem perfil" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Leonardo Reis</strong>
              <time title="29 de Novembro às 11:10" dateTime='2022-11-29 11:10:30'>Publicado há 1h</time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>{comment}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}