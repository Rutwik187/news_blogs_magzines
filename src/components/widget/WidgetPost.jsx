import { Tab, Nav } from "react-bootstrap";
import PostVideoTwo from "../post/layout/PostVideoTwo";
import { useQuery } from "@tanstack/react-query";
import { client } from "../../client";
import Loader from "../common/Loader";

const WidgetPost = () => {
  const queryWebProfiles = `
*[_type == "post" && categories[0]._ref == *[_type == "category" && slug.current == "web-profiles"][0]._id] 
 {
    title,
    slug,
    'featureImg': mainImage.asset->url,
     'category': {
    'title': categories[0]->title,
    altText,
    'slug': categories[0]->slug.current,
    },
    publishedAt

} | order(publishedAt desc)[0...5] 
`;
  const { data: webProfileData } = useQuery({
    queryKey: ["web-profile"],
    queryFn: async () => {
      const response = await client.fetch(queryWebProfiles);
      return response;
    },
  });

  const queryMarketNews = `
*[_type == "post" && categories[0]._ref == *[_type == "category" && slug.current == "market-news"][0]._id] 
 {
    title,
    slug,
    'featureImg': mainImage.asset->url,
     'category': {
    'title': categories[0]->title,
    altText,
    'slug': categories[0]->slug.current,
    },
    publishedAt

} | order(publishedAt desc)[0...5] 
`;
  const { data: marketNewsData } = useQuery({
    queryKey: ["market-news"],
    queryFn: async () => {
      const response = await client.fetch(queryMarketNews);
      return response;
    },
  });

  const queryBusinessBulletins = `
*[_type == "post" && categories[0]._ref == *[_type == "category" && slug.current == "business-bulletin"][0]._id] 
 {
    title,
    slug,
    'featureImg': mainImage.asset->url,
     'category': {
    'title': categories[0]->title,
    altText,
    'slug': categories[0]->slug.current,
    },
    publishedAt

} | order(publishedAt desc)[0...5] 
`;
  const { data: businessBulletinData } = useQuery({
    queryKey: ["business-bulletin"],
    queryFn: async () => {
      const response = await client.fetch(queryBusinessBulletins);
      return response;
    },
  });

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
            {webProfileData && webProfileData?.length > 0 ? (
              webProfileData
                .slice(0, 4)
                .map((data, index) => (
                  <PostVideoTwo data={data} pClass="" key={index} />
                ))
            ) : (
              <p>No posts found.</p>
            )}
          </Tab.Pane>
          <Tab.Pane eventKey="popular">
            {marketNewsData && marketNewsData?.length > 0 ? (
              marketNewsData
                .slice(0, 4)
                .map((data, index) => (
                  <PostVideoTwo data={data} pClass="" key={index} />
                ))
            ) : (
              <p>No posts found.</p>
            )}
          </Tab.Pane>
          <Tab.Pane eventKey="comments">
            {businessBulletinData && businessBulletinData.length > 0 ? (
              businessBulletinData
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
