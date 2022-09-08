import Image from "next/future/image";
import Layout from "../components/Layout";

export default function Home({ character, quoteR }) {

  const { img, name, nickname, status, occupation, birthday } = character
  const { author, quote } = quoteR
  return (
    <Layout title="Inicio">
      <main>
        <h1>App cronstruida con la api de de breaking bad y nextjs</h1>
        <section className="section">
          <Image src={img} alt={name} className="i-image" width={300} height={500} />
          <h2>{name}</h2>
          <h3>{nickname}</h3>
          <p className="sp">{status}</p>
          {birthday && <p className="sp">{birthday}</p>}
        </section>
        <section>
          <blockquote>
            <p>{quote}</p>
            <cite>{author}</cite>
          </blockquote>
        </section>
      </main>
      <style jsx>
        {`
        h1{
          padding-bottom:1rem;
        }
        main{
          display:flex ;
          padding-left:1rem;
          padding-right:1rem;
          flex-direction:column;
          align-items:center;
        }
        .section{
          position:relative;
          margin-bottom:2rem;
        }
         h2,h3,.sp{
          margin-top:.7rem;
          padding-bottom:.3rem;
          border-bottom:2px solid #fff;
        }

        `}
      </style>
    </Layout>
  );
}

export async function getServerSideProps() {
  const url = `https://www.breakingbadapi.com/api/character/random`
  const char = fetch(url).then(res => res.json())
  const urlQ = `https://www.breakingbadapi.com/api/quote/random`
  const quote = fetch(urlQ).then(res => res.json())

  const [rcharacter, rQuote] = await Promise.all([char, quote])

  const [character] = rcharacter
  const [quoteR] = rQuote

  return { props: { character, quoteR } };

}
