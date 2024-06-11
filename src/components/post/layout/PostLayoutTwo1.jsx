import Image from "next/image";
import Link from "next/link";
import React from "react";

const PostLayoutTwo1 = ({ data, postSizeMd, postBgDark }) => {
  return (
    <div
      className={`media post-block m-b-xs-30 ${
        postSizeMd === true ? "post-block__mid" : ""
      } ${postBgDark === true ? "post-block__on-dark-bg" : ""}`}
    >
      <Link
        className="align-self-center"
        href={`/Magazine/${data.slug.current}`}
      >
        <Image
          className={
            postSizeMd == true ? "object-fit-contain" : "object-fit-cover"
          }
          src={data.featureImg}
          alt={data.altText || data.title}
          width={postSizeMd === true ? 285 : 150}
          height={postSizeMd === true ? 285 : 150}
          placeholder="blur"
          blurDataURL="/images/placeholder.png"
        />
      </Link>

      <div className="media-body">
        <div className="post-cat-group m-b-xs-10">
          <Link
            className={`post-cat cat-btn ${"bg-color-blue-one"}`}
            href={`/category/${data.category?.slug}`}
          >
            {data.category?.title}
          </Link>
        </div>
        <h3 className="axil-post-title hover-line hover-line color-white">
          <Link href={`/post/${data.slug.current}`}>{data.title}</Link>
        </h3>

        {postSizeMd === true ? (
          <p className="mid hide-in-small-devices">
            {data?.description && data.description.length > 50
              ? `${data.description.slice(0, 100)}...`
              : data.description}
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default PostLayoutTwo1;
