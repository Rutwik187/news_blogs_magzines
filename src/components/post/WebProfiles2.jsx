import SectionTitle from "../elements/SectionTitle";
import PostVideoOne from "./layout/PostVideoOne";
import PostVideoTwo from "./layout/PostVideoTwo";
import { useQuery } from "@tanstack/react-query";
import { client } from "../../client";
import Loader from "../common/Loader";
import PostLayoutSeven from "./layout/PostLayoutSeven";

const WebProfiles2 = () => {
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

} | order(_createdAt desc)[0...5] 
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
    <div className="axil-video-posts section-gap section-gap-top__with-text bg-grey-dark-one">
      <div className="container">
        <SectionTitle
          btnUrl={`/category/${data[0]?.category?.slug}`}
          title={`${data[0]?.category.title}` || "Web Profiles"}
          btnText="Read all Articles"
          pClass="title-white m-b-xs-40"
        />
        <div className="grid-wrapper">
          <div className="row">
            {data.map((post, index) => (
              <div className="col-lg-3 col-md-4" key={index}>
                <PostLayoutSeven data={post} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebProfiles2;
