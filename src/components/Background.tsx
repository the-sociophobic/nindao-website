import React from 'react'

import ThreeScene from './ThreeScene'
import Arc from '../libs/three/units/Arc'
import Lights from '../libs/three/units/Lights'
import Environment from '../libs/three/units/Environment'

import logo from '../styles/img/logo_distorted.png'


export type BackgroundPropsType = {}


const Background: React.FC<BackgroundPropsType> = () =>
  <div className='Background'>
    <img
      src={logo}
      className='Background__logo'
    />
    {/* <ThreeScene
      id="3d-scene"
      units={{
        arc: {
          unit: Arc,
          disabled: false,
        },
        lights: {
          unit: Lights,
          disabled: false,
        },
        env: {
          unit: Environment,
          disabled: false,
        },
      }}
    /> */}
  </div>


export default Background