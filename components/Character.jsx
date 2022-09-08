import React from 'react'
import Image from 'next/future/image'
import Link from 'next/link'

const Character = ({ character: { img, name, occupation, char_id } }) => {
  return (
    <section>
      <div className='small-img'>
        <Image src={img} alt={name} layout="fill" width="100" height="140" priority />
      </div>
      <div>
        <h2>{name}</h2>
        <p>{occupation}</p>
        <Link href={`Characters/${char_id}`}>
          <a>see</a>
        </Link>
      </div>
      <style jsx>
        {`
        section{
          display:flex ;
          align-items:center;
          position:relative;
        }
        h2{
          margin-left:1rem;
          margin-bottom:.2.5rem;
        }
        p{
          margin-left:1rem;
          margin-top:.2.5rem;
        }

        a{
          color:#fff;
          font-size:1.2rem;
          text-decoration:none;
          position:absolute ;
          bottom:1rem ;
          right:1rem;
        }
        a:hover{
          text-decoration:underline overline;

        }
        `}
      </style>
    </section>
  )
}

export default Character