import { useQuery } from "@tanstack/react-query";
import { client } from "../client";
import Loader from "../components/common/Loader";
import HeaderOne from "../components/header/HeaderOne";
import FooterTwo from "../components/footer/FooterTwo";
import PostLayoutformag from "../components/post/layout/PostLayoutformag";
import HeadMeta from "../components/elements/HeadMeta";

const Magazines = () => {
  const query = `
*[_type == "magazine"] 
{
  title,
  slug,
  'featureImg': mainImage.asset->url,
 
} | order(publishedAt desc)
`;

  const { data, isLoading, error } = useQuery({
    queryKey: ["allMagazines"],
    queryFn: async () => {
      const response = await client.fetch(query);
      return response;
    },
  });

  // if (isLoading) return <Loader />;
  // if (error) return <div>Error fetching posts</div>;

  // if (!data) return null;

  return (
    <>
      <HeadMeta
        metaTitle={
          "Exclusive Interviews with Entrepreneurs Featured in The Entrepreneurial Chronicle Magazine"
        }
        metaDesc={
          " Exclusive interviews with top entrepreneurs featured in The Entrepreneurial Chronicle Magazine. Discover their inspiring journey, business strategies, and tips for success in the entrepreneurial world "
        }
      />

      <HeaderOne />

      <div style={{ width: "100%", height: "auto" }}>
        <div
          style={{
            width: "100%",
            // background: "white",
            backgroundImage: `url('/images/mag_bg.png')`,
            backgroundRepeat: "repeat",
            // backgroundSize: "30%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem 0",
          }}
        >
          <div
            style={{
              width: "90%",
              height: "100%",
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
                color: "white",
              }}
            >
              LATEST MAGAZINES
            </p>
            <p
              style={{
                fontSize: "2rem",
                fontWeight: "lighter",
                color: "white",
              }}
            >
              Welcome to The Entrepreneurial Chronicles Magazine, where we
              spotlight trailblazers from all sectors transforming the business
              magazine landscape. Our mission is to inspire and empower new
              leaders with groundbreaking ideas worldwide. Count on us for
              reliable insights, advice, and industry trends, supporting both
              established and aspiring leaders.
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
            gridGap: "40px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {data?.map((post, index) => (
            <PostLayoutformag data={post} key={index} />
          ))}
        </div>
      </div>
      <FooterTwo />
    </>
  );
};

export default Magazines;
