import React from 'react'
import Header from '../Header'
import * as S from './LayoutStyled'

const Layout = ({ children }) => {
  return (
    <S.Layout>
      <Header/>
      {children}
      
    </S.Layout>
  )
}

export default Layout;