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
    `*[_type == "magazine" && slug.current == '${slug}']{
        title,
         slug,
        'featureImg': mainImage.asset->url,
        issuuLink
    }
    `
  );
  const allArticles = await client.fetch(
    `*[_type == "post" && categories[0]._ref == *[_type == "category" && slug.current == "web-profiles"][0]._id] 
{
  title,
  slug,
  'featureImg': mainImage.asset->url,
  'category': {
    'title': categories[0]->title,
    'slug': categories[0]->slug.current
  }
} | order(_createdAt desc)[0...3] `
  );

  const currentMagArticle = await client.fetch(
    `*[_type == "post" && _id == *[_type == "magazine" && slug.current == '${slug}'][0].linkedArticle[0]._ref]{
      title,
  slug,
  'featureImg': mainImage.asset->url,


    }`
  );

  return {
    props: {
      magazineContent,
      allArticles,
      currentMagArticle,
    },
    // Add revalidate if required
  };
}

const MagazineDetails = ({
  magazineContent,
  allArticles,
  currentMagArticle,
}) => {
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
          src={`${magazineContent[0].issuuLink}`}
        />
      </div>

      <RelatedArticles
        currentMagArticle={currentMagArticle}
        allMagazinesArticles={allArticles}
      />

      <FooterTwo />
    </>
  );
};

export default MagazineDetails;
