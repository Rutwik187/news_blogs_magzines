import { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Loader from "../components/common/Loader";
import { client } from "../client";
import PostLayoutTwo from "../components/post/layout/PostLayoutTwo";
import WidgetNewsletter from "../components/widget/WidgetNewsletter";
import WidgetSocialShare from "../components/widget/WidgetSocialShare";
import WidgetPost from "../components/widget/WidgetPost";
import WidgetCategory from "../components/widget/WidgetCategory";
import HeaderOne from "../components/header/HeaderOne";
import FooterTwo from "../components/footer/FooterTwo";
import HeadMeta from "../components/elements/HeadMeta";

const POSTS_PER_PAGE = 6;

const Blogs = () => {
  const [page, setPage] = useState(0);

  const query = `
    *[_type == "post" && categories[0]._ref == *[_type == "category" && slug.current == "blogs-and-articles"][0]._id]
    {
      title,
      slug,
      altText,
      'featureImg': mainImage.asset->url,
      description,
      'category': {
        'title': categories[0]->title,
        'slug': categories[0]->slug.current
      }
    } | order(publishedAt desc)[${page * POSTS_PER_PAGE}...${
    (page + 1) * POSTS_PER_PAGE
  }]
  `;

  const { data, isLoading, error, isFetching, isPreviousData } = useQuery({
    queryKey: ["allPosts", page],
    queryFn: async () => {
      const response = await client.fetch(query);
      return response;
    },
    keepPreviousData: true,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const handleNextPage = () => {
    if (!isPreviousData && data?.length === POSTS_PER_PAGE) {
      setPage((old) => old + 1);
    }
  };

  const handlePreviousPage = () => {
    setPage((old) => Math.max(old - 1, 0));
  };

  return (
    <>
      <HeadMeta
        metaTitle="Best Business Blog for the Latest News, Proven Strategies, and Insightful Analysis | The Entrepreneurial Chronicle"
        metaDesc="Stay ahead of the curve with our top-ranked business blog. Get access to the latest industry news, proven strategies from experts, and insightful analysis to help your business thrive."
      />

      <HeaderOne />

      <div className="container" style={{ marginTop: "30px" }}>
        <div className="row">
          <div className="col-lg-8">
            <div className="axil-content">
              {isLoading ? (
                <Loader />
              ) : error ? (
                <div>Error fetching posts</div>
              ) : (
                data?.map((post, index) => (
                  <PostLayoutTwo data={post} postSizeMd={true} key={index} />
                ))
              )}
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
                disabled={isPreviousData || data?.length < POSTS_PER_PAGE}
              >
                Next Page
              </button>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="post-sidebar">
              <WidgetNewsletter />
              <WidgetCategory />
              <WidgetSocialShare />
              <WidgetPost />
            </div>
          </div>
        </div>
      </div>

      <FooterTwo />
    </>
  );
};

export default Blogs;
