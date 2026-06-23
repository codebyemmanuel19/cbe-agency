import { Link } from "react-router-dom"
import "./Home.css"

function Home() {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1>
          We Build Digital <br />
          <span className="accent">Experiences</span>
        </h1>

        <p>
          CBE Agency helps brands grow with modern websites,
          creative design and powerful digital solutions.
        </p>

        <div className="hero-buttons">
          <Link to="/contact" className="btn-primary">Get Started</Link>
          <Link to="/projects" className="btn-outline">View Projects</Link>
        </div>
      </div>
    </header>
  )
}

export default Home