import React from 'react'
import Head from 'next/head'
import { Footer, NavBar } from '@/components'
const Layout = () => {
  return (
    <div className='layout'>
      <Head>
        <title>Tech Products </title>
      </Head>
      <header>
        <NavBar />
      </header>
      <main className='main-container'>
        Empty
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
