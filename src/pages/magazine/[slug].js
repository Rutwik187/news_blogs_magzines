import HeadMeta from "../../components/elements/HeadMeta";
import HeaderOne from "../../components/header/HeaderOne";

import { client } from "../../client";
import FooterTwo from "../../components/footer/FooterTwo";
import RelatedArticles from "../../components/post/RelatedArticles";

export async function getStaticPaths() {
  const allSlugsQuery = `*[_type == "magazine"]{ 'slug': slug.current }`; // Removed condition here
  const slugs = await client.fetch(allSlugsQuery);

  const paths = slugs.map((slug) => ({ params: { slug: slug.slug } }));

  return {
    paths,
    fallback: "blocking", // Or false, refer to Next.js docs
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const magazineContent = await client.fetch(
    `*[_type == "magazine" && slug.current == '${slug}'][0]  {
    title,
    slug,
    'featureImg': mainImage.asset->url,
    body}
    `
  );
  const allMagazines = await client.fetch(`*[_type == "magazine"]`); // Fetch all posts

  return {
    props: {
      magazineContent,
      allMagazines,
    },
    // Add revalidate if required
  };
}

const MagazineDetails = ({ magazineContent, allMagazines }) => {
  return (
    <>
      <HeadMeta metaTitle="Magazines" />
      <HeaderOne />
      <div
        style={{
          position: "relative",
          paddingTop: "max(60%,326px)",
          height: 0,
          width: "100%",
        }}
      >
        <iframe
          allow="clipboard-write"
          sandbox="allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-modals allow-popups-to-escape-sandbox allow-forms"
          allowfullscreen="true"
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
          src="https://e.issuu.com/embed.html?d=final_file&hideIssuuLogo=true&u=thebusiness-masters.com"
        />
      </div>

      <RelatedArticles />

      <FooterTwo />
    </>
  );
};

export default MagazineDetails;
