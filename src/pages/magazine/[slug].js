import HeadMeta from "../../components/elements/HeadMeta";
import HeaderOne from "../../components/header/HeaderOne";
import FooterTwo from "../../components/footer/FooterTwo";
import RelatedArticles from "../../components/post/RelatedArticles";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";

import { client } from "../../client";
import Loader from "../../components/common/Loader";

const MagazineDetails = () => {
  const router = useRouter();
  const { slug } = router.query;

  const magazineContentQuery = `*[_type == "magazine" && slug.current == '${slug}']{
    title,
    slug,
    'featureImg': mainImage.asset->url,
    issuuLink
  }`;

  const allArticlesQuery = `*[_type == "post" && categories[0]._ref == *[_type == "category" && slug.current == "web-profiles"][0]._id] {
    title,
    slug,
    'featureImg': mainImage.asset->url,
    'category': {
      'title': categories[0]->title,
      'slug': categories[0]->slug.current
    }
  } | order(_createdAt desc)[0...3]`;

  const currentMagArticleQuery = `*[_type == "post" && _id == *[_type == "magazine" && slug.current == '${slug}'][0].linkedArticle[0]._ref]{
    title,
    slug,
    'featureImg': mainImage.asset->url
  }`;

  const {
    data: magazineContent,
    isLoading: isLoadingMagazine,
    error: errorMagazine,
  } = useQuery({
    queryKey: ["magazineContent", slug],
    queryFn: async () => {
      if (!slug) return null;
      const response = await client.fetch(magazineContentQuery);
      return response;
    },
    enabled: !!slug, // Ensure the query only runs when slug is defined
  });

  const {
    data: allArticles,
    isLoading: isLoadingAllArticles,
    error: errorAllArticles,
  } = useQuery({
    queryKey: ["web-profiles"],
    queryFn: async () => {
      const response = await client.fetch(allArticlesQuery);
      return response;
    },
  });

  const {
    data: currentMagArticle,
    isLoading: isLoadingCurrentArticle,
    error: errorCurrentArticle,
  } = useQuery({
    queryKey: ["currentMagArticle", slug],
    queryFn: async () => {
      if (!slug) return null;
      const response = await client.fetch(currentMagArticleQuery);
      return response;
    },
    enabled: !!slug, // Ensure the query only runs when slug is defined
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
  if (!magazineContent) return <div>No magazine content found</div>;

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
