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

const fetchPostsByCategory = async (category) => {
  const params = { category };

  console.log(params.category);
  const query = `*[_type == "post" && categories[0]._ref == *[_type == "category" && slug.current == "${params.category}"][0]._id] {
  title,
  slug,
  'featureImg': mainImage.asset->url,
    description,
  'category': {
    'title': categories[0]->title,
    'slug': categories[0]->slug.current
  }

} | order(_createdAt desc) `;

  const posts = await client.fetch(query, params);
  return posts;
};

const PostCategory = ({ initialPostData, initialAllPosts }) => {
  const { data: postData } = useQuery({
    queryKey: ["postData", initialPostData],
    queryFn: () => fetchPostsByCategory(initialPostData.category),
  });
  const { data: allPosts = initialAllPosts } = useQuery({
    queryKey: ["allPosts"],
    queryFn: fetchPostsByCategory,
  });

  if (!postData || !allPosts) {
    return <Loader />;
  }

  const cateContent = postData[0];

  return (
    <>
      <HeadMeta metaTitle={cateContent.category.title} />
      <HeaderOne />
      <Breadcrumb aPage={cateContent.category.title} />
      {/* Banner Start here */}
      <div className="banner banner__default bg-grey-light-three">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="post-title-wrapper">
                <h2 className="m-b-xs-0 axil-post-title hover-line">
                  {cateContent.category.title}
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

  await queryClient.prefetchQuery(["postData", { category }], () =>
    fetchPostsByCategory(category)
  );
  await queryClient.prefetchQuery(["allPosts"], fetchPostsByCategory);

  return {
    props: {
      initialPostData: { category },
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
