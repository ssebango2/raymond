import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          {/* Preload the logo image */}
          <link
            rel="preload"
            href="/newLogo.jpg"
            as="image"
            type="image/jpeg"
          />
          {/* Preload the Lusitana font */}
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Lusitana:wght@400;700&display=swap"
            as="style"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Lusitana:wght@400;700&display=swap"
          />
          {/* Load Font Awesome for social icons */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
            integrity="sha384-dyMZxJinP5LkaHEQzSWGcKwN0u9joE9c0voX+Sk08uPj7pXjEqv/sZ5dr7pOtKw"
            crossOrigin="anonymous"
          />
          {/* Additional meta tags can be added here */}
          <meta name="description" content="Your site description here" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
