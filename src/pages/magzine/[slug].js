import HeadMeta from "../../components/elements/HeadMeta";
import FooterOne from "../../components/footer/FooterOne";
import HeaderOne from "../../components/header/HeaderOne";
import PostLayoutOne from "../../components/post/layout/PostLayoutOne"; // Adjust the import path
import { client } from "../../client";
import Image from "next/image";

export async function getStaticPaths() {
  const allSlugsQuery = `*[_type == "magpost"]{ 'slug': slug.current }`;
  const slugs = await client.fetch(allSlugsQuery);

  const paths = slugs.map((slug) => ({ params: { slug: slug.slug } }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const magpostContent = await client.fetch(
    `*[_type == "magpost" && slug.current == '${slug}'][0]`
  );

  // Handle the case where magpostContent is null or undefined
  if (!magpostContent) {
    return {
      notFound: true,
    };
  }

  // Log the received magpostContent data
  console.log("Magpost Content:", magpostContent);

  return {
    props: {
      magpostContent,
    },
    // Add revalidate if required
  };
}

const MagzineSlug = ({ magpostContent }) => {
  return (
    <>
      <HeadMeta metaTitle="Magpost Details" />
      <HeaderOne />
      {/* <PostLayoutOne data={magpostContent} /> */}
      <div
        style={{
          position: "relative",
          paddingTop: "max(60%,326px)",
          height: 0,
          width: "80%",
          margin: "0 auto",
        }}
      >
        <Image
          src="/images/placeholder.png" // Provide a placeholder image URL
          alt="Placeholder"
          layout="fill"
          objectFit="cover"
        />
        <iframe
          allow="clipboard-write"
          sandbox="allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-modals allow-popups-to-escape-sandbox allow-forms"
          allowFullScreen={true}
          style={{
            position: "absolute",
            border: "none",
            width: "100%",
            height: "100%",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
          src={magpostContent.htmlContent[0].children[0].text}
        />
      </div>
      {console.log(magpostContent)}
      <FooterOne />
    </>
  );
};

export default MagzineSlug;
