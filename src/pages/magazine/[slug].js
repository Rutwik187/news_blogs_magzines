import HeaderOne from "../../components/header/HeaderOne";
import FooterTwo from "../../components/footer/FooterTwo";
import RelatedArticles from "../../components/post/RelatedArticles";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";

import { client } from "../../client";
import Loader from "../../components/common/Loader";
import HeadMetaDynamic from "../../components/elements/HeadMetaDynamic";
import Head from "next/head";

const fetchMagazineContent = async (slug) => {
  const magazineContentQuery = `*[_type == "magazine" && slug.current == '${slug}']{
    title,
    slug,
    keywords,
    description,
    'featureImg': mainImage.asset->url,
    issuuLink
  }`;
  return await client.fetch(magazineContentQuery);
};

const fetchAllArticles = async () => {
  const allArticlesQuery = `*[_type == "post" && categories[0]._ref == *[_type == "category" && slug.current == "web-profiles"][0]._id] {
    title,
    slug,
    'featureImg': mainImage.asset->url,
    'category': {
      'title': categories[0]->title,
      'slug': categories[0]->slug.current
    }
  } | order(_createdAt desc)[0...3]`;
  return await client.fetch(allArticlesQuery);
};

const fetchCurrentMagArticle = async (slug) => {
  const currentMagArticleQuery = `*[_type == "post" && _id == *[_type == "magazine" && slug.current == '${slug}'][0].linkedArticle[0]._ref]{
    title,
    slug,
    'featureImg': mainImage.asset->url
  }`;
  return await client.fetch(currentMagArticleQuery);
};

const MagazineDetails = ({
  initialMagazineContent,
  initialAllArticles,
  initialCurrentMagArticle,
}) => {
  const router = useRouter();
  const { slug } = router.query;

  const {
    data: magazineContent,
    isLoading: isLoadingMagazine,
    error: errorMagazine,
  } = useQuery({
    queryKey: ["magazineContent", slug],
    queryFn: () => fetchMagazineContent(slug),
    enabled: !!slug,
    initialData: initialMagazineContent,
  });

  const {
    data: allArticles,
    isLoading: isLoadingAllArticles,
    error: errorAllArticles,
  } = useQuery({
    queryKey: ["web-profiles"],
    queryFn: fetchAllArticles,
    initialData: initialAllArticles,
  });

  const {
    data: currentMagArticle,
    isLoading: isLoadingCurrentArticle,
    error: errorCurrentArticle,
  } = useQuery({
    queryKey: ["currentMagArticle", slug],
    queryFn: () => fetchCurrentMagArticle(slug),
    enabled: !!slug,
    initialData: initialCurrentMagArticle,
  });

  if (isLoadingMagazine || isLoadingAllArticles || isLoadingCurrentArticle)
    return <Loader />;
  if (errorMagazine)
    return <div>Error fetching magazine content: {errorMagazine.message}</div>;
  if (errorAllArticles)
    return <div>Error fetching articles: {errorAllArticles.message}</div>;
  if (errorCurrentArticle)
    return (
      <div>
        Error fetching current magazine article: {errorCurrentArticle.message}
      </div>
    );
  if (!magazineContent || magazineContent.length === 0)
    return <div>No magazine content found</div>;

  const { issuuLink } = magazineContent[0];

  return (
    <>
      <HeadMetaDynamic metaData={magazineContent[0]} />

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
          src={issuuLink}
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

export async function getStaticProps({ params }) {
  const { slug } = params;

  const initialMagazineContent = await fetchMagazineContent(slug);
  const initialAllArticles = await fetchAllArticles();
  const initialCurrentMagArticle = await fetchCurrentMagArticle(slug);

  return {
    props: {
      initialMagazineContent,
      initialAllArticles,
      initialCurrentMagArticle,
    },
  };
}

export async function getStaticPaths() {
  const slugsQuery = `*[_type == "magazine"].slug.current`;
  const slugs = await client.fetch(slugsQuery);

  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}
