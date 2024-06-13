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
          "Learn About The Entrepreneurial Chronicle | A Leading Global Business Magazine"
        }
        metaDesc={
          "The Entrepreneurial Chronicle is a global business magazine featuring Visionary business leaders, Industry tycoons, and Entrepreneurial Minds from around the world "
        }
      />
      <HeaderOne />
      <Breadcrumb aPage="About Us" />
      <BreadcrumbBanner pageTitle="About Us" />
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
