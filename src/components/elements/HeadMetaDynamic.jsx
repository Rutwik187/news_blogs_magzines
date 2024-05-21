import Head from "next/head";

const HeadMetaDynamic = ({ metaData }) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="description"
        content={metaData?.description || "Default description"}
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <title>
        {metaData?.title ? `TEC: ${metaData.title}` : "TEC: Magazine"}
      </title>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadMetaDynamic;
