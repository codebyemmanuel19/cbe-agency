import "./About.css";
import holo from "../assets/cbe-agency.jpeg";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import { Users, Eye, Rocket } from "lucide-react";

const cards = [
  {
    icon: <Users size={40} color="#6c3de8" />,
    title: "Our Mission",
    text: "To help businesses grow by creating powerful digital experiences.",
  },
  {
    icon: <Eye size={40} color="#6c3de8" />,
    title: "Our Vision",
    text: "To be a creative agency known for quality, innovation and results.",
  },
  {
    icon: <Rocket size={40} color="#6c3de8" />,
    title: "Our Values",
    text: "Creativity, transparency, collaboration and client success.",
  },
];

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="about">

      <div className="about-top">

        <div className="about-text" data-aos="fade-right">
          <h1>About Us</h1>

          <div className="about-divider"></div>

          <p>
            CBE Agency helps businesses grow through modern web development,
            creative design, SEO, and digital solutions that drive real
            results.
          </p>
        </div>

        <div className="about-image" data-aos="fade-left">
          <img src={holo} alt="CBE Agency Team" />
        </div>

      </div>

      <div className="about-cards">

        {cards.map((card, index) => (
          <div
            className="about-card"
            key={card.title}
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <div className="card-icon">
              {card.icon}
            </div>

            <h2>{card.title}</h2>

            <p>{card.text}</p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default About;