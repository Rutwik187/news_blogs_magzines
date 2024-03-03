import Head from "next/head";

const HeadMeta = ({ metaTitle }) => {
  return (
    <Head>
      {/* Basic metas */}
      <meta charSet="utf-8" />
      <meta name="robots" content="noindex, follow" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content="TBM Trendy News and Megazine" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <title>{`${
        metaTitle ? metaTitle : "TBM"
      } || TBM - Trendy News and Megazines`}</title>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadMeta;
