import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    //Super important to have that style in the head,
    //It will be loaded before the page body so the background color is already saved and set,
    //so we don't get a white flashbang when reloading.
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
