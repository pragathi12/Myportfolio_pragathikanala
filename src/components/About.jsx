import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a dedicated Software Engineer with a Master's in Computer Science from 
            Florida Institute of Technology, currently building enterprise banking solutions 
            at Temenos USA Inc. My passion lies in creating innovative, metadata-driven 
            applications that adapt seamlessly across different regions, products, and 
            user journeys.
          </p>
          <p>
            With expertise spanning full-stack development, cloud technologies, and AI/ML, 
            I specialize in developing responsive, accessibility-focused interfaces using 
            modern web technologies like Lit Web Components, React.js, and TypeScript. 
            My experience includes building secure banking platforms, implementing 
            compliance solutions, and developing intelligent systems using machine learning.
          </p>
          <p>
            I'm recognized for proactive project management, innovative problem-solving, 
            and delivering solutions that significantly enhance user satisfaction and 
            operational efficiency. Whether it's developing enterprise UI frameworks, 
            building MERN stack applications, or implementing AI-powered solutions, 
            I approach each challenge with precision and creativity.
          </p>
        </div>
        <div className="about-stats">
          <div className="stat-item">
            <div className="stat-number">3+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">M.S.</div>
            <div className="stat-label">Computer Science</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">3.60</div>
            <div className="stat-label">GPA / 4.0</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

