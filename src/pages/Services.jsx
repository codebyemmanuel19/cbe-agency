import { useEffect } from "react";
import { Code2, Paintbrush, Diamond, TrendingUp, ShoppingCart, Settings } from "lucide-react";
import "./Services.css";

import AOS from "aos";
import "aos/dist/aos.css";

const cards = [
  {
    icon: <Code2 size={36} color="#6c3de8" />,
    title: "Web Development",
    text: "Modern and responsive websites built with latest technologies.",
    bg: true,
  },
  {
    icon: <Paintbrush size={36} color="#6c3de8" />,
    title: "UI / UX Design",
    text: "Beautiful, user-friendly designs that convert visitors.",
    bg: false,
  },
  {
    icon: <Diamond size={36} color="#6c3de8" />,
    title: "Branding",
    text: "Strong brand identity that makes you stand out.",
    bg: false,
  },
  {
    icon: <TrendingUp size={36} color="#6c3de8" />,
    title: "SEO Optimization",
    text: "Improve your search rankings and get more traffic.",
    bg: false,
  },
  {
    icon: <ShoppingCart size={36} color="#6c3de8" />,
    title: "E-Commerce",
    text: "High-performing online stores that increase sales.",
    bg: false,
  },
  {
    icon: <Settings size={36} color="#6c3de8" />,
    title: "Maintenance",
    text: "Ongoing support to keep your website running smoothly.",
    bg: false,
  },
];

function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    AOS.refresh();
  }, []);

  return (
    <section className="services">
      <div className="services-header" data-aos="fade-up">
        <h1>Our Services</h1>
        <div className="services-divider" />
        <p>
          We provide a full range of digital services to help your brand grow.
        </p>
        <div className="services-divider" />
      </div>

      <div className="services-grid">
        {cards.map((card, index) => (
          <div
            className="service-card"
            key={card.title}
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <div className={`service-icon ${card.bg ? "icon-bg" : ""}`}>
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

export default Services;