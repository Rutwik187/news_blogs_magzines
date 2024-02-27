import Image from "next/image";
import Link from "next/link";
import FormGroup from "../components/contact/FormGroup";
import HeadMeta from "../components/elements/HeadMeta";
import SocialLink from "../data/social/SocialLink.json";

const ComimgSoon = () => {
    return (
        <>
            <HeadMeta metaTitle="Under Construction" />
            <div className="under-construction-banner" style={{backgroundImage: "url(images/others/under-construction-banner.jpg)"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5">
                            <div className="under-construction-inner-content">
                                <div className="brand-logo-container">
                                    <Link href="/">
                                        
                                            <Image 
                                            src="/images/logo-black.svg" 
                                            alt="Brand Logo" 
                                            className="brand-logo"
                                            height={45}
                                            width={135}
                                            />
                                        
                                    </Link>
                                </div>
                                {/* End of .brand-logo-container */}
                                <div className="axil-title">
                                    <h1 className="h1 m-0">This Project Is
                                        <br />Under Construction</h1>
                                </div>
                                <div className="newsletter-content">
                                    <div className="text-left">
                                        <h2 className="h5 m-b-xs-10">Are You Interested?</h2>
                                        <p className="m-b-xs-20">Be the first to know when we launch.
                                            <br />Sign up for this website updates using the form below.</p>
                                    </div>
                                    {/* End of .section-title */}
                                    <div className="subscription-form-wrapper">
                                        <form action="#" className="subscription-form row no-gutters">
                                            <FormGroup pClass="m-b-xs-20 col-auto" label="Enter Email Address" type="text" name="subscription-email" />
                                            <div className="m-b-xs-0 col-auto">
                                                <button className="btn btn-primary">SUBSCRIBE</button>
                                            </div>
                                        </form>
                                        {/* End of .subscription-form */}
                                    </div>
                                    {/* End of .subscription-form-wrapper */}
                                    <div className="contact-social-share m-t-xs-20">
                                        <div className="axil-social-title h5">Follow Us</div>
                                        <ul className="social-share social-share__with-bg">
                                            <li>
                                                <a href={SocialLink.fb.url}>
                                                <i className={SocialLink.fb.icon} />
                                                
                                            </li>
                                            <li>
                                                <a href={SocialLink.twitter.url}>
                                                <i className={SocialLink.twitter.icon} />
                                                
                                            </li>
                                            <li>
                                                <a href={SocialLink.yt.url}>
                                                <i className={SocialLink.yt.icon} />
                                                
                                            </li>
                                            <li>
                                                <a href={SocialLink.linked.url}>
                                                <i className={SocialLink.linked.icon} />
                                                
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End of .col-lg-8 */}
                    </div>
                    {/* End of .row */}
                </div>
                {/* End of .container */}
            </div>

        </>
    );
}

export default ComimgSoon;