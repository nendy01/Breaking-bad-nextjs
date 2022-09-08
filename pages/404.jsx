import Layout from '../components/Layout'
import Image from 'next/future/image'
import Link from 'next/link'

const NotFound = () => {
  return (
    <Layout>
      <div className="notfound">
        <Image className='lost' src="/i-lost.gif" alt="not found image" width={450} height={300} />
        <Link href="/" className='link'>
          <a>⬅ go to home</a>
        </Link>
      </div>
      <style jsx>
        {`
        .notfound{
          display:grid;
          place-items:center;
        }
        .lost{
          border: 3px solid white;
          border-radius:30px;
        }
        .link{
          color:#fff;
        }
        `}
      </style>
    </Layout>
  )
}

export default NotFound