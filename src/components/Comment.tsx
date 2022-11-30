import { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { ThumbsUp, Trash } from 'phosphor-react';
import { IComment } from './Post';
import styles from './Comment.module.css';

interface CommentProps {
  comment: IComment;
  onDeleteComment: (commentToDelete: string) => void;
}

export function Comment({ comment, onDeleteComment }: CommentProps){
  const [likeCount, setLikeCount] = useState<number>(0);
  const publishedDateRelativeToNow = formatDistanceToNow(comment.publishedAt, {
    locale: ptBR,
    addSuffix: true
  });
  function handleDeleteComment(){
    onDeleteComment(comment.message);
  }
  
  function handleLikeComment(){
    setLikeCount((state) => state + 1);
  }
  
  return (
    <div className={styles.comment}>
      <img src="https://github.com/leonardoReizz.png" alt="Imagem perfil" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Leonardo Reis</strong>
              {/* format -> data -> text  */}
              <time dateTime={comment.publishedAt.toISOString()}>
                {publishedDateRelativeToNow}
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>{comment.message}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}