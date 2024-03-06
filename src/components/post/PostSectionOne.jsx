import SectionTitle from "../elements/SectionTitle";
import PostLayoutOne from "./layout/PostLayoutOne";
import PostLayoutTwo from "./layout/PostLayoutTwo";
import { useQuery } from "@tanstack/react-query";
import { client } from "../../client";

const PostSectionOne = () => {
  const query = `
*[_type == "magpost" && references(categories[0]._ref)] {
  title,
  slug,
  'featureImg': mainImage.asset->url,
  'author_name': author->name,
  'author_img': author->image.asset->url,
  'cate': categories[0]->title
}
`;

  // Execute this query using your Sanity client (client.fetch(query))

  // Execute this query using your Sanity client (client.fetch(query))

  //   const query = `*[_type == "magpost" && magcategory[0]._ref == *[_type=="magcategory"][0]._id] {
  //   title,
  //   slug,
  //   'featureImg': mainImage.asset->url,
  //   'author_name': author->name,
  //   'author_img': author->image.asset->url,
  //   'cate': magcategory[0]->title,
  // }`;

  const { data, isLoading, error } = useQuery({
    queryKey: ["magzineOnePosts"],
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
    <div className="recent-news-wrapper section-gap p-t-xs-15 p-t-sm-60">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <PostLayoutOne data={data[0]} />
          </div>
          <div className="col-lg-6">
            <div className="axil-recent-news">
              <SectionTitle
                title={data[0]?.cate || "Recent News"} // Dynamic title
                btnText="ALL RECENT NEWS"
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

export default PostSectionOne;
