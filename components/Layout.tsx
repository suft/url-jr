import { ReactNode } from 'react'
import Footer from './Footer'

type Props = {
  withFooter?: boolean
  children?: ReactNode
}

const Layout = ({ withFooter, children }: Props): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {children}
      {withFooter && <Footer />}
    </div>
  )
}

export default Layout
