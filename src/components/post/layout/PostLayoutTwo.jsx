import Image from "next/image";
import Link from "next/link";
import { slugify } from "../../../utils";

const PostLayoutTwo = ({data, postSizeMd, postBgDark}) => {
  return (
      	<div className={`media post-block m-b-xs-30 ${postSizeMd === true ? "post-block__mid" : ""} ${postBgDark === true ? "post-block__on-dark-bg": "" }`}>
            <Link  className="align-self-center" href={`/post/${data.slug}`}>
              
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
            <Link className={`post-cat cat-btn ${data.cate_bg ?? "bg-color-blue-one"}`} href={`/category/${slugify(data.cate)}`}>
                {data.cate}
            </Link>
           </div>
           <h3 className="axil-post-title hover-line hover-line">
                <Link href={`/post/${data.slug}`}>
                    {data.title}
                </Link>
           </h3>
		   {postSizeMd === true ? 
			<p className="mid">{data.excerpt}</p>

			: ""
			}
           <div className="post-metas">
             <ul className="list-inline">
               <li>
                    <span>By</span>
                    <Link className="post-author" href={`/author/${slugify(data.author_name)}`}>
                        {data.author_name}
                    </Link>
               </li>
             </ul>
           </div>
         </div>
		</div>
  );
};

export default PostLayoutTwo;
