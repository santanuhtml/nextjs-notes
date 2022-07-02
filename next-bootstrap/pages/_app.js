import '../public/css/bootstrap.min.css'
import '../styles/custom.css'
import '../styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Next JS With Bootstrap</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <Script 
      src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js" strategy="lazyOnload">
      </Script>
      <Script 
      src="/js/bootstrap.min.js" strategy="lazyOnload">
      </Script>
    </div>
  )
}

export default MyApp
