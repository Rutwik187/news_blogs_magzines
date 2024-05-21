"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import Slider from "react-slick";
import { client, urlFor } from "../../client";
import { useQuery } from "@tanstack/react-query";
import Loader from "../common/Loader";

const WidgetCategory = () => {
  const CustomNavRef = useRef(null);

  const {
    isLoading,
    isError,
    data: categoryData,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const fetchResult = await client.fetch(`*[_type == "category"]`);
      return fetchResult;
    },
  });

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <div>An error occurred...</div>;
  }

  const slideSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    adaptiveHeight: true,
  };

  return (
    <div className="category-widget m-b-xs-40">
      <div className="widget-title">
        <h3>Categories</h3>
        <div className="owl-nav">
          <button
            className="custom-owl-prev"
            onClick={() => CustomNavRef?.current?.slickPrev()}
          >
            <i className="feather icon-chevron-left" />
          </button>
          <button
            className="custom-owl-next"
            onClick={() => CustomNavRef?.current?.slickNext()}
          >
            <i className="feather icon-chevron-right" />
          </button>
        </div>
      </div>
      <div className="category-carousel">
        <Slider ref={CustomNavRef} {...slideSettings}>
          <div className="cat-carousel-inner">
            <ul className="category-list-wrapper">
              {categoryData?.slice(0, 4).map((data) => (
                <li
                  className="category-list perfect-square"
                  key={data.slug?.current}
                >
                  <Link
                    className="list-inner"
                    href={`/category/${data.slug?.current}`}
                  >
                    <Image
                      src={urlFor(data.category_image).url()}
                      alt={data?.altText || categoryData.title}
                      width={155}
                      height={190}
                    />
                    <div className="post-info-wrapper overlay">
                      <h4 className="cat-title">{data.title}</h4>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="cat-carousel-inner">
            <ul className="category-list-wrapper">
              {categoryData?.slice(5, 9).map((data) => (
                <li
                  className="category-list perfect-square"
                  key={data.slug?.current}
                >
                  <Link
                    className="list-inner"
                    href={`/category/${data.slug?.current}`}
                  >
                    <Image
                      src={urlFor(data.category_image).url()}
                      alt={data.altText || categoryData.title}
                      width={155}
                      height={190}
                    />
                    <div className="post-info-wrapper overlay">
                      <h4 className="cat-title">{data.title}</h4>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="cat-carousel-inner">
            <ul className="category-list-wrapper">
              {categoryData?.slice(10, 14).map((data) => (
                <li
                  className="category-list perfect-square"
                  key={data.slug?.current}
                >
                  <Link
                    className="list-inner"
                    href={`/category/${data.slug?.current}`}
                  >
                    <Image
                      src={urlFor(data.category_image).url()}
                      alt={data.altText || categoryData.title}
                      width={155}
                      height={190}
                    />
                    <div className="post-info-wrapper overlay">
                      <h4 className="cat-title">{data.title}</h4>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default WidgetCategory;
