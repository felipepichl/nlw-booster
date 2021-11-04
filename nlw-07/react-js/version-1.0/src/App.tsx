
import { MessageList } from './components/MessageList'
import { LoginBox } from './components/LoginBox'

import styles from './App.module.scss'

function App() {  
  return (
    <main className={styles.contentWrapper}>
      <MessageList />
      <LoginBox />
    </main>
  )
}

export { App }