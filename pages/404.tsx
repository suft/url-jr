import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

const Custom404: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>404: This page could not be found</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full px-20 text-center">
        <h1 className="font-bold text-9xl">
          <strong>404</strong>
        </h1>
        <Link href="/">
          <a className="mt-3 text-lg underline">Go Home</a>
        </Link>
      </main>
    </Layout>
  )
}

export default Custom404
