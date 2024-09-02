import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import HeaderOne from "../components/header/HeaderOne";
import FooterTwo from "../components/footer/FooterTwo";

const features = [
  {
    icon: "📝",
    description: "We have high Domain Authority and Page Authority.",
  },
  {
    icon: "📊",
    description: "We capture the audience organically.",
  },
  {
    icon: "📤",
    description:
      "We will post your published content on our social media channels.",
  },
  {
    icon: "📁",
    description: "Your content will remain in our archives for one year.",
  },
  {
    icon: "💡",
    description:
      "If your content is good, we will promote it in our weekly newsletter.",
  },
  {
    icon: "🔍",
    description:
      "We will optimize your content to make it visible on search engines.",
  },
  {
    icon: "👥",
    description:
      "Our team is professionally adept and follows high integrity in all processes.",
  },
  {
    icon: "💼",
    description: "We will give discounts for long-term partnerships.",
  },
];
const GuestPostForm = () => {
  return (
    <>
      <HeaderOne />
      <Container fluid className="bg-danger text-white py-5">
        <Row className="justify-content-center">
          <Col
            md={6}
            className="d-flex flex-column justify-content-center gap-4"
          >
            <h1 className="mb-4 text-center">Guest Posts on our Website</h1>
            <p
              className="mb-4 mx-auto text-start text-white"
              style={{ maxWidth: "500px" }}
            >
              The primary aim of guest posts is to increase the digital reach of
              brands and their websites. If strategically used, they can help
              websites get juices from various sources and also help to increase
              Domain Authorities and Page Authorities of the websites. We
              understand how important and difficult it can become for brands to
              choose perfect websites to promote their content.
            </p>
          </Col>
          <Col md={4}>
            <div className="bg-light text-dark p-4 rounded">
              <h2 className="text-center mb-4">Get a Quote</h2>
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Control type="text" placeholder="Name*" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Control type="email" placeholder="Email*" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPhone">
                  <Form.Control
                    type="number"
                    placeholder="Contact Number*"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formOrganization">
                  <Form.Control
                    type="text"
                    placeholder="Organization Name*"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCountry">
                  <Form.Control type="text" placeholder="Country*" required />
                </Form.Group>
                <div className="d-grid">
                  <Button variant="dark" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
        <Container className="py-5 bg-white mt-5 mb-5">
          <h2 className="text-center mb-4">Highlighted Features</h2>
          <p className="text-center mb-5">
            We have built our platform to help our partners reach their audience
            in the most professional manner. Here are some of the benefits of
            publishing your content on our website.
          </p>
          <Row className="gy-4">
            {features.map((feature, index) => (
              <Col key={index} md={3} sm={6} className="text-center">
                <div
                  className="feature-box p-4 border rounded-3 d-flex flex-column align-items-center justify-content-center"
                  style={{ height: "200px" }}
                >
                  <div
                    className="feature-icon mb-3"
                    style={{ fontSize: "2rem", color: "#D90429" }}
                  >
                    {feature.icon}
                  </div>
                  <p className="m-0">{feature.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
        <Container className="mt-5 mb-5">
          <Row>
            <p className="text-white mt-5">
              We have built our website for professionals and readers to get
              insightful content. We work dedicatedly to maintain the quality of
              our work. For our loyal readers, we have a few criteria for the
              posts that we accept. Please go through these points before you
              submit your content
            </p>
            <Col md={6}>
              <h3>Guidelines for Content Submission</h3>
              <ul>
                <li>Choose topics related to business or technology.</li>
                <li>Consider trending topics.</li>
                <li>Avoid promotional content.</li>
                <li>Limit external links to 2.</li>
                <li>Refrain from political or controversial content.</li>
                <li>Submit original content (100% unique).</li>
                <li>Maintain a word count between 400 and 1200 words.</li>
                <li>Ensure grammatical accuracy.</li>
                <li>Optimize for SEO.</li>
              </ul>
            </Col>
            <Col md={6}>
              <h3>Additional Notes</h3>
              <ul>
                <li>
                  Provide related images or allow our team to use appropriate
                  ones.
                </li>
                <li>
                  Our editorial team will review your content and provide
                  feedback if necessary.
                </li>
                <li>
                  We seek long-term partnerships focused on providing value to
                  our readers.
                </li>
                <li>
                  For advertising or marketing opportunities, visit
                  https://www.theentrepreneurialchronicle.com/contact.
                </li>
              </ul>
            </Col>
            <p className="text-white mt-5">
              Once you send your content, our editorial team will review it. If
              it does not match our standards, we will have to reject it, but we
              will contact you and tell you the issues so that you can rework on
              it and send back the revised content. We are looking for long-term
              partners, with whom we can work with integrity and provide value
              to our readers through our website.
            </p>
            <p className="text-white">
              We are looking for long-term partners, with whom we can work with
              integrity and provide value to our readers through our website.
            </p>
          </Row>
        </Container>
      </Container>
      <FooterTwo />
    </>
  );
};

export default GuestPostForm;
