//Copyright Elise Willar 2022 for elisewillar.com
//19th of June 2022
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    //Super important to have that style in the head.
    //It will be loaded before the page body so the background color is already set and we don't get a flash of white on reload. 
    //Only works on production, the dev server is slow AF and we still get a white flash.
    <Html>
      <Head>
        <style> {"body {background-color:#212529;}"}
        </style>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
