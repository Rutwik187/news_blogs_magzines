import Image from "next/image";
import Link from "next/link";

const PostLayoutTwo = ({ data, postSizeMd, postBgDark }) => {
  return (
    <div
      className={`media post-block m-b-xs-30 ${
        postSizeMd === true ? "post-block__mid" : ""
      } ${postBgDark === true ? "post-block__on-dark-bg" : ""}`}
    >
      <Link className="align-self-center" href={`/post/${data.slug.current}`}>
        <Image
          src={data.featureImg}
          alt={data.title}
          width={postSizeMd === true ? 285 : 150}
          height={postSizeMd === true ? 285 : 150}
          placeholder="blur"
          blurDataURL="/images/placeholder.png"
        />
      </Link>
      <div className="media-body">
        <div className="post-cat-group m-b-xs-10">
          <Link
            className={`post-cat cat-btn ${
              data.cate_bg ?? "bg-color-blue-one"
            }`}
            href={`/category/${data.cate}`}
          >
            {data.cate}
          </Link>
        </div>
        <h3 className="axil-post-title hover-line hover-line">
          <Link href={`/post/${data.slug.current}`}>{data.title}</Link>
        </h3>
        <div className="post-metas">
          <ul className="list-inline">
            <li>
              <span>By</span>
              <a className="post-author" href="/demo/react/author/xu-jianhong">
                {data.author_name}
              </a>
            </li>
          </ul>
        </div>
        {postSizeMd === true ? <p className="mid">{data.excerpt}</p> : ""}
      </div>
    </div>
  );
};

export default PostLayoutTwo;
