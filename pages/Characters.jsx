import React, { useEffect } from 'react'
import Character from '../components/Character';
import Layout from '../components/Layout'



const Characters = ({ characters }) => {

  return (
    <Layout title="Characters">
      <div className='characters'>{characters &&
        characters.map(character => <Character key={character.char_id} character={character} />)}</div>

      <style jsx>
        {`
      .characters{
        padding:1.5rem 1rem;
        display:grid ;
        grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
        grid-auto-rows:140px;
        grid-row-gap:1rem;
      }
        `}
      </style>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const url = "https://www.breakingbadapi.com/api/characters"
  const res = await fetch(url)
  const result = await res.json();

  return {
    props: { characters: result }
  }
}


export default Characters