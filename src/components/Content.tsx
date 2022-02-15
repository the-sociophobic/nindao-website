import React from 'react'

import ExternalLink from './ExternalLink'


export type ContentPropsType = {}


const Content: React.FC<ContentPropsType> = () =>
  <div className='container d-flex flex-grow-1 flex-column justify-content-center'>
    <div className='row mb-20'>
      <div className='col-12'>
        <h1 className='h1 text-center w-100 text-white'>
          Emerging organisational systems of the future
        </h1>

      </div>
    </div>

    <div className='row mb-32'>
      <div className='col-10 col-md-10 col-xl-6 mx-auto'>
        <p className='p p--xxl text-white text-center'>
          Daoism Systems is the blockchain R&D company focusing on avant-gardе on-chain applications.
        </p>
      </div>
    </div>

    <div className='row'>
      <div className='col-10 col-md-8 col-xl-4 mx-auto'>
        <ExternalLink
          className='Button Button--primary mb-4 d-block'
          to='https://t.me/+EBSNTw1oFipjZTQ1'
          newTab
        >
          Join NOW
        </ExternalLink>
      </div>
    </div>
  </div>


export default Content