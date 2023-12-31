import { h } from 'preact'
import Home from './Components/Home'
import './../lib/webcomponent/float-menu'
import './../lib/webcomponent/banner'

function App() {
  return (
    <div className={`main-container bg-black lg:h-screen lg:overflow-hidden`}>
      <banner-nav className="z-10 relative" />
      <float-menu className="z-50 h-0 block absolute " style={{ top: '20%' }} />
      <Home />
    </div>
  )
}

export default App
