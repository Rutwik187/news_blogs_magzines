import Link from "next/link";
import Offcanvas from "react-bootstrap/Offcanvas";
import SocialLink from "../../data/social/SocialLink.json";

const OffcanvasMenu = ({ ofcshow, ofcHandleClose }) => {
  return (
    <Offcanvas
      show={ofcshow}
      onHide={ofcHandleClose}
      placement="end"
      className="offcanvas-menu"
    >
      <Offcanvas.Header
        closeButton
        className="close-offcanvasmeu"
      ></Offcanvas.Header>
      <div className="side-nav">
        <div className="side-nav-inner nicescroll-container">
          <form action="#" className="side-nav-search-form">
            <div className="form-group search-field">
              <input
                type="text"
                className="search-field"
                name="search-field"
                placeholder="Search..."
              />
              <button className="side-nav-search-btn">
                <i className="fas fa-search" />
              </button>
            </div>
            {/* End of .side-nav-search-form */}
          </form>
          {/* End of .side-nav-search-form */}
          <div className="side-nav-content">
            <div className="row ">
              <div className="col-lg-6">
                <ul className="main-navigation side-navigation list-inline flex-column">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/magazines">Magazines</Link>
                  </li>
                  <li>
                    <Link href="/blogs">Blogs</Link>
                  </li>
                  <li>
                    <Link href="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Contact Us</Link>
                  </li>
                </ul>
                {/* End of .main-navigation */}
              </div>
              {/* End of  .col-md-6 */}
              <div className="col-lg-6">
                <div className="axil-contact-info-inner">
                  <h5 className="h5 m-b-xs-10">Contact Information</h5>
                  <div className="axil-contact-info">
                    <address className="address">
                      <p className="m-b-xs-30  mid grey-dark-three ">
                        6605 Longshore St, Dublin,
                        <br />
                        OH 43017, USA
                      </p>
                      <div className="h5 m-b-xs-5">
                        We&apos;re Available 24/ 7. Call Now.
                      </div>
                      <div>
                        <a className="tel" href="tel:+16143567697">
                          <i className="fas fa-phone" />
                          +1 (614) 356-7697{" "}
                        </a>
                      </div>
                    </address>
                    {/* End of address */}
                    <div className="contact-social-share m-t-xs-30">
                      <div className="axil-social-title h5">Follow Us</div>
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
                          <a href={SocialLink.behance.url}>
                            <i className={SocialLink.behance.icon} />
                          </a>
                        </li>
                        <li>
                          <a href={SocialLink.linked.url}>
                            <i className={SocialLink.linked.icon} />
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* End of .contact-shsdf */}
                  </div>
                  {/* End of .axil-contact-info */}
                </div>
                {/* End of .axil-contact-info-inner */}
              </div>
            </div>
            {/* End of .row */}
          </div>
        </div>
        {/* End of .side-nav-inner */}
      </div>
    </Offcanvas>
  );
};

export default OffcanvasMenu;
