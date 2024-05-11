"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Slider from "react-slick";
import { slugify } from "../../utils";
import { useQuery } from "@tanstack/react-query";
import { client } from "../../client";
import ErrorPage from "../../pages/404";
import Loader from "../common/Loader";

const SliderOne = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["slider-post"],
    queryFn: async () => {
      const query = `*[_type == 'post' && featured == true]{
      title,
      slug,
      'featureImg': mainImage.asset->url,

      'cate': categories[0]->title
    }[0...3]`; // Get up to 3 featured posts

      const response = await client.fetch(query);
      return response;
    },
  });

  function SlickNextArrow(props) {
    const { className, onClick } = props;
    return (
      <button className={className} onClick={onClick}>
        <i className="feather icon-chevron-right"></i>
      </button>
    );
  }

  function SlickPrevArrow(props) {
    const { className, onClick } = props;
    return (
      <button className={className} onClick={onClick}>
        <i className="feather icon-chevron-left"></i>
      </button>
    );
  }

  const slideSettingsContent = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  };

  const slideSettingsImage = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    nextArrow: <SlickNextArrow />,
    prevArrow: <SlickPrevArrow />,
  };

  const slideSettingsShare = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    vertical: true,
  };

  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [nav3, setNav3] = useState();

  // Social Share Toggle
  const ShareToggler = (e) => {
    const targeElm = e.target.nextElementSibling;
    targeElm.classList.toggle("show-shares");
  };

  return (
    <div className="banner banner__home-with-slider banner__home-with-slider-one section-gap-bottom">
      <div className="banner__home-with-slider-overlay"></div>
      {/* End of .banner__home-with-slider-overlay */}
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="banner-slider-container">
              {isLoading && <Loader />}
              {error && <ErrorPage />}
              {data && (
                <Slider
                  asNavFor={nav2}
                  ref={(slider1) => setNav1(slider1)}
                  {...slideSettingsContent}
                  className="slick-slider-for slick-synced"
                >
                  {data.slice(0, 3).map((data) => (
                    <div className="item" key={data.slug}>
                      {/* End of .post-metas */}
                      <h1 className="page-title m-b-xs-40 hover-line">
                        <Link href={`/post/${data.slug.current}`}>
                          {data.title}
                        </Link>
                      </h1>
                      <div className="btn-group">
                        <Link
                          className="btn btn-primary m-r-xs-30"
                          href={`/post/${data.slug.current}`}
                        >
                          Read Article
                        </Link>
                        {/* <Link
                          className="btn-link"
                          href={`/magazine/${slugify(data.slug.current)}`}
                        >
                          Digital Magazine
                        </Link> */}
                      </div>
                    </div>
                  ))}
                </Slider>
              )}
            </div>
          </div>
        </div>
        <div className="banner-slider-container-synced">
          <Slider
            asNavFor={nav3}
            ref={(slider2) => setNav2(slider2)}
            {...slideSettingsImage}
            className="slick-slider-nav slick-synced"
          >
            {data?.slice(0, 3).map((data) => (
              <div className="item" key={data.slug}>
                <Image
                  src={data.featureImg}
                  alt={data.title}
                  width={2000}
                  height={2000}
                />
              </div>
            ))}
          </Slider>

          <div className="banner-share-slider-container">
            <Slider
              asNavFor={nav1}
              ref={(slider3) => setNav3(slider3)}
              {...slideSettingsShare}
              className="banner-share-slider"
            >
              {data?.slice(0, 3).map((data) => (
                <div className="item" key={data.slug}>
                  <div className="banner-shares slick-banner-shares">
                    <div className="toggle-shares" onClick={ShareToggler}>
                      Shares <span>+</span>
                    </div>
                    <div className="social-share-wrapper">
                      <ul className="social-share social-share__with-bg">
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-brands fa-x-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-behance" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderOne;
