import React from 'react'

const SingleCharacter = ({ character }) => {
  console.log(character);
  return (
    <div>SingleCharacter</div>
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
  const char = context.params.SingleCharacter;
  const url = `https://www.breakingbadapi.com/api/characters/${char}`
  const character = await fetch(url).then(res => res.json())
  return { props: { character } };

}

export default SingleCharacter