import Head from "next/head"
import PageTabs from "../components/PageTabs"

const About = () => {

  return (
    <>
      <Head>
        <title>Christ Church - About</title>
      </Head>
      <div className="about-header">
        <h1>About Christ Church </h1>
        <span> - </span>
        <h2>our leadership, beliefs, and ministries</h2>
      </div>
      <PageTabs/>
    </>
  )
}

export default About