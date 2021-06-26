import { h } from 'preact'
import Home from './Components/Home'

function App() {
  return (
    <div className={`main-container bg-black lg:h-screen lg:overflow-hidden`}>
      <Home />
    </div>
  )
}

export default App
