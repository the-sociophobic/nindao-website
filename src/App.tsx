import React from 'react'
import Div100vh from 'react-div-100vh'

import Header from './components/Header'
import Content from './components/Content'
import Background from './components/Background'

import './styles/index.sass'


function App() {
  return (
    <Div100vh>
      <div className="App">
        <Background />

        <div className='Page'>
          <Header />
          <Content />
        </div>
      </div>
    </Div100vh >
  )
}


export default App
