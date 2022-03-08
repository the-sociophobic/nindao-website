import React from 'react'

import Page from '../components/Page'

import LaddersImg from '../styles/img/Ladders.jpg'


export type DistributedPropsType = {}


const Distributed: React.FC<DistributedPropsType> = () =>
  <Page
    backgroundImage={LaddersImg}
    darkened
  >
    <div className='row'>
      <div className='col-10 col-md-10 col-xl-6 mx-auto'>
        <h1 className='h1 h1--xl text-lg-center w-100 text-white mb-20'>
          Distributed systems design
        </h1>
        <p className='p p--xxl text-white text-lg-center mb-32'>
          Architect your systems so they can scale safely.
        </p>
        
        <h1 className='h1 h1--xl text-lg-center w-100 text-white mb-20'>
          Distributed systems design
        </h1>
        <p className='p p--xxl text-white text-lg-center mb-32'>
          Architect your systems so they can scale safely.
        </p>
      </div>
    </div>
  </Page>


export default Distributed