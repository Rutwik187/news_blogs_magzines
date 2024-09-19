import Image from "next/image";
import Breadcrumb from "../components/common/Breadcrumb";
import BreadcrumbBanner from "../components/common/BreadcrumbBanner";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import HeadMeta from "../components/elements/HeadMeta";
import SectionTitleTwo from "../components/elements/SectionTitleTwo";

import HeaderOne from "../components/header/HeaderOne";
import FooterTwo from "../components/footer/FooterTwo";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const ContactPage = () => {
  return (
    <>
      <HeadMeta
        metaTitle="Connect and Share Your Story with The Entrepreneurial Chronicles Magazine
"
        metaDesc="Share your entrepreneurial journey and inspire others with The Entrepreneurial Chronicles Magazine. Connect with a global community of business leaders, innovators, and changemakers by contributing your unique story and insights."
      />

      <HeaderOne />
      <Breadcrumb aPage="Contact Us" />
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
            backgroundImage: `url('/images/Contact_us.jpg')`,
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
            Contact Us
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
      {/* <BreadcrumbBanner pageTitle="Contact Us" /> */}

      <div className="contact-form section-gap bg-grey-light-three">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <ContactForm />
            </div>
            <div className="col-lg-5">
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
      <div className="section-gap our-location section-gap-top__with-text">
        <div className="container">
          <div className="section-title">
            <h2 className="axil-title m-b-xs-40">Our Location</h2>
          </div>
          {/* End of .section-title */}
          <div className="axil-map-wrapper m-b-xs-30">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65323685.5466851!2d-90.41887654143267!3d2.137822078029002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8838935d05ab2f23%3A0x9c971993f29450fc!2s6555%2C%206605%20Longshore%20St%2C%20Dublin%2C%20OH%2043017%2C%20USA!5e0!3m2!1sen!2sin!4v1715191335841!5m2!1sen!2sin"
              width={600}
              height={450}
              allowFullScreen
            />
          </div>
          {/* End of .axil-map-wrapper */}
        </div>
        {/* End of .container */}
      </div>
      <FooterTwo />
    </>
  );
};

export default ContactPage;
