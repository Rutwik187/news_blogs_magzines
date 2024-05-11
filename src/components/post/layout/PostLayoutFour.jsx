import Image from "next/image";
import Link from "next/link";

const PostLayoutFour = ({ data }) => {
  return (
    <div className="content-block m-b-xs-30 col-6 col-md-3">
      <Link href={`/magazine/${data.slug.current}`}>
        <Image
          src={data.featureImg}
          alt={data.title}
          width={1000}
          height={1000}
          className="img-fluid"
        />
        {/* <div className="grad-overlay" /> */}
      </Link>
      <div className="media-caption">
        <div className="caption-content">
          <h3 className="axil-post-title hover-line hover-line">
            <Link href={`/magazine/${data.slug.current}`}>{data.title}</Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default PostLayoutFour;
