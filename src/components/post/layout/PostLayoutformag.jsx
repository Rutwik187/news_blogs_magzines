import Image from "next/image";
import Link from "next/link";

const PostLayoutformag = ({ data }) => {
  return (
    <div className=" ">
      <Link href={`/magazine/${data.slug.current}`}>
        <Image
          src={data.featureImg}
          alt={data.title}
          width={1000}
          height={1000}
          className="img-fluid"
        />
        <div className="grad-overlay" />
      </Link>
      <div className="media-caption">
        <div className="">
          <h4 className="  hover-line hover-line">
            <Link href={`/magazine/${data.slug.current}`}>{data.title}</Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default PostLayoutformag;
