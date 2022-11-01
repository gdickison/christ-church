import Head from "next/head"
import Link from "next/link"
import Events from "../components/Events"

const Home = () => {
  return (
    <>
      <Head>
        <title>Christ Church - Home</title>
      </Head>
      <div className="home-container">
        <div className="hero-container">
          <div className="hero-container-links">
            <Link href='/about'>
              <button>About Christ Church</button>
            </Link>
            <Link href='/about'>
              <button>Worship With Us</button>
            </Link>
            <Link href='https://www.christkirk.com/sermons/'>
              <button>Sermons</button>
            </Link>
          </div>
        </div>
        <div style={{textAlign: 'center', marginBlock: '3.5rem'}}>
          <h1>You are warmly welcome to join us for one of our Lord’s Day worship services!</h1>
        </div>
        <Events/>
      </div>
    </>
  )
}

export default Home