import React from 'react'


export type PagePropsType = {
  children: JSX.Element | JSX.Element[]
  backgroundImage: string
  backgroundContent?: JSX.Element | JSX.Element[]
  darkened?: boolean
}


const Page: React.FC<PagePropsType> = ({
  children,
  backgroundImage,
  backgroundContent,
  darkened
}) =>
  <div className='Page'>
    <div
      className={`Page__background ${darkened && 'Page__background--darkened'}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {backgroundContent}
    </div>
    <div className='Page__container'>
      <div className='Page__container__content'>
        {children}
      </div>
    </div>
  </div>


export default Page