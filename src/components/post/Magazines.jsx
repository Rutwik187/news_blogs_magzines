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
 
} | order(_createdAt desc)
`;

  const { data, isLoading, error } = useQuery({
    queryKey: ["allMagazines"],
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
        <div className="grid-wrapper row">
          {data.map((post, index) => (
            <PostLayoutFour data={post} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Magazines;
