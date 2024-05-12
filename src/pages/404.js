import Link from "next/link";
import HeadMeta from "../components/elements/HeadMeta";

import HeaderOne from "../components/header/HeaderOne";
import FooterTwo from "../components/footer/FooterTwo";

const ErrorPage = () => {
  return (
    <>
      <HeadMeta metaTitle="404 Error Not Found" />
      {/* <HeaderOne /> */}
      <div className="error-404-banner bg-grey-light-three">
        <div className="container">
          <div className="error-404-content text-center">
            <div className="txt-404 tilt-this">404</div>
            <div className="error-inner-content">
              <h1 className="h1 m-b-xs-20 m-b-md-40">
                Sorry, This Page Doesn&apos;t Exist.
              </h1>
              <Link className="btn btn-primary" href="/">
                BACK TO HOMEPAGE
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <FooterOne /> */}
    </>
  );
};

export default ErrorPage;
