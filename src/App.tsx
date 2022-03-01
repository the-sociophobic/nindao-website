import React from 'react'
import Div100vh from 'react-div-100vh'

import Header from './components/Header'
import Title from './pages/Title'
import WeWorkOn from './pages/WeWorkOn'
import Hub from './pages/Hub'
import WeLove from './pages/WeLove'
import Distributed from './pages/Distributed'
import HighQuality from './pages/HighQuality'

import './styles/index.sass'


const App = () =>
  <Div100vh>
    <div className="App">
      <Header />
      <div className='Content'>
        <Title />
        {/* <WeWorkOn />
        <Hub />
        <WeLove />
        <Distributed />
        <HighQuality /> */}
      </div>
    </div>
  </Div100vh >


export default App
