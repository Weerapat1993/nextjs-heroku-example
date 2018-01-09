import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { App } from '../components'

export default () => (
  <App>
    <p>Deploy <a href="https://zeit.co/blog/next">Next.js</a> universal web apps on <a href="https://www.heroku.com/home">Heroku</a>.</p>
    <p>This <strong>demo deployment on Heroku</strong> is from the repo <a href="https://github.com/mars/heroku-nextjs">mars/heroku-nextjs</a>.</p>
    <p><Link href='/' >Home</Link> <Link href='/about' >About</Link> <Link href='/contact' >Contact</Link></p>
    <p><a href="https://github.com/mars/heroku-nextjs/archive/master.zip">Download this Next.js app</a> as a Heroku-ready template, or follow <a href="https://github.com/mars/heroku-nextjs#production-deployment">Production Deployment</a> to push an existing app to Heroku.</p>
  </App>
)