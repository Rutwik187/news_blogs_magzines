import Image from "next/image";
import Link from "next/link";
import { slugify } from "../../../../../utils";

const MetaDataOne = ({ metaData }) => {
  return (
    <div className="banner banner__single-post banner__standard">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
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
              <h2 className="m-t-xs-20 m-b-xs-0 axil-post-title hover-line">
                {metaData.title}
              </h2>

              {/* End of .post-metas */}
            </div>
            {/* End of .post-title-wrapper */}
          </div>
          {/* End of .col-lg-6 */}
          <div className="col-lg-6">
            <div className="post-main-thumbnail">
              <Image
                src={metaData.featureImg}
                alt={metaData.title}
                width={540}
                height={540}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        {/* End of .row */}
      </div>
      {/* End of .container */}
    </div>
  );
};

export default MetaDataOne;
