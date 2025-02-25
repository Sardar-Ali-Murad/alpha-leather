import React from "react";

const Offers = () => {
  let array = [
    {
      id: "1",
      image: "images/offer/1.jpg",
      title: "Premium Leather Tote Bags",
      detail:
        "Our leather tote bags combine style and functionality. Designed for everyday use, they offer ample space and a timeless look. Crafted from high-quality leather, these bags are built to last and complement any outfit effortlessly.",
    },
    {
      id: "2",
      image: "images/offer/2.jpg",
      title: "Elegant Crossbody Bags",
      detail:
        "Perfect for those on the go, our crossbody bags offer a hands-free experience with a chic design. Made from durable leather, they provide both security and style, ensuring convenience without compromising on fashion.",
    },
    {
      id: "3",
      image: "images/offer/3.jpg",
      title: "Handcrafted Leather Backpacks",
      detail:
        "Our handcrafted leather backpacks are ideal for work, travel, and daily use. With spacious compartments and a sturdy build, these bags are designed to carry all your essentials while exuding sophistication.",
    },
    {
      id: "4",
      image: "images/offer/4.jpg",
      title: "Stylish Leather Clutches",
      detail:
        "For a touch of elegance, our leather clutches are the perfect accessory. Whether for casual outings or formal events, these compact yet spacious clutches add a refined edge to your look.",
    },
    {
      id: "5",
      image: "images/offer/5.jpg",
      title: "Durable Leather Duffel Bags",
      detail:
        "Designed for travel and adventure, our leather duffel bags offer both durability and sophistication. With a spacious interior and sturdy handles, they make the perfect travel companion.",
    },
    {
      id: "6",
      image: "images/offer/6.jpg",
      title: "Professional Leather Briefcases",
      detail:
        "Make a statement at work with our premium leather briefcases. Featuring a sleek design and functional compartments, they offer both style and organization for professionals on the move.",
    },
  ];

  return (
    <div className="home_offer_wrap">
      <section className="home_offer" id="blogs">
        <h1 className="heading">
          What We <span>Offer</span>
        </h1>

        <div className="box-container">
          {array?.map((item) => {
            return (
              <div className="box" key={item?.id}>
                <div className="image">
                  <img src={item?.image} alt={item?.title} />
                </div>
                <div className="content">
                  <h3>{item?.title}</h3>
                  <p>{item?.detail}</p>
                  <a className="btn" style={{ visibility: "hidden" }}>
                    learn more
                  </a>
                </div>
                <div className="btn-wrap">
                  <a
                    className="btn"
                    href={`https://wa.me/923186881689`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    learn more
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Offers;
