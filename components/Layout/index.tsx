// vitals
import React, { ReactNode } from 'react'

// components
import Link from 'next/link'
import Head from 'next/head'

interface LayoutProps {
  pageTitle: string
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  return (
    <>
      <Head>
        <Link href="/carros"><a>Carros</a></Link>
        <Link href="/marcas"><a>Marcas</a></Link>
        { pageTitle }
      </Head>
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout;
