import Image from "next/image";
import Link from "next/link";

const PostAuthor = ({ authorData }) => {
  return (
    <div className="about-author m-b-xs-60">
      <div className="media">
        <Link href={`/author/${authorData?.author_name}`}>
          <Image
            src={authorData.author_img}
            alt={authorData.author_name}
            height={105}
            width={105}
            className="author-img"
          />
        </Link>
        <div className="media-body">
          <div className="media-body-title">
            <h3>
              <Link href={`/author/${authorData?.author_name}`}>
                {authorData.author_name}
              </Link>
            </h3>
          </div>
          {/* End of .media-body-title */}
          <div className="media-body-content">
            <p>{authorData.author_bio}</p>
          </div>
          {/* End of .media-body-content */}
        </div>
      </div>
    </div>
  );
};

export default PostAuthor;
