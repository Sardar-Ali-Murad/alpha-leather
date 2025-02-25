import React from "react";

const About = () => {
  return (
    <div className="home_about_wrap">
      <section className="about" id="about">
        <h1 className="heading"> About Our Bags Collection </h1>

        <div className="row">
          <div className="content">
            <div>
              <h3>Experience Luxury & Style in Every Bag!</h3>
              <p>
                At our store, we craft premium bags with elegance and durability.
                From trendy handbags to custom-designed backpacks, we offer top-quality 
                craftsmanship for every style.
              </p>
              <a
                href={`https://wa.me/923186881689`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Learn More
              </a>
            </div>
            <div className="services_page_home">
              <div className="box-container">
                <div className="box">
                  <img
                    src="images/services/custom-bag.png"
                    alt="Custom Bag Design"
                  />
                  <h3>Custom Bag Design</h3>
                  <p>
                    Get your dream bag designed just for you! Choose materials, 
                    colors, and styles to match your personality.
                  </p>
                </div>

                <div className="box">
                  <img src="images/services/leather-repair.png" alt="Leather Repair" />
                  <h3>Leather Bag Repair</h3>
                  <p>
                    Restore your favorite leather bags with our expert repair 
                    services. We fix scratches, tears, and worn-out handles.
                  </p>
                </div>

                <div className="box">
                  <img
                    src="images/services/personalized.png"
                    alt="Bag Personalization"
                  />
                  <h3>Bag Personalization</h3>
                  <p>
                    Add a unique touch with custom initials, logos, or artwork. 
                    Personalize your bag to make it truly yours.
                  </p>
                </div>

                <div className="box">
                  <img src="images/services/premium-materials.png" alt="Premium Materials" />
                  <h3>Premium Materials</h3>
                  <p>
                    We use only high-quality leather, fabrics, and sustainable 
                    materials to create bags that last a lifetime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="box-container">
          <div className="box">
            <h3>10+</h3>
            <p>Years of Excellence</p>
          </div>

          <div className="box">
            <h3>5000+</h3>
            <p>Happy Customers</p>
          </div>

          <div className="box">
            <h3>1000+</h3>
            <p>Exclusive Designs</p>
          </div>

          <div className="box">
            <h3>20+</h3>
            <p>Global Shipping Locations</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
