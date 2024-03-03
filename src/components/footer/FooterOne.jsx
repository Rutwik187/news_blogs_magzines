import Image from "next/image";
import Link from "next/link";
import SocialLink from "../../data/social/SocialLink.json";

const FooterOne = () => {
  return (
    <footer className="page-footer bg-grey-dark-key">
      <div className="container">
        <div className="footer-top">
          <div className="row">
            <div className="col-lg-2 col-md-4 col-6">
              <div className="footer-widget">
                <h2 className="footer-widget-title">World</h2>
                <ul className="footer-nav">
                  <li>
                    <Link href="/">U.N.</Link>
                  </li>
                  <li>
                    <Link href="/">Conflicts</Link>
                  </li>
                  <li>
                    <Link href="/">Terrorism</Link>
                  </li>
                  <li>
                    <Link href="/">Disasters</Link>
                  </li>
                  <li>
                    <Link href="/">Global Economy</Link>
                  </li>
                  <li>
                    <Link href="/">Global Economy</Link>
                  </li>
                  <li>
                    <Link href="/">Environment</Link>
                  </li>
                  <li>
                    <Link href="/">Religion</Link>
                  </li>
                  <li>
                    <Link href="/">Scandals</Link>
                  </li>
                </ul>
                {/* End of .footer-nav */}
              </div>
              {/* End of .footer-widget */}
            </div>
            {/* End of .col-lg-2 */}
            <div className="col-lg-2 col-md-4 col-6">
              <div className="footer-widget">
                <h2 className="footer-widget-title">Politics</h2>
                <ul className="footer-nav">
                  <li>
                    <Link href="/">Executive</Link>
                  </li>
                  <li>
                    <Link href="/">Senate</Link>
                  </li>
                  <li>
                    <Link href="/">House</Link>
                  </li>
                  <li>
                    <Link href="/">Judiciary</Link>
                  </li>
                  <li>
                    <Link href="/">Foreign policy</Link>
                  </li>
                  <li>
                    <Link href="/">Polls</Link>
                  </li>
                  <li>
                    <Link href="/">Elections</Link>
                  </li>
                </ul>
                {/* End of .footer-nav */}
              </div>
              {/* End of .footer-widget */}
            </div>
            {/* End of .col-lg-2 */}
            <div className="col-lg-2 col-md-4 col-6">
              <div className="footer-widget">
                <h2 className="footer-widget-title">Entertainment</h2>
                <ul className="footer-nav">
                  <li>
                    <Link href="/">Celebrity News</Link>
                  </li>
                  <li>
                    <Link href="/">Movies</Link>
                  </li>
                  <li>
                    <Link href="/">TV News</Link>
                  </li>
                  <li>
                    <Link href="/">Music News</Link>
                  </li>
                  <li>
                    <Link href="/">Style News</Link>
                  </li>
                  <li>
                    <Link href="/">Entertainment Video</Link>
                  </li>
                </ul>
                {/* End of .footer-nav */}
              </div>
              {/* End of .footer-widget */}
            </div>
            {/* End of .col-lg-2 */}
            <div className="col-lg-2 col-md-4 col-6">
              <div className="footer-widget">
                <h2 className="footer-widget-title">Business</h2>
                <ul className="footer-nav">
                  <li>
                    <Link href="/">Markets</Link>
                  </li>
                  <li>
                    <Link href="/">Politics</Link>
                  </li>
                  <li>
                    <Link href="/">Technology</Link>
                  </li>
                  <li>
                    <Link href="/">Features</Link>
                  </li>
                  <li>
                    <Link href="/">Business Leaders</Link>
                  </li>
                </ul>
                {/* End of .footer-nav */}
              </div>
              {/* End of .footer-widget */}
            </div>
            {/* End of .col-lg-2 */}
            <div className="col-lg-2 col-md-4 col-6">
              <div className="footer-widget">
                <h2 className="footer-widget-title">Health</h2>
                <ul className="footer-nav">
                  <li>
                    <Link href="/">Healthy Living</Link>
                  </li>
                  <li>
                    <Link href="/">Medical Research</Link>
                  </li>
                  <li>
                    <Link href="/">Mental Health</Link>
                  </li>
                  <li>
                    <Link href="/">Cancer</Link>
                  </li>
                  <li>
                    <Link href="/">Heart Health</Link>
                  </li>
                  <li>
                    <Link href="/">Children&apos;s Health</Link>
                  </li>
                </ul>
                {/* End of .footer-nav */}
              </div>
              {/* End of .footer-widget */}
            </div>
            {/* End of .col-lg-2 */}
            <div className="col-lg-2 col-md-4 col-6">
              <div className="footer-widget">
                <h2 className="footer-widget-title">About</h2>
                <ul className="footer-nav">
                  <li>
                    <Link href="/">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="/">Careers</Link>
                  </li>
                  <li>
                    <Link href="/">Fox Around the World</Link>
                  </li>
                  <li>
                    <Link href="/">Advertise With Us</Link>
                  </li>
                  <li>
                    <Link href="/">Ad Choices</Link>
                  </li>
                  <li>
                    <Link href="/">Media Relations</Link>
                  </li>
                  <li>
                    <Link href="/">Compliance</Link>
                  </li>
                </ul>
                {/* End of .footer-nav */}
              </div>
              {/* End of .footer-widget */}
            </div>
            {/* End of .col-lg-2 */}
          </div>
          {/* End of .row */}
        </div>
        {/* End of .footer-top */}
        <div className="footer-mid">
          <div className="row align-items-center">
            <div className="col-md">
              <div className="footer-logo-container">
                <Link href="/">
                  <Image
                    src="/images/logo.svg"
                    alt="footer logo"
                    className="footer-logo"
                    width={86}
                    height={28}
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

export default FooterOne;
