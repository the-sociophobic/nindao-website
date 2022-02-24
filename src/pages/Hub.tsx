import React from 'react'

import Page from '../components/Page'

import AndroidImg from '../styles/img/Android.jpg'


export type HubPropsType = {}


const Hub: React.FC<HubPropsType> = () =>
  <Page
    backgroundImage={AndroidImg}
    darkened
  >
    <div className='row'>
      <div className='col-10 col-md-10 col-xl-6 mx-auto'>        
        <h1 className='d-none d-md-block h1 text-lg-center w-100 text-white mb-32'>
          Daoism Systems - DAO think tank and builders hub.
        </h1>

        <p className='d-none d-md-block p p--xl text-white text-lg-center mb-32'>
          Daoism Systems is a blockchain research and development firm with the focus on implementation of on-chain systems. It evolved from the idea of building ChainSafe for DAOs.
          <br />
          DAOs - decentralized communities that are self-organizing through the internet is an emerging field of web3 space. DAOs are being formed around the biggest DeFi protocols, NFT collections, interest clubs etc. However the best DAO tooling and governance mechanisms are not yet defined or standardized.
          <br />
          The mission of Daoism Systems is to create the best infrastructure for DAOs, so it is easier to create and participate in them. We are aiming to standardize the core DAO concepts and improve the way how users are interacting within DAOs.
        </p>

        <h2 className='d-md-none h2 text-lg-center w-100 text-white mb-32'>
          Daoism Systems - DAO think tank and builders hub.
        </h2>

        <p className='d-md-none p p--m text-white text-lg-center mb-32'>
          Daoism Systems is a blockchain research and development firm with the focus on implementation of on-chain systems. It evolved from the idea of building ChainSafe for DAOs.
          <br />
          DAOs - decentralized communities that are self-organizing through the internet is an emerging field of web3 space. DAOs are being formed around the biggest DeFi protocols, NFT collections, interest clubs etc. However the best DAO tooling and governance mechanisms are not yet defined or standardized.
          <br />
          The mission of Daoism Systems is to create the best infrastructure for DAOs, so it is easier to create and participate in them. We are aiming to standardize the core DAO concepts and improve the way how users are interacting within DAOs.
        </p>
      </div>
    </div>
  </Page>


export default Hub