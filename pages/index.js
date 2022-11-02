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
          <div className="hero-headline">
            <h1>Christ Church</h1>
            <h2>All of Christ, for All of Life, for All of Moscow</h2>
          </div>
          <div className="hero-container-links">
            <Link href='/about'>
              <button>About Christ Church</button>
            </Link>
            <Link href='/worship-with-us'>
              <button>Worship With Us</button>
            </Link>
            <Link href='/sermons/'>
              <button>Sermons</button>
            </Link>
          </div>
        </div>
        <div style={{textAlign: 'center', marginBlock: '2rem'}}>
          <h1>You are warmly welcome to join us for one of our Lord’s Day worship services!</h1>
        </div>
        <Events/>
      </div>
    </>
  )
}

export default Home