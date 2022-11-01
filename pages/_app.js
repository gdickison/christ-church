import '../styles/globals.css'
import '../styles/page-tabs.css'
import '../styles/section-tabs.css'
import '../styles/nav.css'
import '../styles/hero.css'
import '../styles/events.css'
import '../styles/footer.css'

import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
