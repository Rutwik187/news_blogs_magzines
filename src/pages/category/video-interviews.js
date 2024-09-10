import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import FooterTwo from "../../components/footer/FooterTwo";
import HeaderOne from "../../components/header/HeaderOne";
import Breadcrumb from "../../components/common/Breadcrumb";
import HeadMeta from "../../components/elements/HeadMeta";
import AdBanner from "../../components/common/AdBanner";
import WidgetAd from "../../components/widget/WidgetAd";
import WidgetSocialShare from "../../components/widget/WidgetSocialShare";
import WidgetPost from "../../components/widget/WidgetPost";
import WidgetCategory from "../../components/widget/WidgetCategory";
import { client } from "../../client";
import Loader from "../../components/common/Loader";
import { useState, useEffect } from "react";
import PostLayoutYT from "../../components/post/layout/PostLayoutYT";

const POSTS_PER_PAGE = 6;

const fetchPostsByCategory = async (page) => {
  const query = `*[_type == "youtubeVideo"] {
      _id,
      title,
      description,
      videoUrl,
      "slug": slug.current
    } | order(publishedAt desc)[${page * POSTS_PER_PAGE}...${
    (page + 1) * POSTS_PER_PAGE
  }]`;

  const posts = await client.fetch(query);
  return posts;
};

const PostCategory = ({ initialPosts }) => {
  const [page, setPage] = useState(0);

  const {
    data: postData,
    isLoading,
    isFetching,
    isPreviousData,
  } = useQuery({
    queryKey: ["postData", page],
    queryFn: () => fetchPostsByCategory(page),
    keepPreviousData: true,
    initialData: initialPosts, // Use initial data from SSR
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

  return (
    <>
      <HeadMeta metaTitle={"video interviews"} />
      <HeaderOne />
      <Breadcrumb aPage={"video interviews"} />

      <div className="banner banner__default bg-grey-light-three">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="post-title-wrapper">
                <h2 className="m-b-xs-0 axil-post-title hover-line">
                  Video Interviews
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
                  <PostLayoutYT
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
                {isFetching && <Loader />} {/* Show Loader while fetching */}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="post-sidebar">
                <WidgetAd />
                <WidgetSocialShare />
                <WidgetCategory cateData={postData} />
                <WidgetPost dataPost={postData} />
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

// Server-side data fetching using dehydrate for initial data hydration
export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["postData", 0], () =>
    fetchPostsByCategory(0)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      initialPosts: await fetchPostsByCategory(0), // Fetch initial posts for SSR
    },
  };
}

export default PostCategory;
