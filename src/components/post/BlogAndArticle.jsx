import SectionTitle from "../elements/SectionTitle";
import PostLayoutThree from "./layout/PostLayoutThree";
import { useQuery } from "@tanstack/react-query";
import { client } from "../../client";

const BlogAndArticle = () => {
  const query = `
*[_type == "post" && categories[0]._ref == *[_type == "category" && slug.current == "blogs-and-articles"][0]._id] 
{
  title,
  slug,
  'featureImg': mainImage.asset->url,
  'category': {
    'title': categories[0]->title,
    'slug': categories[0]->slug.current
  }
} | order(_createdAt desc)[0...3] 

`;
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
          title={`${data[0].category.title}`}
          btnText="View All Blogs"
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

export default BlogAndArticle;
