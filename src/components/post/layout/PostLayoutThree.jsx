import Image from "next/image";
import Link from "next/link";
import { slugify } from "../../../utils";

const PostLayoutThree = ({ data, postSizeLg, pClass, videoPost }) => {
  return (
	<div className={`axil-img-container ${pClass ?? "m-b-xs-30"}`}>
		<Link className={`d-block ${videoPost === true ? "h-100" : ""}`} href={`/post/${data.slug}`}>
			
				<Image
					src={data.featureImg}
					alt={data.title}
					width={postSizeLg === true? 730 : 350}
					height={postSizeLg === true? 550 : 260}
					className="w-100"
				/>
				<div className={`grad-overlay ${videoPost === true ? "grad-overlay__transparent" : ""}`} />
			
		</Link>
		<div className="media post-block position-absolute">
		<div className={`media-body ${postSizeLg === true ? "media-body__big" : "" }`}>
			<div className="post-cat-group m-b-xs-10">
			<Link className={`post-cat cat-btn ${data.cate_bg ?? "bg-color-blue-one"}`} href={`/category/${slugify(data.cate)}`}>
				{data.cate}
			</Link>
			</div>
			<div className="axil-media-bottom">
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
				{postSizeLg === true ?
				<>
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
				</> 
				: "" }
				</ul>
			</div>
			</div>
		</div>
		</div>
		{/* End of .post-block */}
	</div>
  );
};

export default PostLayoutThree;
