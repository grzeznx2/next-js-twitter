import type { NextPage } from 'next'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Twitter Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black flex mx-auto min-h-screen max-w-[1500px]">
        <Sidebar />
      </main>
    </div>
  )
}

export default Home
