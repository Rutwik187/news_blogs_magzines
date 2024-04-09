import Image from "next/image";
import Link from "next/link";
import SocialLink from "../../data/social/SocialLink.json";

const FooterTwo = () => {
  return (
    <footer className="page-footer bg-grey-dark-key">
      <div className="custom-fluid-container">
        <div className="footer-mid pt-0">
          <div className="row align-items-center">
            <div className="col-md">
              <div className="footer-logo-container">
                <Link href="/">
                  <Image
                    src="/images/icon_trimmed_transparent_white.png"
                    alt="footer logo"
                    className="footer-logo"
                    width={86}
                    height={100}
                    style={{ objectFit: "contain" }}
                  />
                </Link>
              </div>
              {/* End of .brand-logo-container */}
            </div>
            {/* End of .col-md-6 */}
            <div className="col-md-auto">
              <div className="footer-social-share-wrapper">
                <div className="footer-social-share">
                  <div className="axil-social-title">Find us here</div>
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
              </div>
              {/* End of .footer-social-share-wrapper */}
            </div>
            {/* End of .col-md-6 */}
          </div>
          {/* End of .row */}
        </div>

        {/* End of .footer-mid */}
        <div className="footer-bottom">
          <ul className="footer-bottom-links">
            <li>
              <Link href="/">Terms of Use</Link>
            </li>
            <li>
              <Link href="/">Accessibility &amp; CC</Link>
            </li>
            <li>
              <Link href="/">AdChoices</Link>
            </li>
            <li>
              <Link href="/">Modern Slavery Act Statement</Link>
            </li>
            <li>
              <Link href="/">Advertise with us</Link>
            </li>
            <li>
              <Link href="/"> Store</Link>
            </li>
            <li>
              <Link href="/">Newsletters</Link>
            </li>
            <li>
              <Link href="/">Transcripts</Link>
            </li>
            <li>
              <Link href="/">License Footage</Link>
            </li>
            <li>
              <Link href="/">Sitemap</Link>
            </li>
          </ul>
          {/* End of .footer-bottom-links */}
          <p className="axil-copyright-txt">
            © {new Date().getFullYear()}. All rights reserved by Your Company.
          </p>
        </div>
        {/* End of .footer-bottom */}
      </div>
      {/* End of .container */}
    </footer>
  );
};

export default FooterTwo;
