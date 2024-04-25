import SectionTitle from "../elements/SectionTitle";
import PostLayoutFour from "./layout/PostLayoutFour";

import { useQuery } from "@tanstack/react-query";
import { client } from "../../client";
import Loader from "../common/Loader";

const Magazines = () => {
  const query = `
*[_type == "magazine"] 
{
  title,
  slug,
  'featureImg': mainImage.asset->url,
 
} | order(_createdAt desc)[0...4] 
`;

  const { data, isLoading, error } = useQuery({
    queryKey: ["magazines"],
    queryFn: async () => {
      const response = await client.fetch(query);
      return response;
    },
  });

  if (isLoading) return <Loader />;
  if (error) return <div>Error fetching posts</div>;

  if (!data) return null;

  return (
    <div className="related-post p-b-xs-30 mt-4">
      <div className="container">
        <SectionTitle title={"Magazines"} btnText="View All Magazines" />
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
