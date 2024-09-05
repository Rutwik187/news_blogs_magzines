import SectionTitle from "../elements/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import { client } from "../../client";
import Loader from "../common/Loader";
import YoutubeVideo from "./layout/YoutubeVideo";

const VideoSection = () => {
  const query = `
        *[_type == "youtubeVideo"] {
          _id,
          title,
          description,
          videoUrl,
          "slug": slug.current
        } | order(publishedAt desc)[0...4] 
`;

  const { data, isLoading, error } = useQuery({
    queryKey: ["video-interviews"],
    queryFn: async () => {
      const response = await client.fetch(query);
      return response;
    },
  });

  if (isLoading) return <Loader />;
  if (error) return <div>Error fetching posts</div>;

  if (!data) return null;

  return (
    <div className="section-gap section-gap-top__with-text trending-stories bg-grey-dark-one">
      <div className="container">
        <SectionTitle
          title="Video Interviews"
          btnText="View More"
          btnUrl="/category/video-interviews"
          pClass="title-white m-b-xs-40"
        />
        <div className="row">
          {data.map((post, index) => (
            <div className="col-lg-6" key={index}>
              <YoutubeVideo data={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
