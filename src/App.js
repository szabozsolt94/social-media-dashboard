import './style.css'
import { useState } from 'react'
import { data } from './sample-data'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Overview from './components/Overview'

function App() {

  const [lightMode, setLightMode] = useState(false)

  const turnLightOn = () => {
    (!lightMode) ? document.documentElement.style.backgroundColor = 'whitesmoke' : document.documentElement.style.backgroundColor = ''
    return setLightMode(!lightMode)
  }

  return (
    <div className={lightMode ? `container light-mode` : `container`}>
      <Header onClick={turnLightOn} />
      <Dashboard platforms={data.platforms} />
      <Overview events={data.events} />
    </div >
  );
}

export default App;
