// components/LogoSlider.js
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { client } from "../../client";

const LogoSlider = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const query = '*[_type == "brand"] { "imageUrl": image.asset->url }';
    client.fetch(query).then((data) => {
      setImages(data);
    });
  }, []);

  return (
    <div className="container my-5 ">
      <h2 className="text-center mb-4">Our Partner Brands</h2>
      <div className="row">
        <div className="col">
          <div className="logo-slider">
            <div className="logo-slide-track">
              {[...images, ...images].map((image, index) => (
                <div key={index} className="logo-slide">
                  <Image
                    src={image.imageUrl}
                    alt={`Brand logo ${index + 1}`}
                    width={200}
                    height={80}
                    quality={100}
                    objectFit="contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .logo-slider {
          height: 100px;
          position: relative;
          overflow: hidden;
          padding: 10px 0;
        }
        .logo-slide-track {
          display: flex;
          animation: scroll 40s linear infinite;
          width: calc(250px * ${images.length * 2});
        }
        .logo-slide {
          height: 80px;
          width: 200px;
          margin: 0 25px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-250px * ${images.length}));
          }
        }
      `}</style>
    </div>
  );
};

export default LogoSlider;
