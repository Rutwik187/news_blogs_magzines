import Image from "next/image";
import Link from "next/link";
import React from "react";

const YoutubeVideo = ({ data, postSizeMd, postBgDark }) => {
  const videoId = data.videoUrl.includes("watch?v=")
    ? data.videoUrl.split("v=")[1]
    : data.videoUrl.split("/").pop();

  // Construct the thumbnail URL using the extracted video ID
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div
      className={`media post-block m-b-xs-30 flex flex-column justify-center `}
    >
      <Link className="align-self-center" href={`/video/${data.slug}`}>
        <Image
          style={{ maxWidth: "100%" }}
          src={thumbnailUrl}
          alt={data.altText || data.title}
          width={400}
          height={200}
          placeholder="blur"
          blurDataURL="/images/placeholder.png"
          quality={100}
          className="object-cover rounded-md max-w-full mx-auto "
        />
      </Link>

      <div className="media-body my-auto">
        <h3 className="axil-post-title hover-line hover-line color-white text-center mt-4">
          <Link href={`/video/${data.slug}`}>{data.title}</Link>
        </h3>
      </div>
    </div>
  );
};

export default YoutubeVideo;
