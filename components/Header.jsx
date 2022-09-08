import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Header = ({ title }) => {
  return (
    <header>
      <div>
        <Link href="/">
          <a> Breaking bad <sub> <i>/ {title}</i></sub></a>
        </Link>
      </div>
      <nav>
        <Link href="/">
          <a>Inicio</a>
        </Link>
        <Link href="/About">
          <a>About</a>
        </Link>
        <Link href="/Characters">
          <a>Characters</a>
        </Link>
      </nav>
      <style jsx>
        {`
          header{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height:5rem;
            padding-left: .7rem;
            border-bottom: 2px solid #000;
          }
          nav{
            display: flex;
          }
          a{
            margin-right:.7rem;
            font-weight:700;
            text-decoration:none ;
            color:#fff;
          }
          a:last-item{
            background-color:red;
          }
          strong{
            margin-bottom:.5rem;
          }
          `}
      </style>
    </header>
  )
}

export default Header