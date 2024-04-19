import Image from "next/image";
import Link from "next/link";
import SocialLink from "../../data/social/SocialLink.json";
import styles from "../../styles/footer.module.css"; // Import the CSS module

const FooterTwo = () => {
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
        }}
      >
        <div className="logo ">
          <div className="footer-logo-container">
            <Link href="/">
              <Image
                src="/images/full_trimmed_transparent_base.png"
                alt="brand-logo"
                width={300}
                height={100}
                style={{ objectFit: "contain" }}
              />
            </Link>
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
          </div>
        </div>
        <div
          className={`${styles.footer_content} footer_content`}
          style={{ margin: "1rem", color: "white" }}
        >
          <p style={{ width: "100%", color: "white" }}>
            The Business Masters Magazine Publication stands as a premier hub
            for business and entrepreneurship wisdom, committed to showcasing
            the triumphs of thriving businesses and visionary entrepreneurs
            globally.
          </p>
          <p style={{ width: "100%", color: "white" }}>
            We aim to be the top platform for global business leaders and
            companies, driving progress, offering valuable learning experiences,
            and boosting brand awareness to our readers
          </p>
        </div>
        <div>
          <h4 style={{ color: "white" }}>QUICK LINKS</h4>
          <ul className="footer-bottom-links">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About Us</Link>
            </li>
            <li>
              <Link href="/">Magazine</Link>
            </li>
            <li>
              <Link href="/"> Blogs</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </div>
        <div style={{ width: "30%" }}>
          <h4
            style={{
              color: "white",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            MAGAZINES
          </h4>
        </div>
      </div>
      <div style={{ borderBottom: "1px solid white" }}></div>
      <p style={{ textAlign: "center", marginTop: "1rem" }}>
        &copy;Copyright 2024, The Business Masters | All Rights Reserved.
      </p>
    </footer>
  );
};

export default FooterTwo;
