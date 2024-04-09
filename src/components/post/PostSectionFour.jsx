import SectionTitle from "../elements/SectionTitle";
import PostVideoOne from "./layout/PostVideoOne";
import PostVideoTwo from "./layout/PostVideoTwo";
import { useQuery } from "@tanstack/react-query";
import { client } from "../../client";

const PostSectionFour = () => {
  const query = `*[_type == "post" && categories[0]._ref == *[_type=="category"][3]._id][0..5] {
   title,
  slug,
  'featureImg': mainImage.asset->url,
  'cate': categories[0]->title,
}`;
  const { data, isLoading, error } = useQuery({
    queryKey: ["categoryFourPosts"],
    queryFn: async () => {
      const response = await client.fetch(query);
      return response;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching posts</div>;

  if (!data) return null;

  return (
    <div className="axil-video-posts section-gap section-gap-top__with-text bg-grey-dark-one">
      <div className="container">
        <SectionTitle
          title={data[0]?.cate || "Trending Stories"}
          btnText="Read all Magazines"
          pClass="title-white m-b-xs-40"
        />
        <div className="row">
          <div className="col-lg-8">
            {data.slice(0, 1).map((post, index) => (
              <PostVideoOne data={post} key={index} />
            ))}
          </div>
          <div className="col-lg-4">
            {data.slice(1).map((post, index) => (
              <PostVideoTwo data={post} videoIcon={true} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSectionFour;
