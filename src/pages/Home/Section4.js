import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PromotionImage from "../../assets/promotion/pro.png";

function Section4() {
  return (
    <>
      <section className="promotion_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img src={PromotionImage} className="img-fluid" alt="Promotion" />
            </Col>
            <Col lg={6} className="px-5">
              <h2>Nothing brings people together like a good burger</h2>
              <p>
                Burgers aren’t just food — they’re an experience. Whether you're out with friends, spending time with family, or grabbing a quick bite, our mouthwatering burgers turn every moment into something memorable
              </p>
              <ul>
                <li>
                  <p>
                    Made with premium ingredients and bold flavors
                  </p>
                </li>
                <li>
                  <p>
                    Crafted to satisfy every craving, big or small
                  </p>
                </li>
                <li>
                  <p>
                    Perfectly paired with crispy fries and great company
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* BG Parallax Scroll */}
      <section className="bg_parallax_scroll"></section>
    </>
  );
}

export default Section4;
