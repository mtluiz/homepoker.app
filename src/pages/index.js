import Head from "next/head"

import Home from "../common/components/elements/home"

export default function App() {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <title>Homepoker.app - Agile Poker Online</title>
      </Head>
      <div className="flex items-center justify-center h-screen">
        <Home />
      </div>
    </>
  )
}
