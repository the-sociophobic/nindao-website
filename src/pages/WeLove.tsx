import React from 'react'

import Page from '../components/Page'

import ShipImg from '../styles/img/Ship.jpg'


export type WeLovePropsType = {}


const WeLove: React.FC<WeLovePropsType> = () =>
  <Page
    backgroundImage={ShipImg}
    darkened
  >
    <div className='row'>
      <div className='col-10 col-md-10 col-xl-6 mx-auto'>
        <h1 className='d-none d-md-block h1 text-lg-center w-100 text-white mb-32'>
          You love web3 and brings passion about blockchain technology?
        </h1>

        <p className='d-none d-md-block p p--xl text-white mb-32'>
          Do you want to help us shape the future?<br/>
          You're already an experienced Web3-nija or you just want to get to know the world of blockchain from the inside and learn something great?<br/>
          We are looking for talented and motivated people to join our international team and work with us on groundbreaking technologies and interesting projects.<br/>
          We offer exciting projects, above-average salaries and project participation and support you in your further education, to become the better version of yourself. We firmly believe that the high code quality we offer our customers is only possible with great and happy employees.<br/>
          Write us an email at contact@doaism.systems and lets speak about your career.<br/>
          <br/><br/>
          We are looking for:
          <ul>
            {[
              'Protocol Engineer (example)',
              'Senior Technical Recruiter (example)',
              'Back-end Engineer',
              'Front End Developer',
              'Tech Lead',
              'Web3 researcher',
            ].map(position =>
              <li>
                {position}
              </li>
            )}
          </ul>
        </p>

        <h2 className='d-md-none h2 text-lg-center w-100 text-white mb-32'>
          You love web3 and brings passion about blockchain technology?
        </h2>

        <p className='d-md-none p p--m text-white mb-32'>
        Do you want to help us shape the future?<br/>
          You're already an experienced Web3-nija or you just want to get to know the world of blockchain from the inside and learn something great?<br/>
          We are looking for talented and motivated people to join our international team and work with us on groundbreaking technologies and interesting projects.<br/>
          We offer exciting projects, above-average salaries and project participation and support you in your further education, to become the better version of yourself. We firmly believe that the high code quality we offer our customers is only possible with great and happy employees.<br/>
          Write us an email at contact@doaism.systems and lets speak about your career.<br/>
          <br/><br/>
          We are looking for:
          <ul>
            {[
              'Protocol Engineer (example)',
              'Senior Technical Recruiter (example)',
              'Back-end Engineer',
              'Front End Developer',
              'Tech Lead',
              'Web3 researcher',
            ].map(position =>
              <li>
                {position}
              </li>
            )}
          </ul>
        </p>
      </div>
    </div>
  </Page>


export default WeLove