import SectionTitle from "../elements/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import { client } from "../../client";
import Loader from "../common/Loader";
import VideoCard from "./layout/YoutubeVideo";
import Image from "next/image";

const VideoSection = () => {
  const query = `
    *[_type == "youtubeVideo"] | order(publishedAt desc)[0...6] {
      _id,
      title,
      description,
      videoUrl,
      "slug": slug.current
    }
  `;

  const { data, isLoading, error } = useQuery({
    queryKey: ["videos"],
    queryFn: async () => {
      const response = await client.fetch(query);
      return response;
    },
  });

  if (isLoading) return <Loader />;
  if (error) return <div>Error fetching videos</div>;

  if (!data) return null;

  return (
    <div className="section-gap section-gap-top__with-text trending-stories bg-grey-dark-one mb-4">
      <div className="container ">
        <SectionTitle
          title="Video Interviews"
          btnText="View More"
          btnUrl="/all-videos" // Updated to correct route
          pClass="title-white m-b-xs-40"
        />
        <div className="row">
          <VideoCard videos={data} postSizeMd={true} postBgDark={true} />
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
