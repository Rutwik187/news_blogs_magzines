import Image from "next/image";
import Link from "next/link";
import { slugify } from "../../../utils";

const PostVideoThree = ({ data, imgWidth, imgHeight }) => {
  return (
    <div className="axil-img-container flex-height-container video-container__type-2 m-b-xs-30">
      <Link className="d-block h-100" href={`/post/${data.slug.current}`}>
        <Image
          src={data.featureImg}
          alt={data.title}
          width={imgWidth ?? 540}
          height={imgHeight ?? 690}
          className="w-100"
        />
        <div className="grad-overlay grad-overlay__transparent" />
        <div className="video-popup video-play-btn" />
      </Link>

      <div className="media post-block grad-overlay__transparent position-absolute">
        <div className="media-body media-body__big">
          <div className="axil-media-bottom mt-auto">
            <div className="post-cat-group m-b-xs-10">
              <Link
                className={`post-cat cat-btn btn-big ${
                  data.cate_bg ?? "bg-color-blue-one"
                }`}
                href={`/category/${slugify(data.cate)}`}
              >
                {data.cate}
              </Link>
            </div>
            <h3 className="axil-post-title hover-line">
              <Link href={`/post/${data.slug.current}`}>{data.title}</Link>
            </h3>
          </div>
        </div>
        {/* End of .media-body */}
      </div>
      {/* End of .post-block */}
    </div>
  );
};

export default PostVideoThree;
