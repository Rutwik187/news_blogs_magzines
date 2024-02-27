import { SortingByDate } from "../../utils";
import SectionTitle from "../elements/SectionTitle";
import PostLayoutOne from "./layout/PostLayoutOne";
import PostLayoutTwo from "./layout/PostLayoutTwo";

const PostSectionOne = ({postData}) => {
    SortingByDate(postData);
    return (
      <div className="recent-news-wrapper section-gap p-t-xs-15 p-t-sm-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {postData.slice(0, 1).map((data) => (
                <PostLayoutOne data={data} key={data.slug} />
              ))}
            </div>
            <div className="col-lg-6">
              <div className="axil-recent-news">
                <SectionTitle
                  title="Recent News"
                  btnText="ALL RECENT NEWS"
                  pClass="m-b-xs-30"
                />
                <div className="axil-content">
                	{postData.slice(1, 5).map((data) =>(
                    	<PostLayoutTwo data={data} key={data.slug} />
                  	))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default PostSectionOne;