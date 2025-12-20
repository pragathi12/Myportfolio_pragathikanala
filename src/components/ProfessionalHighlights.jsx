import { FaRocket, FaChartLine, FaUsers, FaLightbulb, FaShieldAlt, FaCode } from 'react-icons/fa'
import './ProfessionalHighlights.css'

const ProfessionalHighlights = () => {
  const highlights = [
    {
      icon: <FaRocket />,
      title: 'Innovative Solutions Development',
      description: 'Developed customized solutions on Actimize platform using Actimize Risk Case Manager, AIS Modeler, Java, HTML, CSS, JavaScript, and MySQL. Created and enhanced RCM and AIS objects to meet client-specific requirements, boosting platform functionality and usability.',
      impact: 'Significantly enhanced user satisfaction and operational efficiency'
    },
    {
      icon: <FaChartLine />,
      title: 'Strategic Data Analysis',
      description: 'Conducted strategic analysis of client data, crafting precise specifications and tailored solutions for improved risk management and compliance. Ensured end-to-end risk management focusing on customer impact minimization.',
      impact: 'Improved risk detection and reporting capabilities'
    },
    {
      icon: <FaUsers />,
      title: 'Cross-Functional Collaboration',
      description: 'Actively contributed to project planning, milestone management, and continuous skill development. Collaborated with UX designers, business analysts, and backend engineers to validate flows and improve usability.',
      impact: 'Ensured timely and efficient project delivery'
    },
    {
      icon: <FaLightbulb />,
      title: 'Metadata-Driven Architecture',
      description: 'Developed metadata-driven pages where layouts, fields, and flows are driven by backend configuration instead of hardcoded screens. Implemented conditional fields, step-based flows, and auto-rendered sections.',
      impact: 'Created scalable, adaptable enterprise solutions'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Compliance & Security',
      description: 'Built custom models and SAR (Suspicious Activity Report) forms to meet strict regulatory compliance requirements. Implemented Actimize AML-SAM for anti-money laundering and suspicious activity detection.',
      impact: 'Ensured regulatory compliance and security standards'
    },
    {
      icon: <FaCode />,
      title: 'Full-Stack Development',
      description: 'Developed secure, high-performance banking platform integrating backend and frontend. Built reusable, configurable UI components reused across multiple workflows and products. Owned end-to-end development from requirements to deployment.',
      impact: 'Delivered robust, production-ready applications'
    }
  ]

  const keyMetrics = [
    {
      number: '3+',
      label: 'Years Experience',
      description: 'Building enterprise solutions'
    },
    {
      number: '50+',
      label: 'Projects Delivered',
      description: 'Across banking & fintech'
    },
    {
      number: '100%',
      label: 'Compliance Rate',
      description: 'Regulatory requirements met'
    },
    {
      number: 'M.S.',
      label: 'Computer Science',
      description: 'Florida Institute of Technology'
    }
  ]

  return (
    <section id="highlights" className="professional-highlights">
      <h2 className="section-title">Professional Highlights</h2>
      
      <div className="highlights-intro">
        <p className="intro-text">
          Recognized for proactive project management, innovative problem-solving, and delivering 
          solutions that significantly enhance user satisfaction and operational efficiency. 
          My contributions span enterprise banking platforms, compliance systems, and modern web applications.
        </p>
      </div>

      <div className="highlights-grid">
        {highlights.map((highlight, index) => (
          <div key={index} className="highlight-card">
            <div className="highlight-icon-wrapper">
              <div className="highlight-icon">
                {highlight.icon}
              </div>
            </div>
            <h3 className="highlight-title">{highlight.title}</h3>
            <p className="highlight-description">{highlight.description}</p>
            <div className="highlight-impact">
              <span className="impact-label">Impact:</span>
              <span className="impact-text">{highlight.impact}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="key-metrics">
        <h3 className="metrics-title">Key Metrics</h3>
        <div className="metrics-grid">
          {keyMetrics.map((metric, index) => (
            <div key={index} className="metric-card">
              <div className="metric-number">{metric.number}</div>
              <div className="metric-label">{metric.label}</div>
              <div className="metric-description">{metric.description}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="expertise-areas">
        <h3 className="expertise-title">Core Expertise Areas</h3>
        <div className="expertise-tags">
          <span className="expertise-tag">Enterprise Banking Solutions</span>
          <span className="expertise-tag">Risk Management & Compliance</span>
          <span className="expertise-tag">Metadata-Driven Development</span>
          <span className="expertise-tag">Full-Stack Development</span>
          <span className="expertise-tag">UI/UX Design & Implementation</span>
          <span className="expertise-tag">Cloud & DevOps</span>
          <span className="expertise-tag">AI/ML Integration</span>
          <span className="expertise-tag">Agile Methodologies</span>
        </div>
      </div>
    </section>
  )
}

export default ProfessionalHighlights


