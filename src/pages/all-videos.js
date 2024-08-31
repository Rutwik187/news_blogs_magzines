// pages/all-videos.js

import { useQuery } from "@tanstack/react-query";
import { client } from "../client";
import Loader from "../components/common/Loader"; // Update the path as necessary
import Link from "next/link";
import Image from "next/image";

const AllVideos = () => {
  const query = `
    *[_type == "youtubeVideo"] {
      _id,
      title,
      description,
      videoUrl,
      "slug": slug.current
    }
  `;

  const { data, isLoading, error } = useQuery({
    queryKey: ["all-videos"],
    queryFn: async () => {
      const response = await client.fetch(query);
      return response;
    },
  });

  if (isLoading) return <Loader />;
  if (error) return <div>Error fetching videos</div>;

  if (!data) return null;

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">All Videos</h1>
      <div className="row">
        {data.map((video) => (
          <div key={video._id} className="col-12 col-md-6 mb-4">
            <div className="media post-block">
              <Link href={`/video/${video.slug}`}>
                <Image
                  src={`https://img.youtube.com/vi/${
                    video.videoUrl.split("v=")[1]
                  }/hqdefault.jpg`}
                  alt={video.title}
                  width={400}
                  height={225}
                  placeholder="blur"
                  blurDataURL="/images/placeholder.png"
                  style={{ objectFit: "cover" }}
                />
              </Link>
              <div className="media-body">
                <h3 className="axil-post-title hover-line color-white">
                  <Link href={`/video/${video.slug}`}>{video.title}</Link>
                </h3>
                <p>{video.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllVideos;
