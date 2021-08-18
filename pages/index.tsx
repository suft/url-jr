import { useState, useEffect, FormEvent, ChangeEvent } from 'react'
import Head from 'next/head'
import {
  LinkIcon,
  RocketIcon,
  PasteIcon,
  CheckIcon,
} from '@primer/octicons-react'
import copy from 'copy-to-clipboard'
import Layout from '../components/Layout'

export default function Home(): JSX.Element {
  const [longURL, setLongURL] = useState<string>('')
  const [shortURL, setShortURL] = useState<string>('')
  const [copied, setCopied] = useState<boolean>(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLongURL(event.target.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    setShortURL('Generate Short URL')
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (copied) setCopied(false)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [copied])

  return (
    <Layout withFooter>
      <Head>
        <title>URL Jr.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <h1 className="text-6xl font-bold">
          <strong>URL</strong> Jr.
        </h1>

        <p className="mt-3 text-2xl">Shorten your links</p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <form onSubmit={handleSubmit} className="mt-2 md:w-5/12">
            <div className="flex flex-col space-y-2">
              <label htmlFor="long-url" className="font-semibold text-left">
                <LinkIcon /> Long URL
              </label>
              <input
                type="url"
                id="long-url"
                className="w-full h-10 p-2 text-lg border-2 rounded focus:ring-4"
                onChange={handleChange}
                value={longURL}
                required
              />
              <label htmlFor="short-url" className="font-semibold text-left">
                <RocketIcon /> Short URL
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="short-url"
                  className="w-full h-10 pl-2 pr-8 text-lg placeholder-gray-600 border-2 rounded focus:shadow-outline"
                  value={shortURL}
                  readOnly
                />
                <button
                  className="absolute inset-y-0 right-0 flex items-center px-4 font-bold text-white bg-gray-700 rounded-r"
                  onClick={() => {
                    copy(shortURL)
                    setCopied(true)
                  }}
                >
                  {copied ? <CheckIcon /> : <PasteIcon />}
                </button>
              </div>
              <button className="h-10 px-6 mt-4 text-lg font-bold text-gray-100 bg-gray-700 rounded">
                Shorten
              </button>
            </div>
          </form>
        </div>
      </main>
    </Layout>
  )
}
