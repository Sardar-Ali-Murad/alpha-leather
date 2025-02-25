import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function Hero() {
  return (
    <>
      <div className="home" id="home">
        <div className="swiper home-slider">
          <div className="swiper-wrapper">
            <Swiper navigation={true} modules={[Navigation]}>
              <SwiperSlide>
                <div className="slide">
                  <img src="images/bag-1.jpeg" className="heroImage" />
                  <div className="home-section-wrap">
                    <div className="content home-section">
                      <h3>Timeless Bags for Every Occasion</h3>
                      <p>
                        Discover our collection of premium handcrafted bags, designed 
                        for style and durability. Whether for work, travel, or everyday use, 
                        our bags are made to complement your lifestyle with elegance and functionality.
                      </p>
                      <a
                        href={`https://wa.me/923186881689`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide">
                  <img src="images/bag-2.jpeg" className="heroImage" />
                  <div className="home-section-wrap">
                    <div className="content home-section">
                      <h3>Crafted with Passion</h3>
                      <p>
                        Our bags are more than just accessories – they are a statement of 
                        quality and craftsmanship. Designed with attention to detail, each bag 
                        is a blend of elegance and durability, ensuring you stand out wherever you go.
                      </p>
                      <a
                        href={`https://wa.me/923186881689`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                      >
                        Explore Collection
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide">
                  <img src="images/bag-3.jpeg" className="heroImage" />
                  <div className="home-section-wrap">
                    <div className="content home-section">
                      <h3>Designed for Your Journey</h3>
                      <p>
                        From city streets to weekend getaways, our bags are built to keep up with your 
                        lifestyle. Stylish, practical, and made to last – experience the perfect balance 
                        of form and function with every piece in our collection.
                      </p>
                      <a
                        href={`https://wa.me/923186881689`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                      >
                        Browse Now
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
