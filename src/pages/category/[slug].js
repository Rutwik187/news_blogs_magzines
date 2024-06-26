import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import FooterTwo from "../../components/footer/FooterTwo";
import HeaderOne from "../../components/header/HeaderOne";
import Breadcrumb from "../../components/common/Breadcrumb";
import HeadMeta from "../../components/elements/HeadMeta";
import AdBanner from "../../components/common/AdBanner";
import WidgetAd from "../../components/widget/WidgetAd";
import WidgetSocialShare from "../../components/widget/WidgetSocialShare";
import WidgetPost from "../../components/widget/WidgetPost";
import PostLayoutTwo from "../../components/post/layout/PostLayoutTwo";
import WidgetCategory from "../../components/widget/WidgetCategory";
import { client } from "../../client";
import Loader from "../../components/common/Loader";
import { useState, useEffect } from "react";

const POSTS_PER_PAGE = 6;

const fetchPostsByCategory = async (category, page) => {
  const query = `*[_type == "post" && categories[0]._ref == *[_type == "category" && slug.current == "${category}"][0]._id] {
    title,
    slug,
    altText,
    'featureImg': mainImage.asset->url,
    publishedAt,
    description,
    'category': {
      'title': categories[0]->title,
      'slug': categories[0]->slug.current
    }
  } | order(publishedAt desc)[${page * POSTS_PER_PAGE}...${
    (page + 1) * POSTS_PER_PAGE
  }]`;

  const posts = await client.fetch(query);
  return posts;
};

const PostCategory = ({ initialCategory, initialAllPosts }) => {
  const [page, setPage] = useState(0);

  const {
    data: postData,
    isLoading,
    isPreviousData,
  } = useQuery({
    queryKey: ["postData", initialCategory, page],
    queryFn: () => fetchPostsByCategory(initialCategory, page),
    keepPreviousData: true,
  });

  const { data: allPosts } = useQuery({
    queryKey: ["allPosts"],
    queryFn: () => fetchPostsByCategory(initialCategory, 0),
    initialData: initialAllPosts,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const handleNextPage = () => {
    if (!isPreviousData && postData?.length === POSTS_PER_PAGE) {
      setPage((old) => old + 1);
    }
  };

  const handlePreviousPage = () => {
    setPage((old) => Math.max(old - 1, 0));
  };

  if (isLoading || !postData) {
    return <Loader />;
  }

  const cateContent = postData[0];

  return (
    <>
      <HeadMeta metaTitle={cateContent?.category?.title || "Web Profiles"} />
      <HeaderOne />
      <Breadcrumb aPage={cateContent?.category?.title || "Web Profile"} />

      <div className="banner banner__default bg-grey-light-three">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="post-title-wrapper">
                <h2 className="m-b-xs-0 axil-post-title hover-line">
                  {cateContent?.category.title || "Web Profiles"}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Banner End here */}
      <div className="random-posts section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="axil-content">
                {postData.map((data) => (
                  <PostLayoutTwo
                    data={data}
                    postSizeMd={true}
                    key={data.slug.current}
                  />
                ))}
              </div>
              <div className="pagination">
                <button
                  className="btn btn-primary btn-small"
                  onClick={handlePreviousPage}
                  disabled={page === 0}
                >
                  Previous Page
                </button>
                <span>Page {page + 1}</span>
                <button
                  className="btn btn-primary btn-small"
                  onClick={handleNextPage}
                  disabled={isPreviousData || postData?.length < POSTS_PER_PAGE}
                >
                  Next Page
                </button>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="post-sidebar">
                <WidgetAd />
                <WidgetSocialShare />
                <WidgetCategory cateData={allPosts} />
                <WidgetPost dataPost={allPosts} />
                <WidgetAd
                  img="/images/clientbanner/clientbanner3.jpg"
                  height={492}
                  width={320}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterTwo />
    </>
  );
};

export default PostCategory;

export const getStaticProps = async ({ params }) => {
  const queryClient = new QueryClient();
  const category = params.slug;

  await queryClient.prefetchQuery(["postData", category, 0], () =>
    fetchPostsByCategory(category, 0)
  );
  await queryClient.prefetchQuery(["allPosts"], () =>
    fetchPostsByCategory(category, 0)
  );

  return {
    props: {
      initialCategory: category,
      initialAllPosts: dehydrate(queryClient),
    },
  };
};

export const getStaticPaths = async () => {
  const query = `*[_type == "category"]`;
  const categories = await client.fetch(query);

  const paths = categories.map((category) => ({
    params: { slug: category.slug.current },
  }));

  return { paths, fallback: "blocking" };
};
