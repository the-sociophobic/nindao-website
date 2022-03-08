import React from 'react'

import Page from '../components/Page'

import UFOsImg from '../styles/img/UFOs.jpg'


export type WeWorkOnPropsType = {}


const WeWorkOn: React.FC<WeWorkOnPropsType> = () =>
  <Page
    backgroundImage={UFOsImg}
    darkened
  >
    <div className='row'>
      <div className='col-10 col-md-10 col-xl-6 mx-auto'>
        <h1 className='h1 h1--xl text-lg-center w-100 text-white mb-20'>
          We work on:
        </h1>

        <h2 className='h2 text-lg-center w-100 text-white mb-20'>
          DAOs
        </h2>
        <p className='p p--xxl text-white text-lg-center mb-32'>
          We are engineering tools for censorship resistant, borderless, voluntary organisations…
        </p>

        <h2 className='h2 text-lg-center w-100 text-white mb-20'>
          DeFi
        </h2>
        <p className='p p--xxl text-white text-lg-center mb-32'>
          … and combining with existing financial applications of blockchain technology to reach synergy.
        </p>

      </div>
    </div>
  </Page>


export default WeWorkOn