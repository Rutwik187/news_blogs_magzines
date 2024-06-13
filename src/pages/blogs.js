import { useQuery } from "@tanstack/react-query";
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

const Blogs = () => {
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
} | order(_createdAt desc)[0...20] 
`;
  const { data, isLoading, error } = useQuery({
    queryKey: ["allPosts"],
    queryFn: async () => {
      const response = await client.fetch(query);
      return response;
    },
  });

  // if (isLoading) return <Loader />;
  // if (error) return <div>Error fetching posts</div>;

  // if (!data) return null;

  return (
    <>
      <HeadMeta
        metaTitle="Best Business Blog for the Latest News, Proven Strategies, and Insightful Analysis | The Entrepreneurial Chronicle
"
        metaDesc=" Stay ahead of the curve with our top-ranked business blog. Get access to the latest industry news, proven strategies from experts, and insightful analysis to help your business thrive.
"
      />

      <HeaderOne />

      <div className="container " style={{ marginTop: "30px" }}>
        <div className="row">
          <div className="col-lg-8">
            <div className="axil-content">
              {data?.slice(0, 8).map((post, index) => (
                <PostLayoutTwo data={post} postSizeMd={true} key={index} />
              ))}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="post-sidebar">
              <WidgetNewsletter />
              <WidgetCategory cateData={data} /> {/* Pass the fetched data */}
              <WidgetSocialShare />
              <WidgetPost dataPost={data} /> {/* Pass the fetched data */}
            </div>
          </div>
        </div>
      </div>

      <FooterTwo />
    </>
  );
};

export default Blogs;
