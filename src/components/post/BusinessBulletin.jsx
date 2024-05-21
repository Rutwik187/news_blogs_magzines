import SectionTitle from "../elements/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import { client } from "../../client";
import PostLayoutTwo from "./layout/PostLayoutTwo";
import Loader from "../common/Loader";

const BusinessBulletin = () => {
  const query = `
*[_type == "post" && categories[0]._ref == *[_type == "category" && slug.current == "business-bulletin"][0]._id] 
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
} | order(_createdAt desc)[0...6] 
`;
  const { data, isLoading, error } = useQuery({
    queryKey: ["categoryThreePosts"],
    queryFn: async () => {
      const response = await client.fetch(query);
      return response;
    },
  });

  if (isLoading) return <Loader />;
  if (error) return <div>Error fetching posts</div>;

  if (!data) return null;

  return (
    <div className="section-gap section-gap-top__with-text trending-stories">
      <div className="container">
        <SectionTitle
          title={data[0]?.category.title || "Business Bulletin"}
          btnText="ALL Posts"
          btnUrl={`/category/${data[0]?.category?.slug}`}
        />
        <div className="row">
          {data.map((post, index) => (
            <div className="col-lg-6" key={index}>
              <PostLayoutTwo data={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessBulletin;
