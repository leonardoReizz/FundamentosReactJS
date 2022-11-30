import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';
import './global.css';
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/leonardoReizz.png',
      name: 'Leonardo Reis',
      role: 'Desenvolvedor'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa, este é um post experimental para este app, espero que funcione como deveria'},
      { type: 'paragraph', content: 'E vamos testar isso aqui'},
      { type: 'link', content: '#react'},
    ],
    publishedAt: new Date('2022-11-29 15:00:00')
  },
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernantes',
      role: 'CTO at @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Bora para cima com ete projeto'},
      { type: 'link', content: '#typescript'}
    ],
    publishedAt: new Date('2022-11-29 15:00:00')
  }
]

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post 
                key={post.author.avatarUrl}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
