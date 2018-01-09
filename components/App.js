import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Case from 'case'
import Logo from '../components/logo'
import { Button } from '../src/views/components'

const App = ({ children, pathname }) => (
  <div className="root">
    <Head>
      <meta charSet="utf-8"/>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <title>Next.js on Heroku</title>
    </Head>
    <style jsx>{`
      .root {
        font-family: sans-serif;
        line-height: 1.33rem;
        margin-top: 8vh,
      }
      @media (min-width: 600px) {
        .root {
          margin-left: 21vw;
          margin-right: 21vw;
        }
      }
    `}</style>

    <h1><Logo style={{ height: '1.45rem' }}/> Next.js on Heroku - {Case.pascal(pathname)}</h1>
    <Button />
    {children}
  </div>
)

App.getInitialProps = async (props) => {
  const { pathname, query } = props
  console.log(props)
  return {
    pathname,
    query
  }
}

export default App
