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

const PostSectionFive = ({ postData, adBanner, pClass }) => {
  const query = `*[_type == "post" && categories[0]._ref == *[_type=="category"][5]._id][0..5] {
   title,
  slug,
  'featureImg': mainImage.asset->url,
  'author_name': author->name,
'author_img': author->image.asset->url,
  'cate': categories[0]->title,
}`;
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
          {adBanner === true ? <AdBanner /> : ""}
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

export default PostSectionFive;
