import React from 'react'
import Layout from '../components/Layout'

const About = () => {
  return (
    <Layout title="About">
      <main>
        <h1>About</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, architecto esse. Tenetur ad delectus eaque deleniti laborum? Sed hic numquam, dignissimos impedit provident nam perferendis similique, ex eaque architecto eligendi.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, architecto esse. Tenetur ad delectus eaque deleniti laborum? Sed hic numquam, dignissimos impedit provident nam perferendis similique, ex eaque architecto eligendi.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, architecto esse. Tenetur ad delectus eaque deleniti laborum? Sed hic numquam, dignissimos impedit provident nam perferendis similique, ex eaque architecto eligendi.</p>
      </main>
      <style jsx>
        {`
        main{
          min-height:50vh;
        }
        h1{
          text-align:center;
        }
        p{
          margin-top:1rem;
          font-size:1.2rem;
          width:80%;
          text-align:center;
          margin-left:auto;
          margin-right:auto;
        }
        @media screen and (min-width:780px){
          p{
            width:50% ;
          }
        }
      `}
      </style>
    </Layout>
  )
}

export default About