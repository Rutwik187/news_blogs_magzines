import Image from "next/image";
import Link from "next/link";
import SocialLink from "../../data/social/SocialLink.json";
import styles from "../../styles/footer.module.css";
import Carousel from "react-bootstrap/Carousel";
import Loader from "../common/Loader";
import { client } from "../../client";
import { useQuery } from "@tanstack/react-query";

const FooterTwo = () => {
  const query = `
*[_type == "magazine"] 
{
  title,
  slug,
  'featureImg': mainImage.asset->url,
 
} | order(_createdAt desc)[0...6] 
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
    <footer
      className="page-footer bg-grey-dark-key"
      style={{ color: "white", paddingBottom: "1px" }}
    >
      <div
        className={`${styles.footer_start} footer_start`}
        style={{
          display: "flex",
          gap: "2rem",
          marginRight: "2rem",
          marginLeft: "2rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <div className="logo">
          <div className="footer-logo-container">
            <Link href="/">
              <Image
                src="/logos/logo-primary-white.png"
                alt="brand-logo"
                width={300}
                height={100}
                style={{ objectFit: "contain" }}
              />
            </Link>
            <div className="footer-social-share-wrapper">
              <div className="footer-social-share">
                <div className="axil-social-title" style={{ fontWeight: 400 }}>
                  Find us here
                </div>
                <ul className="social-share social-share__with-bg">
                  <li>
                    <a href={SocialLink.fb.url}>
                      <i className={SocialLink.fb.icon} />
                    </a>
                  </li>
                  <li>
                    <a href={SocialLink.twitter.url}>
                      <i className={SocialLink.twitter.icon} />
                    </a>
                  </li>
                  <li>
                    <a href={SocialLink.yt.url}>
                      <i className={SocialLink.yt.icon} />
                    </a>
                  </li>
                  <li>
                    <a href={SocialLink.linked.url}>
                      <i className={SocialLink.linked.icon} />
                    </a>
                  </li>
                  <li>
                    <a href={SocialLink.pinterest.url}>
                      <i className={SocialLink.pinterest.icon} />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="axil-social-title" style={{ fontWeight: 400 }}>
                +1 (614) 356-7697
              </div>

              <div className="axil-social-title" style={{ fontWeight: 400 }}>
                6605 Longshore St, Dublin, OH 43017, USA
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.footer_content} footer_content`}
          style={{ margin: "1rem", color: "white" }}
        >
          <p style={{ width: "100%", color: "white", fontWeight: 200 }}>
            The Entrepreneurial Chronicles is a business magazine that brings
            inspiring stories of entrepreneurs who have turned their
            dreams into reality.
          </p>
        </div>
        <div>
          <h4 style={{ color: "white", fontWeight: 200 }}>QUICK LINKS</h4>
          <ul
            style={{ color: "white", fontWeight: 200, fontSize: "medium" }}
            className="footer-bottom-links "
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/magazines">Magazine</Link>
            </li>
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div style={{ width: "30%", textAlign: "center" }}>
          <h4 style={{ color: "white", fontWeight: 200 }}>MAGAZINES</h4>
          <Carousel indicators={false}>
            {data.map((mag, index) => {
              return (
                <Carousel.Item key={index}>
                  <Image
                    src={mag.featureImg}
                    width={500}
                    height={200}
                    alt="magazines"
                    className="object-fit-contain"
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>
      <p style={{ textAlign: "center", marginTop: "3rem", fontWeight: 400 }}>
        &copy;Copyright 2024, The Entrepreneurial Chronicles | All Rights
        Reserved.
      </p>
    </footer>
  );
};

export default FooterTwo;
