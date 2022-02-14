import React from 'react'

import ExternalLink from './ExternalLink'


export type ContentPropsType = {}


const Content: React.FC<ContentPropsType> = () =>
  <div className='container d-flex flex-grow-1 flex-column justify-content-center align-items-center'>
    <h2 className='text-center w-100 mb-4'>
      Emerging organisational systems of the future
    </h2>

    <ExternalLink
      className='Button Button--primary'
      to='https://t.me/+EBSNTw1oFipjZTQ1'
      newTab
    >
      Join now
    </ExternalLink>

  </div>


export default Content