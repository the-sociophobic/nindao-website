import React from 'react'

import Page from '../components/Page'
import Background from '../components/Background'
import ExternalLink from '../components/ExternalLink'

import TitleImg from '../styles/img/Title.jpg'


export type TitlePropsType = {}


const Title: React.FC<TitlePropsType> = () =>
  <Page
    backgroundImage={TitleImg}
    backgroundContent={<Background />}
  >
    <div className='row'>
      <div className='col-10 col-md-10 col-xl-6 mx-auto'>
        <h1 className='h1 h1--xl text-lg-center w-100 text-white mb-20'>
          The Future is now, and we are building it.
        </h1>

        <p className='p p--xxl text-white text-lg-center mb-32'>
          We believe in censorship resistant, borderless and voluntary organizations, and found our passion in emerging organizational systems of the future. We therefore founded Daoism Systems - a highly experienced blockchain research and development company, focusing on avant-gardе, on-chain applications.
        </p>

        <ExternalLink
          className='Button Button--primary mb-4 d-block'
          to='https://t.me/+EBSNTw1oFipjZTQ1'
          newTab
        >
          Discover more
        </ExternalLink>
      </div>
    </div>
  </Page>


export default Title