import PageBanner from "@/components/PageBanner";
import DanboxLayout from "@/layout/DanboxLayout";

const CausesPage = () => {
  return (
    <DanboxLayout>
      <PageBanner pageName="Contact Us" />
      <section className="contact-page-wrap section-padding">
        <div className="container">
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 col-12 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="single-contact-card card1">
                <div className="top-part">
                  <div className="icon">
                    <i className="fal fa-envelope" />
                  </div>
                  <div className="title">
                    <h4>Email Address</h4>
                    <span>Reach us for partnerships</span>
                  </div>
                </div>
                <div className="bottom-part">
                  <div className="info">
                    <p>info@edenwoodseduhub.org</p>
                    <p>volunteer@edenwoodseduhub.org</p>
                  </div>
                  <div className="icon">
                    <i className="fal fa-arrow-right" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-12 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="single-contact-card card2">
                <div className="top-part">
                  <div className="icon">
                    <i className="fal fa-phone" />
                  </div>
                  <div className="title">
                    <h4>Phone Number</h4>
                    <span>Call for program details</span>
                  </div>
                </div>
                <div className="bottom-part">
                  <div className="info">
                    <p>+91 98756 00111</p>
                    <p>+91 98756 00222</p>
                  </div>
                  <div className="icon">
                    <i className="fal fa-arrow-right" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-12 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="single-contact-card card3">
                <div className="top-part">
                  <div className="icon">
                    <i className="fal fa-map-marker-alt" />
                  </div>
                  <div className="title">
                    <h4>Office Address</h4>
                    <span>Visit our learning hub</span>
                  </div>
                </div>
                <div className="bottom-part">
                  <div className="info">
                    <p>Edenwoods Eduhub Foundation</p>
                    <p>Hazaribagh, Jharkhand 825301</p>
                  </div>
                  <div className="icon">
                    <i className="fal fa-arrow-right" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="office-google-map-wrapper wow fadeInUp">
            <iframe
              src="https://www.google.com/maps?q=Hazaribagh%2C%20Jharkhand%20825301&output=embed"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <section className="contact-section-2 fix section-padding pt-0">
        <div className="container">
          <div className="main-contact-form-items">
            <div className="section-title text-center">
              <span className="sub-title color-2 wow fadeInUp">
                <i className="fal fa-pen" />
                Write Here
              </span>
              <h2 className="mt-char-animation">Connect With Our Team</h2>
            </div>
            <form
              action="contact.php"
              id="contact-form"
              method="POST"
              className="mt-4 mt-md-0"
            >
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="form-clt">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your Name*"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-clt">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Your Email*"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-clt">
                    <input
                      type="text"
                      name="text"
                      id="phone"
                      placeholder="Phone*"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-clt">
                    <input
                      type="text"
                      name="text"
                      id="subject"
                      placeholder="Subject*"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-clt">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Write Message*"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <button type="submit" className="theme-btn center d-block">
                    Send Your Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </DanboxLayout>
  );
};

export default CausesPage;
