import React from 'react'
import Footer from './Footer'
import HeadC from './HeadC'
import Header from './Header'

const Layout = ({ children, title }) => {
  return (
    <main>
      <HeadC title={title} />
      <Header title={title} />
      {children}
      <Footer />
      <style jsx>
        {`
        main{
          min-height:100vh;
          display:flex;
          flex-direction:column;
          background-color:#182547 ;
          color:#fff;
          justify-content:space-between;
        }
        `}
      </style>
    </main>
  )
}

export default Layout