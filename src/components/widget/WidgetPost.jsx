import { Tab, Nav } from "react-bootstrap";
import PostVideoTwo from "../post/layout/PostVideoTwo";

const WidgetPost = ({ dataPost }) => {
  return (
    <div className="post-widget sidebar-post-widget m-b-xs-40">
      <Tab.Container id="widget-post" defaultActiveKey="recent">
        <Nav variant="pills" className="row no-gutters">
          <Nav.Item className="col">
            <Nav.Link eventKey="recent">RECENT</Nav.Link>
          </Nav.Item>
          <Nav.Item className="col">
            <Nav.Link eventKey="popular">POPULAR</Nav.Link>
          </Nav.Item>
          <Nav.Item className="col">
            <Nav.Link eventKey="comments">COMMENTS</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey="recent">
            {dataPost && dataPost.length > 0 ? (
              dataPost
                .slice(0, 4)
                .map((data, index) => (
                  <PostVideoTwo data={data} pClass="" key={index} />
                ))
            ) : (
              <p>No recent posts found.</p>
            )}
          </Tab.Pane>
          <Tab.Pane eventKey="popular">
            {dataPost && dataPost.length > 0 ? (
              dataPost
                .slice(0, 4)
                .map((data, index) => (
                  <PostVideoTwo data={data} pClass="" key={index} />
                ))
            ) : (
              <p>No recent posts found.</p>
            )}
          </Tab.Pane>
          <Tab.Pane eventKey="comments">
            {dataPost && dataPost.length > 0 ? (
              dataPost
                .slice(0, 4)
                .map((data, index) => (
                  <PostVideoTwo data={data} pClass="" key={index} />
                ))
            ) : (
              <p>No recent posts found.</p>
            )}
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default WidgetPost;
