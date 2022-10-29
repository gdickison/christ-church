import Head from "next/head"
import Link from "next/link"

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
            <Link href='/about'>
              <button>Sermons</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home