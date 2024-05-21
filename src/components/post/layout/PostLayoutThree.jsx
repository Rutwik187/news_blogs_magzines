import Image from "next/image";
import Link from "next/link";

const PostLayoutThree = ({ data, postSizeLg, pClass, videoPost }) => {
  return (
    <div className={`axil-img-container ${pClass ?? "m-b-xs-30"}`}>
      <Link
        className={`d-block ${videoPost === true ? "h-100" : ""}`}
        href={`/post/${data.slug.current}`}
      >
        <Image
          src={data.featureImg}
          alt={data?.altText || data.title}
          width={postSizeLg === true ? 730 : 350}
          height={postSizeLg === true ? 550 : 260}
          className="w-100"
        />
        <div
          className={`grad-overlay ${
            videoPost === true ? "grad-overlay__transparent" : ""
          }`}
        />
      </Link>
      <div className="media post-block position-absolute">
        <div
          className={`media-body ${
            postSizeLg === true ? "media-body__big" : ""
          }`}
        >
          <div className="post-cat-group m-b-xs-10">
            <Link
              className={`post-cat cat-btn ${"bg-color-blue-one"}`}
              href={`/category/${data.category?.slug}`}
            >
              {data.category?.title}
            </Link>
          </div>
          <div className="axil-media-bottom">
            <h3 className="axil-post-title hover-line hover-line">
              <Link href={`/post/${data.slug.current}`}>{data.title}</Link>
            </h3>
          </div>
        </div>
      </div>
      {/* End of .post-block */}
    </div>
  );
};

export default PostLayoutThree;
