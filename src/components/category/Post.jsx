import { useState } from "react";
import { urlFor } from "../../client";
import Image from "next/image";

import Link from "next/link";

const Post = ({ post }) => {
  const [img, setImg] = useState(urlFor(post.mainImage).url());

  return (
    <div className="axil-img-container flex-height-container">
      <Link className="d-block h-100" href={`/blog/${post.slug.current}`}>
        <Image
          src={img}
          alt={post.title}
          width={730}
          height={514}
          className="w-100"
        />
        <div className="grad-overlay grad-overlay__transparent" />
      </Link>
      <div className="media post-block grad-overlay__transparent position-absolute m-b-xs-30">
        <div className="media-body media-body__big">
          <div className="axil-media-bottom mt-auto">
            <h3 className="axil-post-title hover-line hover-line">
              <Link href={`/blog/${post.slug.current}`}>{post.title}</Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
