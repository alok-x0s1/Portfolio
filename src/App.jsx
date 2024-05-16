import { Outlet } from 'react-router-dom'
import './App.css'
import { Footer, Header } from './components'

function App() {

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App