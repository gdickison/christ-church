import Link from "next/link"

const Home = () => {
  return (
    <div className="home-container">
      <h1>Home Page</h1>
      <Link href='/about'>
        <h2>About</h2>
      </Link>
    </div>
  )
}

export default Home