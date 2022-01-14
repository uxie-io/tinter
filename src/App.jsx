import { h } from 'preact'
import Home from './Components/Home'
import "./../lib/webcomponent/float-menu"

function App() {
  return (
    <div className={`main-container bg-black lg:h-screen lg:overflow-hidden`}>
      <float-menu
        className="z-50 h-0 block absolute "
        style={{ top: '20%' }}
       />
      <Home />
    </div>
  )
}

export default App
