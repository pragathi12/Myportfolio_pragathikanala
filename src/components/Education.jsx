import { FaGraduationCap, FaAward, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa'
import './Education.css'

const Education = () => {
  const education = [
    {
      degree: 'Master of Science in Computer Science',
      school: 'Florida Institute of Technology',
      location: 'Melbourne, Florida, United States',
      gpa: '3.60/4.0',
      graduation: 'May 2024',
      coursework: [
        'Computer Information Security',
        'Database Management',
        'Computer Vision',
        'Artificial Intelligence'
      ],
      achievements: [
        'Outstanding Student of the Year (2024)',
        'GPA: 3.60/4.0'
      ]
    },
    {
      degree: 'Bachelor of Engineering in Electronics & Communication',
      school: 'PES Institute of Technology',
      location: 'Bangalore, Karnataka, India',
      gpa: '7.8/10',
      graduation: 'August 2021',
      coursework: [
        'Programming in C and Data Structures',
        'Analog Electronics',
        'Digital Electronics',
        'Network Analysis'
      ],
      achievements: [
        'Distinction from Department of Electronics and Communication',
        'CGPA: 7.8/10'
      ]
    }
  ]

  return (
    <section id="education" className="education">
      <h2 className="section-title">Education</h2>
      <div className="education-container">
        {education.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="education-icon">
              <FaGraduationCap />
            </div>
            <div className="education-content">
              <div className="education-header">
                <h3 className="education-degree">{edu.degree}</h3>
                <div className="education-gpa">
                  <FaAward /> GPA: {edu.gpa}
                </div>
              </div>
              <div className="education-school">
                {edu.school}
              </div>
              <div className="education-meta">
                <span className="education-location">
                  <FaMapMarkerAlt /> {edu.location}
                </span>
                <span className="education-graduation">
                  <FaCalendarAlt /> {edu.graduation}
                </span>
              </div>
              <div className="education-details">
                <div className="education-coursework">
                  <h4>Relevant Coursework:</h4>
                  <div className="coursework-tags">
                    {edu.coursework.map((course, courseIndex) => (
                      <span key={courseIndex} className="course-tag">{course}</span>
                    ))}
                  </div>
                </div>
                <div className="education-achievements">
                  <h4>Achievements:</h4>
                  <ul>
                    {edu.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education

