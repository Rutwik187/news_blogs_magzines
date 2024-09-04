import { useQuery } from "@tanstack/react-query";
import { client } from "../client";
import Loader from "../components/common/Loader";
import HeaderOne from "../components/header/HeaderOne";
import FooterTwo from "../components/footer/FooterTwo";
import PostLayoutformag from "../components/post/layout/PostLayoutformag";
import HeadMeta from "../components/elements/HeadMeta";
import Image from "next/image";
import Link from "next/link";

const Magazines = () => {
  const query = `
*[_type == "magazine"] 
{
  title,
  slug,
  'featureImg': mainImage.asset->url,
  publishedAt
 
} | order(publishedAt desc)
`;

  const { data, isLoading, error } = useQuery({
    queryKey: ["allMagazines"],
    queryFn: async () => {
      const response = await client.fetch(query);

      return response;
    },
  });

  return (
    <>
      <HeadMeta
        metaTitle={
          "Exclusive Interviews with Entrepreneurs Featured in The Entrepreneurial Chronicles Magazine"
        }
        metaDesc={
          " Exclusive interviews with top entrepreneurs featured in The Entrepreneurial Chronicles Magazine. Discover their inspiring journey, business strategies, and tips for success in the entrepreneurial world "
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
                fontSize: "4rem",
                fontWeight: "bolder",
                marginBottom: "1rem",
                color: "white",
              }}
            >
              ADVERTISE WITH US
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

        <div className="container mt-5">
          <h3 className="mb-4">Website Placement Advertise :</h3>
          <p className="mb-3">
            A wise businessman once said, &quot;The toothpaste you use to the
            shiny shoes you wear to the car you drive to the bed you sleep in is
            advertised,&quot; and adding to that we say, &quot;and you, my
            friend are afraid to advertise with us!&quot;
          </p>
          <p className="mb-3">
            Being a magazine that strives to bring new age businesses to light,
            it makes a perfect hub of new blood in the market to recognise you!
          </p>
          <p className="mb-4">
            Advertise with us and connect yourself with the brand leaders of the
            paradigm shift in the business world.
          </p>
          <div className="shadow-container d-flex justify-content-center">
            <div className="p-0 shadow-lg w-50">
              <Image
                src="/images/ads-img.png"
                alt="CI3FAME Advertisement Placements"
                width={600}
                height={800}
                layout="responsive"
                className="shadow-black img-fluid"
              />
            </div>
          </div>
          <h3 className="mb-4 mt-5">Digital Magazine Placement Advertise :</h3>
          <p className="mb-3">
            The space and dimension of the Ad on the print and digital platforms
            are mentioned below.
          </p>
          <div className="d-flex gap-5 mb-5">
            <div className="shadow-container d-flex justify-content-center">
              <div className="p-0 shadow-lg ">
                <Image
                  src="/images/Advertisement-1.jpg"
                  alt="CI3FAME Advertisement Placements"
                  width={600}
                  height={800}
                  layout="responsive"
                  className="shadow-black img-fluid"
                />
              </div>
            </div>
            <div className="shadow-container d-flex justify-content-center">
              <div className="p-0 shadow-lg ">
                <Image
                  src="/images/Advertisement-2.jpg"
                  alt="CI3FAME Advertisement Placements"
                  width={600}
                  height={800}
                  layout="responsive"
                  className="shadow-black img-fluid"
                />
              </div>
            </div>
          </div>
          <Link href="/contact">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button
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
                  GET IN TOUCH
                </h2>
              </button>
            </div>{" "}
          </Link>
        </div>
      </div>
      <FooterTwo />
    </>
  );
};

export default Magazines;