import Head from "next/head";

const HeadMetaDynamic = ({ metaData }) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="description"
        content={
          metaData?.description ||
          "The Entrepreneurial Chronicleis a business magazine that brings inspiring stories of entrepreneurs who have turned their dreams into reality."
        }
      />
      <meta
        name="keywords"
        content={
          metaData?.keywords ||
          "business, magazines, entrepreneurs, popular-personalities"
        }
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <title>
        {metaData?.title
          ? `${metaData.title}`
          : "The Entrepreneurial Chronicle: A Business Magazine for Inspiring Entrepreneur Stories"}
      </title>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadMetaDynamic;
