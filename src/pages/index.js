import Script from "next/script";
import HeadMeta from "../components/elements/HeadMeta";
import FooterTwo from "../components/footer/FooterTwo";
import HeaderOne from "../components/header/HeaderOne";
import MasterTalks from "../components/post/MasterTalks";
import Magazines from "../components/post/Magazines";
import BusinessBulletin from "../components/post/BusinessBulletin";
import SliderOne from "../components/slider/SliderOne";
import WebProfiles from "../components/post/WebProfiles";
import MarketNews from "../components/post/MarketNews";

const Home = () => {
  return (
    <div suppressHydrationWarning>
      <HeadMeta
        metaTitle="The Entrepreneurial Chronicles: A Business Magazine for Inspiring Entrepreneur Stories"
        metaDesc="The Entrepreneurial Chronicles is a business magazine that brings inspiring stories of entrepreneurs who have turned their dreams into reality."
      />
      <HeaderOne />
      <SliderOne />
      <Magazines />
      <WebProfiles />
      <MarketNews />
      <BusinessBulletin />
      <MasterTalks />
      <FooterTwo />

      <Script
        id="schema-script"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id":
                  "https://www.theentrepreneurialchronicles.com/#organization",
                name: "The Entrepreneurial Chronicles | Best Business Magazine",
                url: "https://www.theentrepreneurialchronicles.com/",
                sameAs: [
                  "https://www.facebook.com/Theentrepreneurialchronicles",
                  "https://www.instagram.com/the.entrepreneurialchronicles/",
                  "https://www.linkedin.com/company/theentrepreneurialchronicles/",
                ],
                logo: {
                  "@type": "ImageObject",
                  "@id": "https://www.theentrepreneurialchronicles.com/#logo",
                  inLanguage: "en-US",
                  url: "https://www.theentrepreneurialchronicles.com/_next/image?url=%2Flogos%2Flogo-primary.png&w=384&q=75",
                  width: 300,
                  height: 150,
                  caption: "The Entrepreneurial Chronicles",
                },
                image: {
                  "@id": "https://www.theentrepreneurialchronicles.com/#logo",
                },
              },
              {
                "@type": "WebSite",
                "@id": "https://www.theentrepreneurialchronicles.com/#website",
                url: "https://www.theentrepreneurialchronicles.com/",
                name: "The Entrepreneurial Chronicles",
                description:
                  "The Entrepreneurial Chronicles is a business magazine that brings inspiring stories of entrepreneurs who have turned their dreams into reality.",
                publisher: {
                  "@id":
                    "https://www.theentrepreneurialchronicles.com/#organization",
                },
                potentialAction: [
                  {
                    "@type": "SearchAction",
                    target:
                      "https://www.theentrepreneurialchronicles.com/?s={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                ],
                inLanguage: "en-US",
              },
              {
                "@type": "WebPage",
                "@id": "https://www.theentrepreneurialchronicles.com/#webpage",
                url: "https://www.theentrepreneurialchronicles.com/",
                name: "The Entrepreneurial Chronicles | Best Business Magazine",
                isPartOf: {
                  "@id":
                    "https://www.theentrepreneurialchronicles.com/#website",
                },
                about: {
                  "@id":
                    "https://www.theentrepreneurialchronicles.com/#organization",
                },
                datePublished: "2018-03-24T20:16:53+00:00",
                dateModified: "2020-02-04T20:33:08+00:00",
                description:
                  "The Entrepreneurial Chronicles is a business magazine that brings inspiring stories of entrepreneurs who have turned their dreams into reality.",
                inLanguage: "en-US",
                potentialAction: [
                  {
                    "@type": "ReadAction",
                    target: ["https://www.theentrepreneurialchronicles.com/"],
                  },
                ],
              },
            ],
          }),
        }}
      />
    </div>
  );
};

export default Home;
