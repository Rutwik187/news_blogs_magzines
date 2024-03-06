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
      {/* {console.log(data.htmlContent[0].children[0].text)} */}
      <div className="media post-block m-b-xs-20">
        <figure className="fig-container">
          <Link href={`/magzine/${data?.slug.current}`}>
            {console.log(data.mainImage)}
            <Image
              src={data?.featureImg}
              alt={data?.title}
              width={540}
              height={540}
              placeholder="blur"
              blurDataURL="/images/placeholder.png"
            />
          </Link>
          <div className="post-cat-group m-b-xs-10">
            <Link
              className={`post-cat cat-btn ${
                data?.cate_bg ?? "bg-color-blue-one"
              }`}
              href={`/category/${data?.cate}`}
            >
              {data?.cate}
            </Link>
          </div>
        </figure>
        <div className="media-body">
          <h3 className="axil-post-title hover-line hover-line">
            <Link href={`/magzine/${data?.slug.current}`}>{data?.title}</Link>
          </h3>
          <div className="post-metas">
            <ul className="list-inline">
              <span>By </span>

              <Link
                className="post-author"
                href={`/author/${data?.author_name}`}
              >
                {data?.author_name}
              </Link>
            </ul>
          </div>
        </div>
      </div>
      {/* End of .post-block */}
    </div>
  );
};

export default PostLayoutOne;
