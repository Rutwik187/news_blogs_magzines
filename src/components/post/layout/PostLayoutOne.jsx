import Image from "next/image";
import Link from "next/link";

const PostLayoutOne = ({ data }) => {
  return (
    <div
      className="axil-latest-post"
      style={
        {
          // background: "#ec597c",
        }
      }
    >
      <div className="media post-block m-b-xs-20">
        <figure className="fig-container">
          <Link href={`/Magazine/${data?.slug.current}`}>
            <Image
              src={data?.featureImg}
              alt={data?.altText || data?.title}
              width={540}
              height={540}
              placeholder="blur"
              blurDataURL="/images/placeholder.png"
            />
          </Link>
          <div className="post-cat-group m-b-xs-10">
            <Link
              className={`post-cat cat-btn ${"bg-color-blue-one"}`}
              href={`/category/${data?.category.slug}`}
            >
              {data?.category.title}
            </Link>
          </div>
        </figure>
        <div className="media-body">
          <h3 className="axil-post-title hover-line hover-line">
            <Link href={`/post/${data?.slug.current}`}>{data?.title}</Link>
          </h3>
        </div>
      </div>
      {/* End of .post-block */}
    </div>
  );
};

export default PostLayoutOne;
