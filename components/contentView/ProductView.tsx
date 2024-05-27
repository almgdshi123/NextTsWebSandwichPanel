"use client";
import React, { useState, useEffect, useRef,MouseEvent  } from "react";
import "./productView.css";

export default function ProductView({  data }) {
  const [imgId, setImgId] = useState<number>(1);
  const imgShowcaseRef = useRef<HTMLDivElement>(null);

  // معالج النقر
  const handleClick = (event: MouseEvent, newImgId: number) => {
    event.preventDefault();
    setImgId(newImgId);
  };

  useEffect(() => {
    const slideImage = () => {
      if (imgShowcaseRef.current) {
        const displayWidth = imgShowcaseRef.current.querySelector("img:first-child")?.clientWidth || 0;
        imgShowcaseRef.current.style.transform = `translateX(${(imgId - 1) * displayWidth}px)`;
      }
    };

    slideImage();

    // Add resize event listener
    window.addEventListener("resize", slideImage);

    // Cleanup resize event listener
    return () => {
      window.removeEventListener("resize", slideImage);
    };
  }, [imgId]);

  return (
    <div className="container">
      <div className="card-wrapper">
       
            {   data.data.map((data) =>
                  
                      <div className="card-details" key={data.id}>
                        <div className="product-imgs">
                          <div className="img-display">
                            <div className="img-showcase" ref={imgShowcaseRef}>
                              {data.imagedata.map((image, imageId) => (
                                <img
                                  loading="lazy"
                                  src={image.image}
                                  alt={image.title}
                                  key={imageId}
                                />
                              ))}
                            </div>
                          </div>
                          <div className="img-select">
                            {data.imagedata.map((image, index) => (
                              <div className="img-item" key={index}>
                                <a
                                  key={index}
                                  href="/"
                                  data-id={index + 1}
                                  onClick={(e) => handleClick(e, index + 1)}
                                >
                                  <img
                                    src={image.image}
                                    alt={image.title}
                                    loading="lazy"
                                  />
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
    
                        {/*  card left  */}
                        <div className="product-content">
                          <h2 className="product-title">{data.title} </h2>
                          <a
                            href={"/product-sandwich/" + data.href}
                            className="product-link"
                            title={data.alt}
                          >
                            {data.title}
                          </a>
                          <div className="product-rating">
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-half-fill"></i>
                            <span>4.7(21)</span>
                          </div>
    
                          <div className="product-price">
                            <p className="last-price">
                              <span>{data.priceOld}</span>
                            </p>
                            <p className="new-price">
                              <span>{data.priceNew}</span>
                            </p>
                          </div>
    
                          <div className="product-detail">
                            <h2>حول الخدمة: </h2>
                            <p>{data.description}</p>
                            <p>مميزات {data.title}:</p>
                            <ul>
                              {data.features.map((feature, featureId) => (
                                <li key={featureId}>
                                  {feature.title} :{" "}
                                  <span> {feature.description} .</span>
                                </li>
                              ))}
                            </ul>
                          </div>
    
                          <div className="purchase-info">
                            <input type="number" min="0" defaultValue="1" />
                            <a
                              type="button"
                              href="https://api.whatsapp.com/send?phone=966500513512"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn"
                            >
                              تسوق <i className=" ri-shopping-cart-fill"></i>
                            </a>
                            {/* <button type="button" className="btn">
                              اضافة للمفضلة <i className="ri-heart-line"></i>
                            </button> */}
                          </div>
    
                          <div className="social-links">
                            <p>مشاركة: </p>
                            <a href="/">
                              <i className="ri-facebook-line"></i>
                            </a>
                            <a href="/">
                              <i className="ri-twitter-line"></i>
                            </a>
                            <a href="/">
                              <i className="ri-instagram-line"></i>
                            </a>
                            <a href="/">
                              <i className="ri-whatsapp-line  "></i>
                            </a>
                            <a href="/">
                              <i className="ri-pinterest-line"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                   
                        )
        }


      </div>


      {/* {dataDetails.map((item, index) =>
            item.href === herfName ? (
              <div>
                <h1>{item.href}</h1>

                {item.data.map((data, id) =>
                  data.id.toString() === productId ? <h1>{data.id}</h1> : null
                )}
              </div>
            ) : null
          )} */}
    </div>
  );
}
