import React from 'react'

import Logo from '../styles/img/logo.svg'

export type HeaderPropsType = {}


const Header: React.FC<HeaderPropsType> = () =>
  <div className='Header'>
    <div className='container'>
      <img
        className='Logo'
        src={Logo}
      />
    </div>
  </div>


export default Header