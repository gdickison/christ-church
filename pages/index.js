import Head from "next/head"
import Link from "next/link"

const Home = () => {
  return (
    <>
      <Head>
        <title>Christ Church - Home</title>
      </Head>
      <div className="home-container">
        <h1>Home Page</h1>
        <Link href='/about'>
          <h2>About</h2>
        </Link>
      </div>
    </>
  )
}

export default Home