import Image from "next/image";
import Link from "next/link";
import { slugify } from "../../../../../utils";

const MetaDataThree = ({ metaData }) => {
  const postDate = metaData.date.split(" ");

  return (
    <div className="banner banner__default bg-grey-light-three">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div
              className="post-date perfect-square bg-primary-color"
              style={{ height: "160px" }}
            >
              {postDate[0]}
              <span>{postDate[1]}</span>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="post-title-wrapper">
              <div className="btn-group">
                <Link
                  className={`cat-btn ${
                    metaData.cate_bg ?? "bg-color-blue-one"
                  }`}
                  href={`/category/${slugify(metaData.cate)}`}
                >
                  {metaData.cate}
                </Link>
              </div>
              <h2 className="m-b-xs-0 m-t-xs-10 axil-title hover-line">
                {metaData.title}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetaDataThree;
