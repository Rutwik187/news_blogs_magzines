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
      <HeadMeta metaTitle="Contact Us" />
      <HeaderOne />
      <Breadcrumb aPage="Contact Us" />
      <BreadcrumbBanner pageTitle="Contact Us" />

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
