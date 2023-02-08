import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Kalam:wght@300&display=swap" rel="stylesheet"></link>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
