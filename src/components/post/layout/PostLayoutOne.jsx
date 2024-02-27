import Image from "next/image";
import Link from "next/link";
import { slugify } from "../../../utils";

const PostLayoutOne = ({data}) => {
  return (
    <div className="axil-latest-post">
        <div className="media post-block m-b-xs-20">
            <figure className="fig-container">
                <Link href={`/post/${data.slug}`}>
                    
                        <Image
                        src={data.featureImg}
                        alt={data.title}
                        width={540}
                        height={540}
                        placeholder="blur"
                        blurDataURL="/images/placeholder.png"
                        />
                    
                </Link>
            <div className="post-cat-group m-b-xs-10">
                <Link className={`post-cat cat-btn ${data.cate_bg ?? "bg-color-blue-one"}`} href={`/category/${slugify(data.cate)}`}>
                    {data.cate}
                </Link>
            </div>
            </figure>
            <div className="media-body">
            <h3 className="axil-post-title hover-line hover-line">
                <Link href={`/post/${data.slug}`}>
                    {data.title}
                </Link>
            </h3>
            <div className="post-metas">
                <ul className="list-inline">
                <li>
                    <span>By</span>
                    <Link className="post-author" href={`/author/${slugify(data.author_name)}`}>
                    {data.author_name}
                    </Link>
                </li>
                <li>
                    <i className="dot">.</i>{data.date}
                </li>
                <li>
                    <i className="feather icon-activity" />
                {data.post_views}
                </li>
                <li>
                    <i className="feather icon-share-2" />
                    {data.post_share}
                </li>
                </ul>
            </div>
            </div>
        </div>
        {/* End of .post-block */}
    </div>
  );
};

export default PostLayoutOne;
