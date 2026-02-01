import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

const Footer = ({ footer }: { footer: number }) => {
  switch (footer) {
    case 1:
      return <Footer1 />;
    case 2:
      return <Footer2 />;
    case 3:
      return <Footer3 />;
    case 4:
      return <Footer4 />;
    default:
      return <Footer3 />;
  }
};

export default Footer;
const Footer1 = () => {
  return (
    <footer className="footer-section footer-bg">
      <div className="container">
        <div className="footer-widgets-wrapper style-2">
          <div className="row">
            <FooterLogoContainer />
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-5  wow fadeInUp"
              data-wow-delay=".4s"
            >
              <LinksCol heading="Useful Link" links={usefulLink} />
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-5  wow fadeInUp"
              data-wow-delay=".6s"
            >
              <LinksCol heading="Legal" links={legalLink} />
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6   wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4 className="text-white">Contact Us</h4>
                </div>
                <div className="popularspost-area">
                  <div className="single-post-items">
                    <div
                      className="post-img bg-cover"
                      style={{ backgroundImage: 'url("assets/img/post1.jpg")' }}
                    />
                    <div className="post-content">
                      <span>
                        <i className="fal fa-calendar-alt" />
                        18th March 2025
                      </span>
                      <h5>
                        <Link href="/news-details">
                          Digital Lab Opens for Rural Learners
                        </Link>
                      </h5>
                    </div>
                  </div>
                  <div className="single-post-items">
                    <div
                      className="post-img bg-cover"
                      style={{ backgroundImage: 'url("assets/img/post2.jpg")' }}
                    />
                    <div className="post-content">
                      <span>
                        <i className="fal fa-calendar-alt" />
                        02nd April 2025
                      </span>
                      <h5>
                        <Link href="/news-details">
                          Scholarships Supporting First-Gen Students
                        </Link>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bor-top-1">
        <div className="container">
          <div className="footer-contact-wrap">
            <div className="contact-box wow fadeInUp" data-wow-delay=".3s">
              <div className="icon">
                <i className="fal fa-map-marker-alt" />
              </div>
              <div className="content">
                <h3>Location</h3>
                <p>
                  Edenwoods Eduhub Foundation <br />
                  Hazaribagh, Jharkhand 825301
                </p>
              </div>
            </div>
            <div className="contact-box wow fadeInUp" data-wow-delay=".5s">
              <div className="icon">
                <i className="far fa-clock" />
              </div>
              <div className="content">
                <h3>Working Hours</h3>
                <p>
                  Monday - Saturday <br /> 09:00 AM - 06:00 PM
                </p>
              </div>
            </div>
            <div className="contact-box wow fadeInUp" data-wow-delay=".7s">
              <div className="icon">
                <i className="far fa-phone-alt" />
              </div>
              <div className="content">
                <h3>Contact Us</h3>
                <p>
                  <a href="mailto:info@edenwoodseduhub.org">
                    info@edenwoodseduhub.org
                  </a>
                  <a href="tel:+919875600111">+91 98756 00111</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom color-style">
        <div className="container">
          <div className="footer-wrapper">
            <p className="wow fadeInUp text-center" data-wow-delay=".3s">
              © <Link href="/">Edenwoods Eduhub Foundation</Link> 2024. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
const Footer2 = () => {
  return (
    <footer className="footer-section footer-bg">
      <div className="container">
        <div className="footer-widgets-wrapper style-2">
          <div className="row">
            <FooterLogoContainer />
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-5  wow fadeInUp"
              data-wow-delay=".3s"
            >
              <LinksCol heading="Useful Link" links={usefulLink} />
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-5  wow fadeInUp"
              data-wow-delay=".3s"
            >
              <LinksCol heading="Legal" links={legalLink} />
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-5  wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4 className="text-white">Contact Us</h4>
                </div>
                <div className="footer-content">
                  <div className="contact-info-area">
                    <div className="contact-items">
                      <div className="icon">
                        <i className="fal fa-phone" />
                      </div>
                      <div className="content">
                        <h6>
                          <a href="tel:+919875600111">+91 98756 00111</a>
                          <a href="tel:+919875600111">+91 98756 00111</a>
                        </h6>
                      </div>
                    </div>
                    <div className="contact-items">
                      <div className="icon color-2">
                        <i className="fal fa-envelope" />
                      </div>
                      <div className="content">
                        <h6>
                          <a
                            href="mailto:info@edenwoodseduhub.org"
                            className="link"
                          >
                            info@edenwoodseduhub.org
                          </a>
                          <a
                            href="mailto:volunteer@edenwoodseduhub.org"
                            className="link"
                          >
                            volunteer@edenwoodseduhub.org
                          </a>
                        </h6>
                      </div>
                    </div>
                    <div className="contact-items">
                      <div className="icon color-3">
                        <i className="fal fa-map-marker-alt" />
                      </div>
                      <div className="content">
                        <h6>
                          Edenwoods Eduhub Foundation <br />
                          Hazaribagh, Jharkhand 825301
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-3">
        <div className="container">
          <div className="footer-bottom-wrapper d-flex align-items-center justify-content-between">
            <p className="wow fadeInLeft" data-wow-delay=".3s">
              © Copyright 2024 <Link href="/">Edenwoods Eduhub Foundation</Link>
              . All Rights Reserved.
            </p>
            <div className="card-image wow fadeInRight" data-wow-delay=".5s">
              <Image
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                src="/assets/img/card.png"
                alt="card-img"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
const Footer3 = () => {
  return (
    <footer className="footer-section footer-bg-color section-bg">
      <div className="container">
        <div className="footer-widgets-wrapper">
          <div className="row">
            <div
              className="col-md-6 col-xl-4 col-12 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4 className="text-white">Get In Touch</h4>
                </div>
                <div className="footer-content">
                  <div className="contact-info-area">
                    <div className="contact-items">
                      <div className="icon">
                        <i className="fal fa-phone" />
                      </div>
                      <div className="content">
                        <h6>
                          <a href="tel:+919875600111">+91 98756 00111</a>
                          <a href="tel:+919875600111">+91 98756 00111</a>
                        </h6>
                      </div>
                    </div>
                    <div className="contact-items">
                      <div className="icon color-2">
                        <i className="fal fa-envelope" />
                      </div>
                      <div className="content">
                        <h6>
                          <a
                            href="mailto:info@edenwoodseduhub.org"
                            className="link"
                          >
                            info@edenwoodseduhub.org
                          </a>
                          <a
                            href="mailto:volunteer@edenwoodseduhub.org"
                            className="link"
                          >
                            volunteer@edenwoodseduhub.org
                          </a>
                        </h6>
                      </div>
                    </div>
                    <div className="contact-items">
                      <div className="icon color-3">
                        <i className="fal fa-map-marker-alt" />
                      </div>
                      <div className="content">
                        <h6>
                          Edenwoods Eduhub Foundation <br />
                          Hazaribagh, Jharkhand 825301
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="social-icon d-flex align-items-center">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-vimeo-v" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-xl-4 offset-xl-1 col-12 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <LinksCol
                heading="About Us"
                links={aboutLink}
                links2={specialLink}
                layout={3}
              />
            </div>
            <div
              className="col-md-6 col-xl-3 col-12 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <LinksCol
                heading="Popular Causes"
                links={popularlLink}
                layout={2}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-wrapper">
            <p className="wow fadeInUp text-center" data-wow-delay=".3s">
              © <Link href="/">Edenwoods Eduhub Foundation</Link> 2024. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
const Footer4 = () => {
  return (
    <Fragment>
      <div className="footer-contact-section">
        <div className="container">
          <div className="footer-contact-wrapper">
            <div className="row g-4 justify-content-between">
              <div
                className="col-xl-3 col-lg-3 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="footer-logo">
                  <Link href="/">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "178px", height: "54px" }}
                      src="/assets/img/logo/edenwoods-logo-light.svg"
                      alt="img"
                    />
                  </Link>
                </div>
              </div>
              <div
                className="col-xl-5 col-lg-4 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="contact-us-items">
                  <div className="single-info">
                    <div className="icon">
                      {" "}
                      <i className="fal fa-envelope" />{" "}
                    </div>
                    <div className="contact">
                      <h4>Email Address</h4>
                      <p>
                        <a href="mailto:info@edenwoodseduhub.org">
                          info@edenwoodseduhub.org
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="single-info">
                    <div className="icon">
                      {" "}
                      <i className="fal fa-phone" />
                    </div>
                    <div className="contact">
                      <h4>Phone Number</h4>
                      <p>
                        <a href="tel:+919875600111">+91 98756 00111</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="social-icon d-flex align-items-center">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-vimeo-v" />
                  </a>
                  <a href="#">
                    <i className="fab fa-pinterest-p" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer-section section-bg">
        <div className="container">
          <div className="footer-widgets-wrapper">
            <div className="row justify-content-between">
              <div
                className="col-md-6 col-xl-4 col-12 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <LinksCol
                  heading="About Us"
                  links={aboutLink}
                  links2={specialLink}
                  layout={3}
                />
              </div>
              <div
                className="col-md-6 col-xl-3 col-12 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <LinksCol
                  heading="Popular Causes"
                  links={popularlLink}
                  layout={2}
                />
              </div>
              <div
                className="col-xl-4 col-md-6 col-12 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h4>News Feeds</h4>
                  </div>
                  <div className="popularspost-area">
                    <div className="single-post-items">
                      <div
                        className="post-img bg-cover"
                        style={{
                          backgroundImage: 'url("assets/img/post1.jpg")',
                        }}
                      />
                      <div className="post-content">
                        <span>
                          <i className="fal fa-calendar-alt" />
                          12th February 2025
                        </span>
                        <h5>
                          <Link href="/news-details">
                            After-School Reading Clubs Launch
                          </Link>
                        </h5>
                      </div>
                    </div>
                    <div className="single-post-items">
                      <div
                        className="post-img bg-cover"
                        style={{
                          backgroundImage: 'url("assets/img/post2.jpg")',
                        }}
                      />
                      <div className="post-content">
                        <span>
                          <i className="fal fa-calendar-alt" />
                          05th March 2025
                        </span>
                        <h5>
                          <Link href="/news-details">
                            Women in Tech Mentorship Circle
                          </Link>
                        </h5>
                      </div>
                    </div>
                    <div className="single-post-items">
                      <div
                        className="post-img bg-cover"
                        style={{
                          backgroundImage: 'url("assets/img/post1.jpg")',
                        }}
                      />
                      <div className="post-content">
                        <span>
                          <i className="fal fa-calendar-alt" />
                          21st March 2025
                        </span>
                        <h5>
                          <Link href="/news-details">
                            Community Library Reopens in Barkagaon
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-wrapper">
              <p className="wow fadeInUp text-center" data-wow-delay=".3s">
                © <Link href="/">Edenwoods Eduhub Foundation</Link> 2024. All
                rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};
const FooterLogoContainer = () => (
  <div
    className="col-xl-3 col-lg-4 col-md-6  wow fadeInUp"
    data-wow-delay=".2s"
  >
    <div className="single-footer-widget">
      <div className="widget-head">
        <Link href="/">
          <Image
            src="/assets/img/logo/edenwoods-logo-light.svg"
            width={240}
            height={54}
            alt="Edenwoods Eduhub Foundation logo"
          />
        </Link>
      </div>
      <div className="footer-content">
        <p>
          We nurture bright futures through after-school learning, career
          counseling, and community-led education programs in Hazaribagh.
        </p>
        <div className="social-icon d-flex align-items-center">
          <a href="#">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#">
            <i className="fab fa-twitter" />
          </a>
          <a href="#">
            <i className="fab fa-vimeo-v" />
          </a>
          <a href="#">
            <i className="fab fa-pinterest-p" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

type LinkItem = { link: string; text: string };
type LinkItem2 = { link: string; text: string };
const LinksCol = ({
  heading,
  links = [],
  links2 = [],
  layout = 1,
}: {
  heading?: string;
  layout?: number;
  links?: LinkItem[];
  links2?: LinkItem2[];
}) => (
  <div className="single-footer-widget">
    {heading && (
      <div className="widget-head">
        <h4 className={layout == 1 ? "text-white" : ""}>{heading}</h4>
      </div>
    )}
    {layout == 3 ? (
      <Fragment>
        <div className="special-menu">
          <ul>
            {links.map((e, i) => (
              <li key={i}>
                <a href={e.link}>{e.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="special-menu">
          <ul>
            {links2.map((e, i) => (
              <li key={i}>
                <a href={e.link}>{e.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </Fragment>
    ) : (
      <ul className="list-area">
        {links.map((e, i) => (
          <li key={i}>
            <a href={e.link}>
              {layout == 1 && <i className="far fa-chevron-double-right" />}
              {e.text}
            </a>
          </li>
        ))}
      </ul>
    )}
  </div>
);

const usefulLink = [
  { link: "about", text: "About Edenwoods" },
  { link: "causes", text: "Our Programs" },
  { link: "events", text: "Upcoming Workshops" },
  { link: "team", text: "Meet the Team" },
  { link: "news", text: "Impact Stories" },
];
const legalLink = [
  { link: "contact", text: "Terms of Use" },
  { link: "contact", text: "Privacy Policy" },
  { link: "contact", text: "Safeguarding" },
  { link: "contact", text: "Volunteer Code" },
  { link: "contact", text: "Contact Us" },
];
const aboutLink = [
  { link: "index", text: "Home" },
  { link: "about", text: "About" },
  { link: "causes", text: "Programs" },
  { link: "events", text: "Community Events" },
  { link: "contact", text: "Contact" },
  { link: "team", text: "Team" },
  { link: "faq", text: "FAQs" },
];
const specialLink = [
  { link: "causes", text: "Program List" },
  { link: "donation-details", text: "Support Education" },
  { link: "team", text: "Volunteer Roles" },
  { link: "contact", text: "Partner With Us" },
  { link: "faq", text: "Guidelines" },
];
const popularlLink = [
  { link: "causes-details", text: "Learning Centers" },
  { link: "causes-details", text: "Digital Literacy Labs" },
  { link: "causes-details", text: "Scholarships & Mentoring" },
  { link: "causes-details", text: "School Readiness" },
  { link: "causes-details", text: "Career Guidance" },
  { link: "causes-details", text: "Community Libraries" },
  { link: "causes-details", text: "Teacher Training" },
];
