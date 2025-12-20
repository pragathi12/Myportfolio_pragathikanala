import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaBuilding } from 'react-icons/fa'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Temenos USA Inc.',
      location: 'United States',
      period: 'July 2025 - Present',
      type: 'Full-time',
      description: [
        'Build enterprise UI screens for internal banking/customer-service platform using Lit Web Components, JavaScript, and TypeScript',
        'Develop metadata-driven pages where layouts, fields, and flows are driven by backend configuration instead of hardcoded screens',
        'Create responsive, accessibility-focused interfaces that adapt to different regions, products, currencies, and languages',
        'Own end-to-end development of new service actions, from reviewing Figma/requirements to wiring APIs and handling error/edge states',
        'Build reusable, configurable UI components (tables, filters, dialogs, forms) reused across multiple workflows and products',
        'Implement metadata-driven behaviors such as conditional fields, step-based flows, and auto-rendered sections',
        'Collaborate with UX designers, business analysts, and backend engineers to validate flows and improve usability',
        'Debug and resolve complex UI/UX issues across browsers and devices while delivering code through Git/Bitbucket, feature branches, and reviews'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Mphasis Limited',
      location: 'India',
      period: 'September 2021 - July 2023',
      type: 'Full-time',
      description: [
        'Developed secure, high-performance banking platform integrating backend and frontend using Java, MySQL, HTML, CSS, and JavaScript',
        'Built custom models and SAR (Suspicious Activity Report) forms to meet strict regulatory compliance requirements',
        'Contributed to RCT (Risk Management and Compliance Technology) for enterprise-wide risk detection and reporting',
        'Implemented Actimize AML-SAM for anti-money laundering (AML) and suspicious activity detection',
        'Worked with AIS (Actimize Integrated Surveillance) and RCM (Risk Case Manager) to manage alerts and follow-up actions',
        'Utilized Actimize Customer Due Diligence (CDD) for risk-based AML compliance and customer lifecycle management',
        'Developed customized solutions on Actimize platform using Actimize Risk Case Manager, AIS Modeler, Java, HTML, CSS, JavaScript, and MySQL',
        'Created and enhanced RCM and AIS objects to meet client-specific requirements, boosting platform functionality and usability',
        'Conducted strategic analysis of client data, crafting precise specifications and tailored solutions for improved risk management'
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-timeline-dot"></div>
            <div className="experience-content">
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">{exp.title}</h3>
                  <div className="experience-company-name">
                    <FaBuilding /> {exp.company}
                  </div>
                </div>
                <div className="experience-badge">{exp.type}</div>
              </div>
              <div className="experience-meta">
                <span className="experience-location">
                  <FaMapMarkerAlt /> {exp.location}
                </span>
                <span className="experience-period">
                  <FaCalendarAlt /> {exp.period}
                </span>
              </div>
              <ul className="experience-description">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience

