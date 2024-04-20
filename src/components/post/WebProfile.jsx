import SectionTitle from "../elements/SectionTitle";
import PostLayoutOne from "./layout/PostLayoutOne";
import PostLayoutTwo from "./layout/PostLayoutTwo";
import { useQuery } from "@tanstack/react-query";
import { client } from "../../client";
import Loader from "../common/Loader";

const WebProfile = () => {
  const query = `
*[_type == "post" && categories[0]._ref == *[_type == "category" && slug.current == "web-profiles"][0]._id] 
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
    queryKey: ["web-profiles"],
    queryFn: async () => {
      const response = await client.fetch(query);
      return response;
    },
  });

  if (isLoading) return <Loader />;
  if (error) return <div>Error fetching posts</div>;

  if (!data) return null;

  return (
    <div className="recent-news-wrapper section-gap p-t-xs-15 p-t-sm-60">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <PostLayoutOne data={data[0]} />
          </div>
          <div className="col-lg-6">
            <div className="axil-recent-news">
              <SectionTitle
                title={`${data[0].category.title}`} // Dynamic title
                btnUrl={`/category/${data[0].category?.slug}`}
                btnText="all posts"
                pClass="m-b-xs-30"
              />
              <div className="axil-content">
                {data.slice(1).map((post, index) => (
                  <PostLayoutTwo data={post} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebProfile;
