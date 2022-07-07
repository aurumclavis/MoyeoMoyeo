import Layout from '../src/components/commons/layout'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
