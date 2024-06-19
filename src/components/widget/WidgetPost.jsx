import { Tab, Nav } from "react-bootstrap";
import PostVideoTwo from "../post/layout/PostVideoTwo";
import { useQuery } from "@tanstack/react-query";

const WidgetPost = ({ dataPost }) => {
  const webProfileData = useQuery({ queryKey: ["web-profiles"] });

  const marketNewsData = useQuery({ queryKey: ["market-news"] });
  const businessBulletinData = useQuery({ queryKey: ["business-bulletin"] });

  return (
    <div className="post-widget sidebar-post-widget m-b-xs-40">
      <Tab.Container id="widget-post" defaultActiveKey="recent">
        <Nav variant="pills" className="row no-gutters">
          <Nav.Item className="col">
            <Nav.Link eventKey="recent">Web Profiles</Nav.Link>
          </Nav.Item>
          <Nav.Item className="col">
            <Nav.Link eventKey="popular">Market News</Nav.Link>
          </Nav.Item>
          <Nav.Item className="col">
            <Nav.Link eventKey="comments">Business Bulletins</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey="recent">
            {webProfileData?.data && webProfileData?.data.length > 0 ? (
              webProfileData?.data
                .slice(0, 4)
                .map((data, index) => (
                  <PostVideoTwo data={data} pClass="" key={index} />
                ))
            ) : (
              <p>No posts found.</p>
            )}
          </Tab.Pane>
          <Tab.Pane eventKey="popular">
            {marketNewsData?.data && marketNewsData?.data.length > 0 ? (
              marketNewsData?.data
                .slice(0, 4)
                .map((data, index) => (
                  <PostVideoTwo data={data} pClass="" key={index} />
                ))
            ) : (
              <p>No posts found.</p>
            )}
          </Tab.Pane>
          <Tab.Pane eventKey="comments">
            {businessBulletinData?.data &&
            businessBulletinData?.data.length > 0 ? (
              businessBulletinData?.data
                .slice(0, 4)
                .map((data, index) => (
                  <PostVideoTwo data={data} pClass="" key={index} />
                ))
            ) : (
              <p>No posts found.</p>
            )}
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default WidgetPost;
