import React from 'react'
import * as THREE from 'three'
import Div100vh from 'react-div-100vh'

import clamp from '../libs/utils/clamp'


export type ContentSliderType = {
  slides: SlideType[]
}

export type SlideType = {
  background: JSX.Element
  title: string
}


const distanceBetweenTitles = 35

const ContentSlider: React.FC<ContentSliderType> = ({
  slides
}) => {
  const [current, setCurrent] = React.useState<number>(0)
  const [clicked, setClicked] = React.useState<boolean>(false)
  const [dragStart, setDragStart] = React.useState<number>(0)
  const [dragPos, setDragPos] = React.useState<number>(0)

  const calcDragedOffset = () =>
    clicked ?
      (dragPos - dragStart) / window.innerHeight * 100
      :
      0
  const calcCurrentDragged = () => clamp(
    Math.round(current - calcDragedOffset() / distanceBetweenTitles),
    0,
    slides.length - 1
  )

  const handleMouseDown = (e: any) => {
    if (e.button === THREE.MOUSE.LEFT) {
      setClicked(true)
      setDragStart(e.clientY)
      setDragPos(e.clientY)
    }
  }
  const handleTouchStart = (e: any) => {
    if (e.touches.length === 1) {
      setClicked(true)
      setDragStart(e.touches[0].pageY)
      setDragPos(e.touches[0].pageY)
    }
  }
  const handleMouseMove = (e: any) => {
    if (clicked && e.button === THREE.MOUSE.LEFT)
      setDragPos(e.clientY)
  }
  const handleTouchMove = (e: any) => {
    if (clicked && e.touches.length === 1)
      setDragPos(e.touches[0].pageY)
  }
  const handleClickEnd = (e: any) => {
    setClicked(false)
    setCurrent(calcCurrentDragged())
  }

  React.useEffect(() => {
    window.addEventListener?.('mousedown', handleMouseDown)
    window.addEventListener?.('touchstart', handleTouchStart)
    window.addEventListener?.('mousemove', handleMouseMove)
    window.addEventListener?.('touchmove', handleTouchMove)
    window.addEventListener?.('mouseup', handleClickEnd)
    window.addEventListener?.('touchend', handleClickEnd)

    return () => {
      window.removeEventListener?.('mousedown', handleMouseDown)
      window.removeEventListener?.('touchstart', handleTouchStart)
      window.removeEventListener?.('mousemove', handleMouseMove)
      window.removeEventListener?.('touchmove', handleTouchMove)
      window.removeEventListener?.('mouseup', handleClickEnd)
      window.removeEventListener?.('touchend', handleClickEnd)
    }
  })

  const currentDragged = calcCurrentDragged()

  return (
    <Div100vh>
      <div className={`
        ContentSlider
        ${clicked && 'ContentSlider--clicked'}
      `}>
        <div className='ContentSlider__background'>
          {slides[currentDragged].background}
        </div>

        {slides.map((slide: SlideType, index: number) =>
          <div
            key={index}
            className={`
              ContentSlider__title
              ${index === currentDragged ?
                'ContentSlider__title--current'
                :
                index < currentDragged ?
                  'ContentSlider__title--prev'
                  :
                  'ContentSlider__title--next'
              }
            `}
            style={{
              top: `${50 + (index - current) * distanceBetweenTitles + (!clicked ? 0 : calcDragedOffset())}%`
            }}
          >
            <div className='container'>
              <div className='row'>
                <div className='col'>
                  <h1 className='h1 h1--xl text-white'>
                    {slide.title}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Div100vh >
  )
}


export default ContentSlider
