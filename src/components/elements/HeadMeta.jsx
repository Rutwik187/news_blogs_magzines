import Head from "next/head";

const HeadMeta = ({ metaTitle }) => {
  return (
    <Head>
      {/* Basic metas */}
      <meta charSet="utf-8" />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="description"
        content="The Entrepreneurial Chronicles is a business magazine that brings inspiring stories of entrepreneurs who have turned their dreams into reality."
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <title>
        {" "}
        The Entrepreneurial Chronicles: A Business Magazine for Inspiring
        Entrepreneur Stories
      </title>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadMeta;
