import React from 'react'
import Div100vh from 'react-div-100vh'

import Header from './components/Header'
import Footer from './components/Footer'
import ContentSlider from './components/ContentSlider'
import Title from './pages/Title'
import WeWorkOn from './pages/WeWorkOn'
import Hub from './pages/Hub'
import WeLove from './pages/WeLove'
import Distributed from './pages/Distributed'
import HighQuality from './pages/HighQuality'

import './styles/index.sass'


const App: React.FC = () =>
  <Div100vh>
    <div className="App">
      <Header />
      <Footer />
      <ContentSlider slides={[
        {
          title: 'The Future is now, and we are building it.',
          background: <Title />
        },
        {
          title: 'We work on:',
          background: <WeWorkOn />
        },
        {
          title: 'Daoism Systems - DAO think tank and builders hub.',
          background: <Hub />
        },
        {
          title: 'You love web3 and brings passion about blockchain technology?',
          background: <WeLove />
        },
        {
          title: 'Distributed systems design',
          background: <Distributed />
        },
        {
          title: 'High quality development of your unique projects',
          background: <HighQuality />
        },
      ]} />
    </div>
  </Div100vh >


export default App
