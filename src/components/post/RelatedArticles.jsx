import SectionTitle from "../elements/SectionTitle";
import PostVideoOne from "./layout/PostVideoOne";
import PostVideoTwo from "./layout/PostVideoTwo";
import { useQuery } from "@tanstack/react-query";
import { client } from "../../client";
import Loader from "../common/Loader";

const RelatedArticles = ({ currentMagArticle, allMagazinesArticles }) => {
  return (
    <div className="axil-video-posts section-gap section-gap-top__with-text bg-grey-dark-one">
      <div className="container">
        <SectionTitle
          btnUrl={`/category/web-profiles`}
          title={"Related Articles"}
          btnText="Read all Articles"
          pClass="title-white m-b-xs-40"
        />
        <div className="row">
          <div className="col-lg-8">
            {currentMagArticle.map((post, index) => (
              <PostVideoOne data={post} key={index} />
            ))}
          </div>
          <div className="col-lg-4">
            {allMagazinesArticles.map((post, index) => (
              <PostVideoTwo data={post} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedArticles;
