import React from 'react'
import Layout from '../../../components/Layout'

import Image from "next/future/image"
const SingleCharacter = ({ character, quote }) => {
  const { birthday, img, name, nickname, occupation, status, portrayed } = character
  const css = { maxWidth: '90%', height: 'auto' }

  return (
    <Layout title={name}>
      <main className='character'>
        <figure>
          <Image src={img} alt={`photo of ${name}`} style={css} width="400" height={300} />
          <figcaption>{name}</figcaption>
        </figure>
        <article>
          <h2 className='name'>name:  {name}</h2>

          <h2>nickname:  {nickname}</h2>
          <p><span className='bold'>status:  </span> {status}</p>
          <p><span className='bold'>birthday:  </span>{birthday}</p>
          <p><span className='bold'>actor:  </span>{portrayed}</p>
          <p><span className='bold'>occupation:  </span></p>
          <ul>{
            occupation.map((occ, index) => <li key={index}>{occ}</li>)
          }</ul>
        </article>
      </main>
      <style jsx>
        {`
        .character{
          display:grid;
          place-items:center;
        }
        .name{
          font-size:3rem;
        }
        .bold{
          font-weight:800;
          font-size:1.1rem;
          margin-top:.4rem;
        }
        ul{
          list-style-type:none;
        }

        @media screen and (min-width:780px){
          .character{
          padding:1rem ;
          grid-template-columns:1fr 1fr ;
          }
        }
        `}
      </style>
    </Layout>
  )
}

export async function getStaticPaths() {
  const url = "https://www.breakingbadapi.com/api/characters"
  const result = await fetch(url).then(res => res.json())
  const paths = result.map(char => ({ params: { SingleCharacter: char.char_id.toString() } }))
  return {
    fallback: false,
    paths,
  }
}

export async function getStaticProps(context) {
  const { SingleCharacter } = context.params;
  const url = `https://www.breakingbadapi.com/api/characters/${SingleCharacter}`
  const [character] = await fetch(url).then(res => res.json())

  const urlQ = `https://www.breakingbadapi.com/api/quote?author=${character?.name}`

  const quote = await fetch(urlQ).then(res => res.json())

  return { props: { character, quote } };

}

export default SingleCharacter