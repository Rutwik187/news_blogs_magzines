import AdBanner from "../common/AdBanner";
import WidgetAd from "../widget/WidgetAd";
import WidgetCategory from "../widget/WidgetCategory";
import WidgetInstagram from "../widget/WidgetInstagram";
import WidgetNewsletter from "../widget/WidgetNewsletter";
import WidgetPost from "../widget/WidgetPost";
import WidgetSocialShare from "../widget/WidgetSocialShare";
import PostLayoutTwo from "./layout/PostLayoutTwo";

import { useQuery } from "@tanstack/react-query";
import { client } from "../../client";
import SectionTitle from "../elements/SectionTitle";

const MasterTalks = ({ postData, adBanner, pClass }) => {
  const query = `
*[_type == "post" && categories[0]._ref == *[_type == "category" && slug.current == "master-talks"][0]._id] 
{
  title,
  slug,
  'featureImg': mainImage.asset->url,
  'category': {
    'title': categories[0]->title,
    'slug': categories[0]->slug.current
  }
} | order(_createdAt desc)[0...5] 
`;
  const { data, isLoading, error } = useQuery({
    queryKey: ["categoryFivePosts"],
    queryFn: async () => {
      const response = await client.fetch(query);
      return response;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching posts</div>;

  if (!data) return null;
  return (
    <div className="container " style={{ marginTop: "30px" }}>
      <div className="row">
        <div className="col-lg-8">
          <SectionTitle
            title={data[0]?.category.title || "Business Bulletin"}
            btnText="ALL Posts"
            btnUrl={`/category/${data[0].category?.slug}`}
          />
          <div className="axil-content">
            {data.slice(0, 8).map((post, index) => (
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
  );
};

export default MasterTalks;
