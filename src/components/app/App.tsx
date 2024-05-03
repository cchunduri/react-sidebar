import './App.css'
import { useState } from 'react'
import Sidebar from '../sidebar/Sidebar'

function App() {

  let [showSidebar, setShowSidebar] = useState(false)

  return (
    <>
      <h1>React Sidebar Demo</h1>
      <div className="card">
        <button onClick={() => setShowSidebar(!showSidebar)}>
          Click Me
        </button>
      </div>
      <Sidebar show={showSidebar} close={() => setShowSidebar(!setShowSidebar)} />
    </>
  )
}

export default App
