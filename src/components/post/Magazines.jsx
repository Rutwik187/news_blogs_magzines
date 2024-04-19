import SectionTitle from "../elements/SectionTitle";
import PostLayoutFour from "./layout/PostLayoutFour";

import { useQuery } from "@tanstack/react-query";
import { client } from "../../client";

const Magazines = () => {
  const query = `
*[_type == "post" && categories[0]._ref == *[_type == "category" && slug.current == "magazines"][0]._id] 
{
  title,
  slug,
  'featureImg': mainImage.asset->url,
  'category': {
    'title': categories[0]->title,
    'slug': categories[0]->slug.current
  }
} | order(_createdAt desc)[0...4] 
`;

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
            {data.map((post, index) => (
              <div className="col-lg-3 col-md-4" key={index}>
                <PostLayoutFour data={post} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Magazines;
