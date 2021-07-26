// import Document, { Head, Main, NextScript } from 'next/document';
// import { ServerStyleSheet } from 'styled-components';

// export default class MyDocument extends Document {
//   static getInitialProps({ renderPage }: any) {
//     const sheet = new ServerStyleSheet();

//     const page = renderPage((App: any) => (props: any) =>
//       sheet.collectStyles(<App {...props} />),
//     );

//     const styleTags = sheet.getStyleElement();

//     return { ...page, styleTags };
//   }

//   render() {
//     return (
//       <html>
//         <Head>
//           <link
//             rel="preload"
//             href="/fonts/SFProDisplay/SF-Pro.ttf"
//             as="font"
//             crossOrigin=""
//           />
//           <title>Books</title>
//         </Head>
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </html>
//     );
//   }
// }


import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
        return (
          <Html>
            <Head>
              <link
                rel="preload"
                href="/fonts/SFProDisplay/SF-Pro.ttf"
                as="font"
                crossOrigin=""
              />
              {/* <title>Books</title> */}
            </Head>
            <body>
              <Main />
              <NextScript />
            </body>
          </Html>
        );
      }
}