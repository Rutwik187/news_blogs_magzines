import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Preload critical assets */}
          <link rel="preload" href="/css/fontawesome-all.min.css" as="style" />
          <link rel="preload" href="/css/iconfont.css" as="style" />

          {/* Static CSS Files */}
          <link rel="stylesheet" href="/css/fontawesome-all.min.css" />
          <link rel="stylesheet" href="/css/iconfont.css" />

          {/* Google Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
          />

          {/* RSS feed */}
          <link
            rel="alternate"
            type="application/rss+xml"
            title="The Entrepreneurial Chronicles Feed"
            href="/api/feed"
          />

          {/* Google AdSense */}
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4800543608007428"
            crossOrigin="anonymous"
          />

          {/* JSON-LD Script */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "Organization",
                    "@id":
                      "https://www.theentrepreneurialchronicle.com/#organization",
                    name: "The Entrepreneurial Chronicles",
                    url: "https://www.theentrepreneurialchronicle.com/",
                    sameAs: [
                      "https://www.facebook.com/Theentrepreneurialchronicles",
                      "https://www.instagram.com/the.entrepreneurialchronicles/",
                      "https://www.linkedin.com/company/theentrepreneurialchronicles/",
                    ],
                    logo: {
                      "@type": "ImageObject",
                      "@id":
                        "https://www.theentrepreneurialchronicle.com/#logo",
                      inLanguage: "en-US",
                      url: "https://www.theentrepreneurialchronicle.com/next/image?url=%2Flogos%2Flogo-primary.png&w=384&q=75",
                      width: 300,
                      height: 150,
                      caption: "The Entrepreneurial Chronicles",
                    },
                    image: {
                      "@id":
                        "https://www.theentrepreneurialchronicle.com/#logo",
                    },
                  },
                  {
                    "@type": "WebSite",
                    "@id":
                      "https://www.theentrepreneurialchronicle.com/#website",
                    url: "https://www.theentrepreneurialchronicle.com/",
                    name: "The Entrepreneurial Chronicles",
                    description:
                      "The Entrepreneurial Chronicles is a business magazine that brings inspiring stories of entrepreneurs who have turned their dreams into reality.",
                    publisher: {
                      "@id":
                        "https://www.theentrepreneurialchronicle.com/#organization",
                    },
                    potentialAction: [
                      {
                        "@type": "SearchAction",
                        target:
                          "https://www.theentrepreneurialchronicle.com/?s={search_term_string}",
                        "query-input": "required name=search_term_string",
                      },
                    ],
                    inLanguage: "en-US",
                  },
                  {
                    "@type": "WebPage",
                    "@id":
                      "https://www.theentrepreneurialchronicle.com/#webpage",
                    url: "https://www.theentrepreneurialchronicle.com/",
                    name: "The Entrepreneurial Chronicles",
                    isPartOf: {
                      "@id":
                        "https://www.theentrepreneurialchronicle.com/#website",
                    },
                    about: {
                      "@id":
                        "https://www.theentrepreneurialchronicle.com/#organization",
                    },
                    datePublished: "2024-06-24T20:16:53+00:00",
                    dateModified: "2024-06-28T20:33:08+00:00",
                    description:
                      "The Entrepreneurial Chronicles is a business magazine that brings inspiring stories of entrepreneurs who have turned their dreams into reality.",
                    inLanguage: "en-US",
                    potentialAction: [
                      {
                        "@type": "ReadAction",
                        target: [
                          "https://www.theentrepreneurialchronicle.com/",
                        ],
                      },
                    ],
                  },
                ],
              }),
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* Google Tag Manager Script */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-CFTSB5X8JY');
              `,
            }}
          />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-CFTSB5X8JY"
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
