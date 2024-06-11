import React from 'react'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import FooterComponent from '../FooterComponent/FooterComponent'

type Prop={
  children: any
}

const DefaultComponent = (props:Prop) => {
  const {children} = props;
  return (
    <div>
      <HeaderComponent/>
      {children}
      <FooterComponent/>
    </div>
  )
}

export default DefaultComponent