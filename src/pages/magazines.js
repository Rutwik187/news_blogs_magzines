import { useQuery } from "@tanstack/react-query";
import { client } from "../client";
import Loader from "../components/common/Loader";
import PostLayoutFour from "../components/post/layout/PostLayoutFour";
import HeaderOne from "../components/header/HeaderOne";

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
    <>
      <HeaderOne />

      <div className="related-post p-b-xs-30 mt-4">
        <div className="container">
          <div className="grid-wrapper row">
            {data.map((post, index) => (
              <PostLayoutFour data={post} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Magazines;
