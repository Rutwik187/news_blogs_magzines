import SectionTitle from "../elements/SectionTitle";
import PostLayoutThree from "./layout/PostLayoutThree";
import { useQuery } from "@tanstack/react-query";
import { client } from "../../client";

const PostSectionTwo = () => {
  const query = `*[_type == "post" && categories[0]._ref == *[_type=="category"][1]._id][0..2] {
   title,
  slug,
  'featureImg': mainImage.asset->url,
  'author_name': author->name,
'author_img': author->image.asset->url,
  'cate': categories[0]->title,
}`;
  const { data, isLoading, error } = useQuery({
    queryKey: ["categoryTwoPosts"],
    queryFn: async () => {
      const response = await client.fetch(query);
      console.log(response);
      return response;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching posts</div>;

  if (!data) return null;

  return (
    <div className="section-gap section-gap-top__with-text top-stories bg-grey-light-three">
      <div className="container">
        {/* Use the category title from data */}
        <SectionTitle
          title={data[0]?.cate || "Recent Posts"}
          btnText="View All Posts"
        />
        <div className="row">
          <div className="col-lg-8">
            {data.slice(0, 1).map((post, index) => (
              <PostLayoutThree data={post} postSizeLg={true} key={index} />
            ))}
          </div>
          <div className="col-lg-4">
            {data.slice(1).map((post, index) => (
              <PostLayoutThree data={post} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSectionTwo;
