import { FaCertificate, FaCloud, FaCode, FaGraduationCap } from 'react-icons/fa'
import './Certifications.css'

const Certifications = () => {
  const certifications = [
    {
      icon: <FaCloud />,
      title: 'Cloud Fundamentals & AWS',
      provider: 'Mphasis Limited',
      description: 'AWS Cloud Content Management, Certification & hands-on labs'
    },
    {
      icon: <FaCode />,
      title: 'RESTful Web Services & Microservices',
      provider: 'Mphasis Limited',
      description: 'Java Microservices, RESTful Web Services, Git, DevOps Essentials - Certification & practical training'
    },
    {
      icon: <FaCloud />,
      title: 'Apache Kafka',
      provider: 'Mphasis Limited',
      description: 'Certification & hands-on labs in Apache Kafka'
    },
    {
      icon: <FaGraduationCap />,
      title: 'Programming for Everybody (Python)',
      provider: 'University of Michigan, Coursera',
      description: 'Getting Started with Python - Programming fundamentals'
    },
    {
      icon: <FaCertificate />,
      title: 'Privileged Account Management (PAM)',
      provider: 'Udemy',
      description: 'Identity & Access Management, Privileged Account Management'
    }
  ]

  return (
    <section id="certifications" className="certifications">
      <h2 className="section-title">Certifications</h2>
      <div className="certifications-container">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-card">
            <div className="certification-icon">
              {cert.icon}
            </div>
            <div className="certification-content">
              <h3 className="certification-title">{cert.title}</h3>
              <p className="certification-provider">{cert.provider}</p>
              <p className="certification-description">{cert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certifications

