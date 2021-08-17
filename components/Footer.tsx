import Image from 'next/image'
import { HeartFillIcon } from '@primer/octicons-react'

const Footer = (): JSX.Element => {
  return (
    <footer className="flex items-center justify-center w-full h-24">
      <small>
        Made with&nbsp;
        <HeartFillIcon />
        &nbsp;
      </small>
      <a
        className="flex items-center justify-center"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <small>Powered by&nbsp;</small>
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className="h-4 ml-2"
          width={63}
          height={14}
        />
      </a>
    </footer>
  )
}

export default Footer
