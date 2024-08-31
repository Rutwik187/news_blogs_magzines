import Image from "next/image";
import WidgetAd from "../../widget/WidgetAd";
import WidgetInstagram from "../../widget/WidgetInstagram";
import WidgetNewsletter from "../../widget/WidgetNewsletter";
import WidgetPost from "../../widget/WidgetPost";
import WidgetSocialShare from "../../widget/WidgetSocialShare";
import { RichTextComponent } from "../RichTextComponent";
import SocialShareBottom from "./elements/SocialShareBottom";
import SocialShareSide from "./elements/SocialShareSide";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

const VideoDetailLayout = ({ videoData, allVideos }) => {
  // Extract YouTube video ID from the URL
  const videoId = videoData.videoUrl.includes("watch?v=")
    ? videoData.videoUrl.split("v=")[1]
    : videoData.videoUrl.split("/").pop();

  // Construct the iframe URL using the extracted video ID
  const iframeUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <>
      <div className="video-detail-wrapper p-t-xs-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <main className="site-main">
                <article className="video-details">
                  <div className="single-video-wrapper">
                    <SocialShareSide />
                    <h2 className="axil-post-title hover-line">
                      {videoData?.title}
                    </h2>
                  </div>

                  <div
                    className="embed-responsive w-100"
                    style={{ position: "relative", paddingBottom: "56.25%" }}
                  >
                    <iframe
                      src={iframeUrl}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={videoData.title}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                      }}
                    ></iframe>
                  </div>

                  <PortableText
                    value={videoData?.body}
                    components={RichTextComponent}
                  />
                </article>
                <SocialShareBottom />
                <hr className="m-t-xs-50 m-b-xs-60" />

                {/* Related Videos */}
                <div className="related-videos mb-4">
                  <h4 className="mb-3">Related Videos</h4>
                  <div className="list-group">
                    {allVideos.map((relatedVideo) => {
                      // Extract YouTube video ID from the URL
                      const relatedVideoId = relatedVideo.videoUrl.includes(
                        "watch?v="
                      )
                        ? relatedVideo.videoUrl.split("v=")[1]
                        : relatedVideo.videoUrl.split("/").pop();

                      // Construct the thumbnail URL using the extracted video ID
                      const relatedThumbnailUrl = `https://img.youtube.com/vi/${relatedVideoId}/hqdefault.jpg`;

                      return (
                        <Link
                          key={relatedVideo._id}
                          href={`/video/${relatedVideo.slug}`}
                          className="list-group-item list-group-item-action d-flex align-items-center gap-3 p-2 border-0 shadow-sm rounded mb-3"
                        >
                          <Image
                            src={relatedThumbnailUrl}
                            alt={relatedVideo.title}
                            width={100}
                            height={95}
                            className="rounded"
                            style={{ objectFit: "cover" }}
                          />
                          <span
                            className="fw-bold text-truncate"
                            style={{ maxWidth: "80%" }}
                          >
                            {relatedVideo.title}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </main>
            </div>
            <div className="col-lg-4">
              <div className="video-sidebar">
                <WidgetNewsletter />
                <WidgetSocialShare />
                <WidgetPost dataPost={allVideos} />
                {/* <WidgetInstagram /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoDetailLayout;
