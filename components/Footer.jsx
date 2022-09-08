/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const Footer = () => {
  return (
    <footer>
      <p>&copy; website created by "@julio torres"</p>

      <style jsx>
        {`
        footer{
          display: flex;
          justify-content:center;
          align-items: center;
          padding: 1rem;
          border-top:2px solid black;
        }
        `}
      </style>
    </footer>
  )
}

export default Footer