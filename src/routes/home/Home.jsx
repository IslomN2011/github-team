
import "./Home.css"
import Footer from "../../components/footer/Footer";
import { FaPhoneAlt } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import background1 from "../../assets/background1.png";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";
import img7 from "../../assets/img7.png";
import img8 from "../../assets/img8.png";
import profile1 from "../../assets/profile1.png";
import profile2 from "../../assets/profile2.png";
import profile3 from "../../assets/profile3.png";
import brend from "../../assets/brend.png";
const Home = () => {
  return (
    <div>
      <main>
      <section className="hero">
        <div
          className="hero-img"
          style={{ backgroundImage: `url(${background1})` }} >
       
          <div className="container">
            <div className="hero-text">
              <h1>
                Let Your Home
                <br />
                Be Unique
              </h1>

              <p>
                There are many variations of the passages of lorem Ipsum
                available, majority.
              </p>

              <button>
                Get Started
                <IoArrowForward />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="projects">
        <div className="container">
          <div className="project-box">
            <div className="project">
              <h3>Project Plan</h3>

              <p>
                There are many variations of the passages of lorem Ipsum
                available, majority.
              </p>

              <a>
                Read More
                <IoArrowForward />
              </a>
            </div>

            <div className="project">
              <h3>Interior Work</h3>

              <p>
                There are many variations of the passages of lorem Ipsum
                available, majority.
              </p>

              <a>
                Read More
                <IoArrowForward />
              </a>
            </div>

            <div className="project">
              <h3>Realization</h3>

              <p>
                There are many variations of the passages of lorem Ipsum
                available, majority.
              </p>

              <a>
                Read More
                <IoArrowForward />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>
                We Create The Art
                <br />
                Of Stylish Living
                <br/>
                Stylishly
              </h2>

              <p>
                It is a long established fact that a reader will be <br />
                distracted by the of readable content of a page <br />
                when lookings at its layouts the points of using <br />
                that it has a more-or-less normal.
              </p>

              <div className="phone">
                <div className="phone-icon">
                  <FaPhoneAlt />
                </div>

                <div className="phone-info">
                  <b>012345678</b>
                  <span>Call Us Anytime</span>
                </div>
              </div>

              <button className="estimate-button">
                Get Free Estimate
                <IoArrowForward />
              </button>
            </div>

            <div className="about-img">
              <img src={img1} alt="" />
            </div>
          </div>
        </div>
      </section>
    </main>

   <section className="testimonials">
  <div className="testimonial-box">
    <h2>
      What the People Thinks
      <br />
      About Us
    </h2>

    <div className="testimonial-cards">
      <div className="testimonial-card">
        <div className="user">
          <img src={profile1} alt="" />
          <div>
            <h4>Nattasha Mith</h4>
            <span>Sydney, USA</span>
          </div>
        </div>

        <p>
          Lorem Ipsum is simply dummy <br />
          text of the typesetting industry. <br />
          Ipsum has been.
        </p>
      </div>

      <div className="testimonial-card">
        <div className="user">
          <img src={profile2} alt="" />
          <div>
            <h4>Raymond Galario</h4>
            <span>Sydney, Australia</span>
          </div>
        </div>

        <p>
          Lorem Ipsum is simply dummy <br />
          text of the typesetting industry. <br />
          Ipsum has been scrambled it <br />
          to make a type book.
        </p>
      </div>


      <div className="testimonial-card">
        <div className="user">
          <img src={profile3} alt="" />
          <div>
            <h4>Benny Roll</h4>
            <span>Sydney, New York</span>
          </div>
        </div>

        <p>
          Lorem Ipsum is simply dummy <br />
          text of the typesetting industry. <br />
          Ipsum has been scrambled.
        </p>
      </div>
    </div>
  </div>

  <div className="brands">
    <img src={brend} alt="" />
  </div>
</section>

<section className="projects">
  <div className="projects-header">
    <h2>Follow Our Projects</h2>
    <p>
      It is a long established fact that a reader will be distracted by the
      of readable<br />
      content of page looking at its layouts points.
    </p>
  </div>

  <div className="projects-grid">
    <div className="project-card">
      <img src={img2} alt="" />
      <div className="project-info">
        <div>
          <h3>Modern Kitchen</h3>
          <span>Decor / Architecture</span>
        </div>
        <button>⏩</button>
      </div>
    </div>

    <div className="project-card">
      <img src={img3} alt="" />
      <div className="project-info">
        <div>
          <h3>Modern Kitchen</h3>
          <span>Decor / Architecture</span>
        </div>
        <button>⏩</button>
      </div>
    </div>

    <div className="project-card">
      <img src={img4} alt="" />
      <div className="project-info">
        <div>
          <h3>Modern Kitchen</h3>
          <span>Decor / Architecture</span>
        </div>
        <button>⏩</button>
      </div>
    </div>

    <div className="project-card">
      <img src={img5} alt="" />
      <div className="project-info">
        <div>
          <h3>Modern Kitchen</h3>
          <span>Decor / Architecture</span>
        </div>
        <button>⏩</button>
      </div>
    </div>
  </div>
</section>

<section className="statistics">
  <div className="stat">
    <strong>12</strong>
    <span>Years Of Experience</span>
  </div>

  <div className="stat">
    <strong>85</strong>
    <span>Success Project</span>
  </div>

  <div className="stat">
    <strong>15</strong>
    <span>Active Project</span>
  </div>

  <div className="stat">
    <strong>95</strong>
    <span>Happy Customers</span>
  </div>
</section>

<section className="articles">
  <div className="articles-header">
    <h2>Articles & News</h2>
    <p>
      It is a long established fact that a reader will be distracted by the
      of readable content<br />
      of a page when looking at its layouts the points of using.
    </p>
  </div>

  <div className="articles-grid">
    <div className="article-card">
      <div className="article-image">
        <img src={img6} alt="" />
        <span>Kitchen Design</span>
      </div>

      <h3>
        Let`s Get Solution For
        <br />
        Building Construction
        <br />
        Work
      </h3>

      <div className="article-bottom">
        <span>26 December,2022</span>
        <button>⏩</button>
      </div>
    </div>

    <div className="article-card active">
      <div className="article-image">
        <img src={img7} alt="" />
        <span>Living Design</span>
      </div>

      <h3>
        Low Cost Latest Invented
        <br />
        Interior Designing
        <br />
        Ideas.
      </h3>

      <div className="article-bottom">
        <span>22 December,2022</span>
        <button>⏩</button>
      </div>
    </div>

    <div className="article-card">
      <div className="article-image">
        <img src={img8} alt="" />
        <span>Interior Design</span>
      </div>

      <h3>
        Best For Any Office &
        <br />
        Business Interior
        <br />
        Solution
      </h3>

      <div className="article-bottom">
        <span>25 December,2022</span>
        <button>⏩</button>
      </div>
    </div>
  </div>

  <div className="join-box">
    <h2>Wanna join the interno?</h2>
    <p>It is a long established fact will be distracted.</p>
    <button>
      Contact With Us <span>→</span>
    </button>
  </div>
</section>

    
    </div>
  );
}
export default Home;