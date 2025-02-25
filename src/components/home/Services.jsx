import React from "react";

const Services = () => {
  return (
    <div className="services-container">
      <section className="services" id="services">
        <h1 className="heading"> Our Services </h1>

        <div className="box-container">
          <div className="box">
            <img src="images/services/custom-bag.png" alt="Custom Bag Design" />
            <h3>Custom Bag Design</h3>
            <p>
              Get a bag designed exclusively for you! Choose materials, colors, 
              and styles to match your personality.
            </p>
          </div>

          <div className="box">
            <img src="images/services/leather-repair.png" alt="Leather Bag Repair" />
            <h3>Leather Bag Repair</h3>
            <p>
              Restore your favorite leather bags with expert repairs. We fix scratches, 
              tears, and worn-out handles.
            </p>
          </div>

          <div className="box">
            <img src="images/services/bag-personalization.png" alt="Bag Personalization" />
            <h3>Bag Personalization</h3>
            <p>
              Add initials, logos, or custom artwork to make your bag unique.
              A touch of exclusivity, just for you.
            </p>
          </div>

          <div className="box">
            <img src="images/services/luxury-bags.png" alt="Luxury Handbags" />
            <h3>Luxury Handbags</h3>
            <p>
              Explore our premium collection of designer handbags made from 
              the finest materials.
            </p>
          </div>

          <div className="box">
            <img src="images/services/bag-care.png" alt="Bag Care & Cleaning" />
            <h3>Bag Care & Cleaning</h3>
            <p>
              Keep your bags looking new with our professional cleaning and 
              maintenance services.
            </p>
          </div>

          <div className="box">
            <img src="images/services/travel-bags.png" alt="Travel Bags & Accessories" />
            <h3>Travel Bags & Accessories</h3>
            <p>
              Durable and stylish travel bags designed for comfort and 
              convenience on the go.
            </p>
          </div>

          <div className="box">
            <img src="images/services/bag-repair.png" alt="Zipper & Strap Fixing" />
            <h3>Zipper & Strap Fixing</h3>
            <p>
              Fix broken zippers, replace straps, and reinforce stitching 
              for long-lasting durability.
            </p>
          </div>

          <div className="box">
            <img src="images/services/designer-bags.png" alt="Exclusive Designer Bags" />
            <h3>Exclusive Designer Bags</h3>
            <p>
              Discover limited-edition designer bags crafted for elegance 
              and sophistication.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
