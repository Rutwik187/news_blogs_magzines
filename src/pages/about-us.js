import Image from "next/image";
import { getFileContentBySlug } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import Breadcrumb from "../components/common/Breadcrumb";
import BreadcrumbBanner from "../components/common/BreadcrumbBanner";
import HeadMeta from "../components/elements/HeadMeta";
import SectionTitleTwo from "../components/elements/SectionTitleTwo";

import HeaderOne from "../components/header/HeaderOne";
import TeamOne from "../components/team/TeamOne";
import WidgetNewsletter from "../components/widget/WidgetNewsletter";
import WidgetPost from "../components/widget/WidgetPost";
import WidgetSocialShare from "../components/widget/WidgetSocialShare";
import { removeDuplicates } from "../utils";
import { authorsData } from "../data/about/TeamData";
import FooterTwo from "../components/footer/FooterTwo";

const AboutUs = ({ aboutData }) => {
  return (
    <>
      <HeadMeta
        metaTitle={
          "Learn About The Entrepreneurial Chronicles | A Leading Global Business Magazine"
        }
        metaDesc={
          "The Entrepreneurial Chronicles is a global business magazine featuring Visionary business leaders, Industry tycoons, and Entrepreneurial Minds from around the world "
        }
      />
      <HeaderOne />
      <Breadcrumb aPage="About Us" />
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem 0",
        }}
      >
        {/* Background Image with Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url('/images/About_us.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
            // filter: "brightness(0.8)", // Darken the image
          }}
        ></div>

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
            color: "white",
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
            About Us
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
            established and aspiring leaders.
          </p>
        </div>
      </div>
      {/* <BreadcrumbBanner pageTitle="About Us" /> */}
      <div className="axil-about-us section-gap-top p-b-xs-20">
        <div className="container">
          <figure className="m-b-xs-40 text-center">
            <Image
              src={aboutData.data.featuredImg}
              height={451}
              width={1500}
              alt="about us"
              className=" mx-auto"
            />
          </figure>
          <div className="row">
            <div className="col-lg-8">
              <div className="about-us-content">
                <div
                  dangerouslySetInnerHTML={{ __html: aboutData.content }}
                ></div>
              </div>
            </div>
            <div className="col-lg-4">
              <aside className="post-sidebar">
                <WidgetNewsletter />
                <WidgetSocialShare />
              </aside>
            </div>
          </div>
        </div>
      </div>
      <div className="axil-our-team section-gap section-gap-top__with-text bg-grey-light-three">
        <div className="container">
          <div className="axil-team-grid-wrapper">
            <SectionTitleTwo
              title="Meet Our Company Pillars"
              paragraph="Wherever &amp; whenever you need us. We are here for you - contact us for all your support needs, <br> be it technical, general queries or information support."
            />
            <div className="row">
              {authorsData.map((author, index) => (
                <div className="col-lg-4 " key={author.slug}>
                  <TeamOne key={index} data={author} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <FooterTwo />
    </>
  );
};

export default AboutUs;

export async function getStaticProps() {
  const aboutData = getFileContentBySlug("AboutData", "src/data/about");
  const content = await markdownToHtml(aboutData.content || "");
  return {
    props: {
      aboutData: {
        ...aboutData,
        content,
      },
    },
  };
}
