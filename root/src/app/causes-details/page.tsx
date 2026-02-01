import PageBanner from "@/components/PageBanner";
import DanboxLayout from "@/layout/DanboxLayout";
import Image from "next/image";
import Link from "next/link";

const CausesPage = () => {
  return (
    <DanboxLayout>
      <PageBanner pageName="Cause Details" />
      <section className="causes-details-section fix section-padding">
        <div className="container">
          <div className="causes-details-wrapper">
            <div className="row g-5">
              <div className="col-lg-8">
                <div className="causes-details-items">
                  <div className="details-image">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/assets/img/causes/cause-details.jpg"
                      alt="img"
                    />
                  </div>
                  <div className="details-content">
                    <span className="sub-text">
                      <i className="far fa-heart" /> water
                    </span>
                    <h2>Somalian People Need Pure Water</h2>
                    <div className="progress-items">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          data-wow-duration=".9s"
                          role="progressbar"
                          style={{ width: "70%" }}
                          aria-valuenow={95}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="cause-amount d-flex">
                        <div className="price-raised">
                          <i className="fal fa-donate" />
                          <span>70</span> Raised
                        </div>
                        <div className="price-goal">
                          <i className="far fa-analytics" />
                          <span>$7000</span> Goal
                        </div>
                      </div>
                    </div>
                    <form action="#" className="give-form">
                      <div className="donate-amount-buttons give-donation-amount">
                        <span>5</span>
                        <span>10</span>
                        <span>20</span>
                        <span>50</span>
                        <span>100</span>
                        <span>custom</span>
                      </div>
                      <div className="give-payment-mode-select">
                        <h3>Select Payment Method</h3>
                        <div className="custom-control custom-radio custom-control-inline">
                          <input
                            type="radio"
                            id="method1"
                            name="paymentmode"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="method1"
                          >
                            Test Donation
                          </label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                          <input
                            type="radio"
                            id="method2"
                            name="paymentmode"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="method2"
                          >
                            Offline Donation
                          </label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                          <input
                            type="radio"
                            id="method3"
                            name="paymentmode"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="method3"
                          >
                            Credit Card
                          </label>
                        </div>
                      </div>
                      <div className="give-purchase-form-wrap">
                        <div className="row g-4">
                          <div className="col-md-6 col-12">
                            <div className="single-personal-info">
                              <label htmlFor="fname">First Name</label>
                              <input
                                type="text"
                                className="give-input"
                                id="fname"
                                placeholder="Enter Name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6 col-12">
                            <div className="single-personal-info">
                              <label htmlFor="lname">Last Name</label>
                              <input
                                type="text"
                                className="give-input"
                                id="lname"
                                placeholder="Enter Name"
                              />
                            </div>
                          </div>
                          <div className="col-md-12 col-12">
                            <div className="single-personal-info">
                              <label htmlFor="email">Email Address</label>
                              <input
                                type="email"
                                className="give-input"
                                id="email"
                                placeholder="Enter Email"
                              />
                            </div>
                          </div>
                          <div className="col-md-12 col-12">
                            <div className="donate-total-amount">
                              <div className="give-donation-total-label">
                                Donation Total:
                              </div>
                              <div className="give-final-total-amount">
                                <span>₹</span>10
                              </div>
                              <button
                                type="submit"
                                className="theme-btn mt-4 mt-md-0"
                              >
                                <i className="far fa-heart" />
                                Donate Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="causes-contents">
                    <p>
                      But many families in Hazaribagh don’t have that luxury.
                      Every day, children face illnesses caused by unsafe water
                      and poor sanitation. But it doesn’t have to be that way.
                      There are simple solutions like drilled wells, spring
                      protections and BioSand filters.
                    </p>
                    <p>
                      100% of the money will be used to build clean water
                      projects in Hazaribagh, and when they’re complete, we’ll
                      share photos and location details so you can see the
                      exact community we helped.
                    </p>
                    <p>
                      We started this fundraising campaign to build these types
                      of projects across Hazaribagh, and we're looking for
                      anyone who can help. Many local families still lack
                      reliable access to clean water, but there are simple
                      solutions like drilled wells, spring protections, and
                      BioSand filters that can serve Hazaribagh communities.
                    </p>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                          src="/assets/img/causes/p2.jpg"
                          alt="fundraising"
                        />
                      </div>
                      <div className="col-md-6">
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                          src="/assets/img/causes/p3.jpg"
                          alt="fundraising"
                        />
                      </div>
                    </div>
                    <h3>Our Goals</h3>
                    <p>
                      Surely access to clean water should be a basic human right
                      in the <b>21st century</b>. If you can only give
                      <Link href="donation-details">₹500</Link> just this one
                      time, it will still make a difference.
                    </p>
                    <p>
                      We started this fundraising campaign to help build these
                      projects across Hazaribagh, and we're looking for anyone
                      who can help. Many people in Hazaribagh still lack safe
                      water and sanitation, but simple solutions like drilled
                      wells, spring protections, and BioSand filters can help
                      provide clean water to nearby neighborhoods.
                    </p>
                    <ul>
                      <li>A place in history</li>
                      <li>It’s about impact, goodness</li>
                      <li>More goodness in Hazaribagh</li>
                      <li>The community we live in right now</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="casues-sidebar-wrapper">
                  <div className="single-sidebar-widgets">
                    <div className="widget-title">
                      <h4>Categories</h4>
                    </div>
                    <ul>
                      <li>
                        <Link href="causes-details">
                          Programs <span>35</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="causes-details">
                          Donation <span>20</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="causes-details">
                          Food &amp; Water <span>57</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="causes-details">
                          Medical <span>208</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="causes-details">
                          Kids in Hazaribagh <span>09</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* single-sidebar-widgets */}
                  <div className="single-sidebar-widgets">
                    <div className="widget-title">
                      <h4>Gallery</h4>
                    </div>
                    <div className="causue-gallery-wid">
                      <a
                        href="assets/img/causes/g1.jpg"
                        className="single-cause-img img-popup bg-cover"
                        style={{
                          backgroundImage: 'url("assets/img/causes/g1.jpg")',
                        }}
                      />
                      <a
                        href="assets/img/causes/g2.jpg"
                        className="single-cause-img img-popup"
                        style={{
                          backgroundImage: 'url("assets/img/causes/g2.jpg")',
                        }}
                      />
                      <a
                        href="assets/img/causes/g3.jpg"
                        className="single-cause-img img-popupy"
                        style={{
                          backgroundImage: 'url("assets/img/causes/g3.jpg")',
                        }}
                      />
                      <a
                        href="assets/img/causes/g4.jpg"
                        className="single-cause-img img-popup mb-0"
                        style={{
                          backgroundImage: 'url("assets/img/causes/g4.jpg")',
                        }}
                      />
                    </div>
                  </div>
                  {/* single-sidebar-widgets */}
                  <div
                    className="sidebar-promo-widgets bg-cover text-white text-center"
                    style={{
                      backgroundImage: 'url("assets/img/causes/cause1.jpg")',
                    }}
                  >
                    <span>Call To Action</span>
                    <h3>There are no secrets to success</h3>
                    <Link href="contact" className="theme-btn">
                      Get In Touch
                    </Link>
                  </div>
                  {/* single-sidebar-widgets */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DanboxLayout>
  );
};

export default CausesPage;
