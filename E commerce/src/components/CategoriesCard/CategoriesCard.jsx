import React from "react";
import { useState } from "react";
import "./Categoriescard.css";
import { Link } from "react-router-dom";
const CategoriesCard = () => {
  const [cardOne, setCardOne] = useState("tc-post post post-graphic post-left");
  const [cardTwo, setCardTwo] = useState(
    "tc-post post post-graphic post-left hover"
  );
  const [cardThree, setCardThree] = useState(
    "tc-post post post-graphic post-left"
  );
  const handleMouseOverOne = () => {
    setCardOne("tc-post post post-graphic post-left hover");
    setCardTwo("tc-post post post-graphic post-left");
    setCardThree("tc-post post post-graphic post-left");
  };
  const handleMouseOverTwo = () => {
    setCardOne("tc-post post post-graphic post-left");
    setCardTwo("tc-post post post-graphic post-left hover");
    setCardThree("tc-post post post-graphic post-left");
  };
  const handleMouseOverThree = () => {
    setCardOne("tc-post post post-graphic post-left");
    setCardTwo("tc-post post post-graphic post-left");
    setCardThree("tc-post post post-graphic post-left hover");
  };

  const handleMouseOutOne = () => {
    setCardOne("tc-post post post-graphic post-left");
  };
  const handleMouseOutTwo = () => {
    setCardTwo("tc-post post post-graphic post-left");
  };
  const handleMouseOutThree = () => {
    setCardThree("tc-post post post-graphic post-left");
  };
  return (
    <section
      className="contentblock-ThreeColumnImages #FFDBAB"
      style={{ marginTop: "30px" }}
    >
      <Link to="/product/list/">
        <div className="grid">
          <div className="flex-container flex align-end">
            <div className="col-4-12 flex">
              <article
                className={cardOne}
                onMouseOver={handleMouseOverOne}
                onMouseOut={handleMouseOutOne}
              >
                <a href="/" className="no-underline">
                  <div className="image-padding">
                    <div className="image">
                      <figure
                        style={{
                          backgroundImage: `url("https://www.orangebag.nl/cache/the-modern-shoe-list.680047/the-modern-shoe-list-500-700.jpg")`,
                        }}
                      ></figure>
                    </div>
                  </div>
                  <div className="post-content">
                    <h3 className="title">The Modern Shoe List</h3>
                    <h5>they speak louder than words</h5>
                  </div>
                </a>
              </article>
            </div>

            <div className="col-4-12 flex">
              <article
                className={cardTwo}
                onMouseOver={handleMouseOverTwo}
                onMouseOut={handleMouseOutTwo}
              >
                <a href="/" className="no-underline">
                  <div className="image-padding">
                    <div className="image">
                      <figure
                        style={{
                          backgroundImage: `url("https://www.orangebag.nl/cache/obsessions.680022/obsessions-500-700.jpg")`,
                        }}
                      ></figure>
                    </div>
                  </div>
                  <div className="post-content">
                    <h3 className="title">OBSESSIONS</h3>
                    <h5>Hanneke</h5>
                  </div>
                </a>
              </article>
            </div>

            <div className="col-4-12 flex">
              <article
                className={cardThree}
                onMouseOver={handleMouseOverThree}
                onMouseOut={handleMouseOutThree}
              >
                <a href="/" className="no-underline">
                  <div className="image-padding">
                    <div className="image">
                      <figure
                        style={{
                          backgroundImage: `url("https://www.orangebag.nl/cache/a-short-summer-story.679715/a-short-summer-story-500-700.jpg")`,
                        }}
                      ></figure>
                    </div>
                  </div>
                  <div className="post-content">
                    <h3 className="title">A Short Summer Story</h3>
                    <h5>summer soulmates</h5>
                  </div>
                </a>
              </article>
            </div>
          </div>
        </div>
      </Link>
      <div className="color-block" style={{ backgroundColor: "#ffdbab" }}></div>
    </section>
  );
};

export default CategoriesCard;
