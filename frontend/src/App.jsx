// CSS Style Definitions
import './App.css'

// React Route Dom import
import { Outlet } from 'react-router-dom'

// Components
import Header from './components/Header'

function App() {
  return (
    <div>
      <Header />
      <main className='pt-16 bg-slate-100 min-h-[calc(100vh)]'>
        <Outlet />
      </main>
    </div>
  )
}

export default App
