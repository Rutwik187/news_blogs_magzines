import { useQuery } from "@tanstack/react-query";
import { client } from "../client";
import Loader from "../components/common/Loader";
import PostLayoutFour from "../components/post/layout/PostLayoutFour";
import HeaderOne from "../components/header/HeaderOne";
import FooterTwo from "../components/footer/FooterTwo";
import PostLayoutformag from "../components/post/layout/PostLayoutformag";

const Magazines = () => {
  const query = `
*[_type == "magazine"] 
{
  title,
  slug,
  'featureImg': mainImage.asset->url,
 
} | order(_createdAt desc)[0...4] 
`;

  const { data, isLoading, error } = useQuery({
    queryKey: ["magazines"],
    queryFn: async () => {
      const response = await client.fetch(query);
      return response;
    },
  });

  if (isLoading) return <Loader />;
  if (error) return <div>Error fetching posts</div>;

  if (!data) return null;

  return (
    <>
      <HeaderOne />

      {/* <div className="related-post p-b-xs-30 mt-4">
        <div className="container">
          <div className="grid-wrapper row">
            {data.map((post, index) => (
              <PostLayoutFour data={post} key={index} />
            ))}
          </div>
        </div>
      </div> */}
      <div style={{ width: "100%", height: "auto" }}>
        <div
          style={{
            width: "100%",
            background: "red",
            backgroundRepeat: "repeat-x",
            backgroundSize: "30%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem 0",
          }}
        >
          {/* Your header content */}
          <div
            style={{
              width: "90%",
              maxWidth: "1200px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              padding: "0 1rem",
            }}
          >
            <p
              style={{
                fontSize: "2rem",
                fontWeight: "bolder",
                marginBottom: "2px",
                color: "black",
              }}
            >
              MAGAZINES
            </p>
            <p
              style={{
                fontSize: "2rem",
                fontWeight: "lighter",
                color: "black",
              }}
            >
              Welcome to TEC Business world magazine, we spotlight trailblazers
              from all sectors, transforming the business magazine landscape.
              Our mission is to inspire and empower new leaders with
              groundbreaking ideas worldwide. Count on us for reliable insights,
              advice, and industry trends, supporting both established and
              aspiring leaders
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "30%",
              maxWidth: "40rem",
              height: "6rem",
              margin: "2rem",
              borderRadius: "10rem",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2 style={{ fontSize: "2.2rem", margin: "0" }}>
              {new Date().getFullYear()}
            </h2>
          </div>
        </div>{" "}
        <div
          className="parent"
          style={{
            padding: "2rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gridGap: "20px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* <div
            className="box"
            style={{
              transition: "box-shadow 0.3s",
              width: "100%",
              maxWidth: "300px",
              height: "auto",
              borderRadius: "10px",
              border: "1px solid #ccc",
              background: "#fff",
              boxShadow: "0 0 0 rgba(33, 33, 33, 0.2)",
              overflow: "hidden",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.boxShadow = "0 0 20px rgba(33,33,33,.4)";
              e.currentTarget.querySelector("img").style.transform =
                "scale(1.1)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow = "0 0 0 rgba(33,33,33,.2)";
              e.currentTarget.querySelector("img").style.transform = "scale(1)";
            }}
          >
            <img
              style={{
                width: "100%",
                height: "auto",
                transition: "transform 0.3s",
              }}
              src="./mag.png"
              alt=""
            />
          </div> */}
          {data.map((post, index) => (
            <PostLayoutformag data={post} key={index} />
          ))}
          {data.map((post, index) => (
            <PostLayoutformag data={post} key={index} />
          ))}
          {data.map((post, index) => (
            <PostLayoutformag data={post} key={index} />
          ))}
        </div>
      </div>
      <FooterTwo />
    </>
  );
};

export default Magazines;
