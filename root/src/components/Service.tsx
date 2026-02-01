import Image from "next/image";
import Link from "next/link";

export const Service1 = () => {
  const serviceData: {
    img: string;
    title: string;
    description: string;
    delay: string;
  }[] = [
    {
      img: "/assets/img/service/01.jpg",
      title: "Learning Centers",
      description:
        "Safe community classrooms that support after-school learning, reading circles, and tutoring for children.",
      delay: ".3s",
    },
    {
      img: "/assets/img/service/02.jpg",
      title: "Digital Literacy Labs",
      description:
        "Hands-on access to devices, internet basics, and practical digital skills for young learners.",
      delay: ".5s",
    },
    {
      img: "/assets/img/service/03.jpg",
      title: "Scholarships & Mentoring",
      description:
        "Targeted support for first-generation students to stay in school and plan their next steps.",
      delay: ".7s",
    },
    {
      img: "/assets/img/service/04.jpg",
      title: "Teacher Support",
      description:
        "Training and resources that help educators deliver joyful, student-centered learning.",
      delay: ".3s",
    },
    {
      img: "/assets/img/service/05.jpg",
      title: "Parent Engagement",
      description:
        "Workshops that help families build learning routines and celebrate progress together.",
      delay: ".5s",
    },
    {
      img: "/assets/img/service/06.jpg",
      title: "Career Readiness",
      description:
        "Skill-building sessions, career exposure visits, and goal-setting for older learners.",
      delay: ".7s",
    },
  ];
  return (
    <section className="service-section fix section-bg section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-title color-2 wow fadeInUp">
            <i className="far fa-heart" />
            Our Focus Areas
          </span>
          <h2 className="mt-char-animation">
            Building confident learners <br />
            through community-led education
          </h2>
        </div>
        <div className="row">
          {serviceData.map((item, i) => (
            <div
              key={i}
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay={item.delay}
            >
              <div className="service-card-items">
                <div className="service-image">
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    src={item.img}
                    alt={item.title}
                  />
                </div>
                <div className="service-content">
                  <h3>
                    <Link href="/about">{item.title}</Link>
                  </h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
