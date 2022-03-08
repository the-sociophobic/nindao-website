import React from 'react'

import Page from '../components/Page'

import BaseImg from '../styles/img/Base.jpg'


export type HighQualityPropsType = {}


const HighQuality: React.FC<HighQualityPropsType> = () =>
  <Page
    backgroundImage={BaseImg}
    darkened
  >
    <div className='row'>
      <div className='col-10 col-md-10 col-xl-6 mx-auto'>
        <h1 className='h1 h1--xl text-lg-center w-100 text-white mb-20'>
          High quality development of your unique projects
        </h1>
        <p className='p p--xxl text-white text-lg-center mb-32'>
          Do you have a unique idea and want to realize it? Is your project already shaping the reality and you want to develop further? We support your demanding projects at every stage with high precision and effectiveness, by providing you highly experienced R&D, engineers and software experts under one roof. We are passionate about the rise of Web3 and this is how we treat your project as well.
        </p>
      </div>
    </div>
  </Page>


export default HighQuality