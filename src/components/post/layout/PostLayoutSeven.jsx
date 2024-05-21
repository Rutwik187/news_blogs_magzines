import Image from "next/image";
import Link from "next/link";

const PostLayoutSeven = ({ data }) => {
  return (
    <div className="content-block m-b-xs-30">
      <Link href={`/post/${data.slug.current}`}>
        <Image
          src={data.featureImg}
          alt={data?.altText || data.title}
          width={255}
          height={255}
          className="img-fluid"
        />
        <div className="grad-overlay" />
      </Link>
      <div className="media-caption">
        <div className="caption-content">
          <h3 className="axil-post-title hover-line hover-line">
            <Link href={`/post/${data.slug.current}`}>{data.title}</Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default PostLayoutSeven;
