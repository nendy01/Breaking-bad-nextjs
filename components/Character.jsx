import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Character = ({ character: { img, name, occupation, char_id } }) => {
  return (
    <section>
      <Image className='small-img' src={img} alt={name} width="100" height="140" priority />
      <div>
        <h2>{name}</h2>
        <p>{occupation}</p>
        <Link href={`Characters/${char_id}`}>
          <a>ver</a>
        </Link>
      </div>
      <style jsx global>
        {`
        section{
          display:flex ;
          align-items:center;
        }
        h2{
          margin-left:1rem;
          margin-bottom:.2.5rem;
        }
        p{
          margin-left:1rem;
          margin-top:.2.5rem;
        }

        .small-img{
          width:100px ;
          height:100% ;
          min-width:100px ;
          max-width:100px ;
        }
        `}
      </style>
    </section>
  )
}

export default Character