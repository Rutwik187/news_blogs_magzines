import SectionTitle from "../elements/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import { client } from "../../client";
import PostLayoutTwo from "./layout/PostLayoutTwo";

const PostSectionThree = () => {
  const query = `*[_type == "post" && categories[0]._ref == *[_type=="category"][2]._id][0..3] {
   title,
  slug,
  'featureImg': mainImage.asset->url,
  'author_name': author->name,
'author_img': author->image.asset->url,
  'cate': categories[0]->title,
}`;
  const { data, isLoading, error } = useQuery({
    queryKey: ["categoryThreePosts"],
    queryFn: async () => {
      const response = await client.fetch(query);
      return response;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching posts</div>;

  if (!data) return null;

  return (
    <div className="section-gap section-gap-top__with-text trending-stories">
      <div className="container">
        <SectionTitle
          title={data[0]?.cate || "Trending Stories"}
          btnText="ALL TRENDING STORIES"
        />
        <div className="row">
          {data.map((post) => (
            <div className="col-lg-6" key={post.slug}>
              <PostLayoutTwo data={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostSectionThree;
