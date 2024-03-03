import Image from "next/image";
import Link from "next/link";
import { slugify } from "../../../utils";

const PostLayoutSix = ({ data }) => {
  return (
    <div className="axil-img-container m-b-xs-15 m-b-sm-30">
      <Link className="d-block" href={`/post/${data.slug.current}`}`}>
        <Image
          src={data.featureImg}
          alt={data.title}
          width={390}
          height={390}
        />
        <div className="grad-overlay grad-overlay__transparent" />
      </Link>
      <div className="media post-block grad-overlay position-absolute">
        <div className="media-body justify-content-end">
          <div className="post-cat-group m-b-xs-10">
            <Link
              className={`post-cat cat-btn btn-mid ${
                data.cate_bg ?? "bg-color-blue-one"
              }`}
              href={`/category/${slugify(data.cate)}`}
            >
              {data.cate}
            </Link>
          </div>
          <div className="axil-media-bottom">
            <h3 className="axil-post-title hover-line m-b-xs-0">
              <Link href={`/post/${data.slug.current}`}>{data.title}</Link>
            </h3>
          </div>
        </div>
      </div>
      {/* End of .post-block */}
    </div>
  );
};

export default PostLayoutSix;
