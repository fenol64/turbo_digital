import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)

        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                    <meta name="theme-color" content="#212121" />
                    <meta name="msapplication-navbutton-color" content="#212121" />
                    {/* add favicon */}
                    <link rel="icon" type="image/png" href="https://static.wixstatic.com/media/40bd24_290ea0deb2b74deea4ac9ee1b9f7c1d6~mv2.png/v1/crop/x_239,y_136,w_263,h_241/fill/w_251,h_230,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202021-09-24%20at%2021_35_39.png" />

                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;700&family=Rubik:wght@400;600&display=swap" rel="stylesheet" />
                    <link href="https://pro.fontawesome.com/releases/v6.0.0-beta3/css/all.css" rel="stylesheet" />
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />
                    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
