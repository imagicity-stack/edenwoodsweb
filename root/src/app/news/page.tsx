import BlogSidebar from "@/components/BlogSidebar";
import PageBanner from "@/components/PageBanner";
import DanboxLayout from "@/layout/DanboxLayout";
import Link from "next/link";

const CausesPage = () => {
  interface BlogPost {
    image?: string;
    videoUrl?: string;
    category: string;
    title: string;
    comments: string;
    date: string;
    author: string;
    authorImage?: string;
    excerpt: string;
    isQuote?: boolean;
  }

  const blogPosts: BlogPost[] = [
    {
      image: "assets/img/news/post1.jpg",
      category: "Education",
      title: "After-school programs help learners stay on track",
      comments: "35 Comments",
      date: "24th March 2024",
      author: "Edenwoods Team",
      authorImage: "assets/img/news/author_img.jpg",
      excerpt:
        "Our mentors share how community classrooms keep children engaged, curious, and confident in their studies.",
    },
    {
      image: "assets/img/news/post2.jpg",
      category: "Learning",
      title: "Quality education through community partnerships",
      comments: "35 Comments",
      date: "17th July 2024",
      author: "Edenwoods Team",
      authorImage: "assets/img/news/author_img.jpg",
      excerpt:
        "We work with schools and local leaders to co-design programs that fit each learner’s context.",
    },
    {
      image: "assets/img/news/post3.jpg",
      videoUrl: "https://www.youtube.com/watch?v=E1xkXZs0cAQ",
      category: "Digital Skills",
      title: "Digital lab showcases student projects",
      comments: "35 Comments",
      date: "17th July 2024",
      author: "Edenwoods Team",
      authorImage: "assets/img/news/author_img.jpg",
      excerpt:
        "Students presented their first coding and design projects during our monthly showcase.",
    },
    {
      image: "assets/img/news/post4.jpg",
      category: "Scholarships",
      title: "Scholarship orientation for first-generation students",
      comments: "35 Comments",
      date: "24th March 2024",
      author: "Edenwoods Team",
      authorImage: "assets/img/news/author_img.jpg",
      excerpt:
        "New scholarship recipients attended orientation sessions on goal-setting, study skills, and career planning.",
    },
    {
      isQuote: true,
      category: "Quote",
      title: "Education is the most powerful tool for building futures.",
      comments: "35 Comments",
      date: "24th March 2024",
      author: "Edenwoods Team",
      excerpt: "",
    },
  ];

  return (
    <DanboxLayout>
      <PageBanner pageName="News Feeds" />
      <section className="blog-wrapper news-wrapper section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="blog-posts">
                {blogPosts.map((item, index) =>
                  item.isQuote ? (
                    <div
                      className="single-blog-post quote-post format-quote"
                      key={index}
                    >
                      <div className="post-content text-white bg-cover">
                        <div className="quote-content">
                          <div className="icon">
                            <i className="fas fa-quote-left" />
                          </div>
                          <div className="quote-text">
                            <h2>{item.title}</h2>
                            <div className="post-meta">
                              <span>
                                <i className="fal fa-comments" />
                                {item.comments}
                              </span>
                              <span>
                                <i className="fal fa-calendar-alt" />
                                {item.date}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="single-blog-post" key={index}>
                      {item.image && (
                        <div
                          className="post-featured-thumb bg-cover"
                          style={{
                            backgroundImage: `url(${item.image})`,
                          }}
                        />
                      )}
                      <div className="post-content">
                        <div className="post-cat">
                          <Link href="/news">{item.category}</Link>
                        </div>
                        <h2>
                          <Link href="/news-details">{item.title}</Link>
                        </h2>
                        <div className="post-meta">
                          <span>
                            <i className="fal fa-comments" />
                            {item.comments}
                          </span>
                          <span>
                            <i className="fal fa-calendar-alt" />
                            {item.date}
                          </span>
                        </div>
                        {item.excerpt && <p>{item.excerpt}</p>}
                        <div className="d-flex justify-content-between align-items-center mt-30">
                          <div className="author-info">
                            <div
                              className="author-img bg-cover"
                              style={{
                                backgroundImage: `url(${item.authorImage})`,
                              }}
                            />
                            <h5>
                              <a href="#">by {item.author}</a>
                            </h5>
                          </div>
                          <div className="post-link">
                            <Link href="/news-details">
                              <i className="fal fa-arrow-right" /> Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
              <div className="page-nav-wrap mt-5 text-center">
                <ul>
                  <li>
                    <a className="page-numbers" href="#">
                      <i className="fal fa-long-arrow-left" />
                    </a>
                  </li>
                  <li>
                    <a className="page-numbers" href="#">
                      01
                    </a>
                  </li>
                  <li>
                    <a className="page-numbers" href="#">
                      02
                    </a>
                  </li>
                  <li>
                    <a className="page-numbers" href="#">
                      ..
                    </a>
                  </li>
                  <li>
                    <a className="page-numbers" href="#">
                      10
                    </a>
                  </li>
                  <li>
                    <a className="page-numbers" href="#">
                      11
                    </a>
                  </li>
                  <li>
                    <a className="page-numbers" href="#">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <BlogSidebar />
          </div>
        </div>
      </section>
    </DanboxLayout>
  );
};

export default CausesPage;
