import { useCallback, useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import styles from './Post.module.css';

interface PostProps{
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  }
  content: {
    type: string, 
    content: string;
  }[]
  publishedAt: Date;
}

export interface IComment {
  message: string;
  publishedAt: Date;
}

export function Post({ author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState<IComment[]>([]);
  const [newCommentText, setNewCommentText] = useState<string>('');

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  const deleteComment = useCallback((commentToDelete: string) => {
    const commentsAfterDeleteOne = comments.filter(comment => comment.message !== commentToDelete);
    setComments(commentsAfterDeleteOne);
  }, [comments]);

  function handleCreateNewComment(event: React.FormEvent) {
    event.preventDefault();
    setComments([...comments, {message: newCommentText, publishedAt: new Date()}]);
    setNewCommentText('');
  }

  function handleNewCommentChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event: React.InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse é um campo obrigatório!');
  }

  const isNewCommentEmpty = newCommentText.length === 0;


  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {
          content.map((line) => {
            if(line.type === 'paragraph') {
              return <p key={line.content}>{line.content}</p>
            } else if(line.type === 'link') {
              return <p key={line.content}><a href="#">{line.content}</a></p>
            }
          })
        }
      </div>

      <form onSubmit={(e) => handleCreateNewComment(e)} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder='Deixe um comentário'
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button 
            type="submit" 
            disabled={isNewCommentEmpty}
          >Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return ( 
            <Comment 
              key={comment.message} 
              comment={comment} 
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  );
}