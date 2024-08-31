import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { client } from "../../../client"; // Your Sanity client import

const VideoCard = ({ postSizeMd, postBgDark }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const data = await client.fetch(
        `
        *[_type == "youtubeVideo"] {
          _id,
          title,
          description,
          videoUrl,
          "slug": slug.current
        }
      `
      );
      setVideos(data);
    };

    fetchVideos();
  }, []);

  if (!videos.length) {
    return <p>Loading...</p>;
  }

  // Limit the videos to display only 6 (2 rows, 3 columns)
  const displayedVideos = videos.slice(0, 4);

  return (
    <div className="container mt-4">
      <div className="row">
        {displayedVideos.map((video) => {
          // Extract YouTube video ID from the URL
          const videoId = video.videoUrl.includes("watch?v=")
            ? video.videoUrl.split("v=")[1]
            : video.videoUrl.split("/").pop();

          // Construct the thumbnail URL using the extracted video ID
          const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

          // Truncate the title to 4 words
          const limitedTitle =
            video.title.split(" ").slice(0, 10).join(" ") +
            (video.title.split(" ").length > 4 ? "..." : "");

          // Truncate the description to 80 characters
          const limitedDescription =
            video.description && video.description.length > 80
              ? `${video.description.slice(0, 80)}...`
              : video.description;

          return (
            <div key={video._id} className="col-12 col-md-6 mb-4">
              <div
                className={`media post-block ${
                  postSizeMd ? "post-block__mid" : ""
                } ${postBgDark ? "post-block__on-dark-bg" : ""}`}
              >
                <Link
                  className="align-self-center"
                  href={`/video/${video.slug}`}
                >
                  <Image
                    src={thumbnailUrl}
                    alt={video.title}
                    width={postSizeMd ? 400 : 300} // Increased image size
                    height={postSizeMd ? 225 : 170} // Increased image size
                    placeholder="blur"
                    blurDataURL="/images/placeholder.png"
                    style={{ objectFit: "cover" }}
                  />
                </Link>

                <div className="media-body">
                  <div className="post-cat-group m-b-xs-10">
                    <Link
                      className={`post-cat cat-btn ${"bg-color-blue-one"}`}
                      href={`/video/${video.slug}`}
                    >
                      Interviews
                    </Link>
                  </div>
                  <h3 className="axil-post-title hover-line hover-line color-white title-width">
                    <Link href={`/video/${video.slug}`}>{limitedTitle}</Link>
                  </h3>

                  {postSizeMd ? (
                    <p className="mid hide-in-small-devices description-width">
                      {limitedDescription}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .title-width {
          max-width: 250px; /* Adjust as needed */
          font-size: 1.6rem;
          white-space: wrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .description-width {
          max-width: 250px; /* Adjust as needed */
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `}</style>
    </div>
  );
};

export default VideoCard;
