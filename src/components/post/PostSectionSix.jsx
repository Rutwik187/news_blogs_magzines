import SectionTitle from "../elements/SectionTitle";
import PostLayoutFour from "./layout/PostLayoutFour";

import { useQuery } from "@tanstack/react-query";
import { client } from "../../client";

const PostSectionSix = () => {
  const query = `*[_type == "post" && categories[0]._ref == *[_type=="category"][4]._id][0..5] {
   title,
  slug,
  'featureImg': mainImage.asset->url,
  'author_name': author->name,
'author_img': author->image.asset->url,
  'cate': categories[0]->title,
}`;

  const { data, isLoading, error } = useQuery({
    queryKey: ["categorySixPosts"],
    queryFn: async () => {
      const response = await client.fetch(query);
      return response;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching posts</div>;

  if (!data) return null;

  return (
    <div className="related-post p-b-xs-30">
      <div className="container">
        <SectionTitle
          title={data[0]?.cate || "Recent Posts"}
          btnText="Recent Posts"
        />
        <div className="grid-wrapper">
          <div className="row">
            {data.map((post) => (
              <div className="col-lg-3 col-md-4" key={post.slug}>
                <PostLayoutFour data={post} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSectionSix;
