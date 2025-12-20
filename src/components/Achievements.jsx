import { FaTrophy, FaAward, FaGraduationCap } from 'react-icons/fa'
import './Achievements.css'

const Achievements = () => {
  const achievements = [
    {
      icon: <FaTrophy />,
      title: 'Outstanding Student of the Year (2025)',
      organization: 'Department of Computer Science, Florida Institute of Technology',
      description: 'Recognized for exceptional academic performance and contributions'
    },
    {
      icon: <FaAward />,
      title: 'First Place - Legal Literacy Quiz',
      organization: 'NA Global Law School',
      description: 'Awarded first place in the Legal Literacy and Awareness Quiz'
    },
    {
      icon: <FaGraduationCap />,
      title: 'Distinction Award',
      organization: 'Department of Electronics and Communication',
      description: 'Received distinction during bachelor\'s program for outstanding academic achievement'
    }
  ]

  return (
    <section id="achievements" className="achievements">
      <h2 className="section-title">Achievements</h2>
      <div className="achievements-container">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-card">
            <div className="achievement-icon">
              {achievement.icon}
            </div>
            <h3 className="achievement-title">{achievement.title}</h3>
            <p className="achievement-organization">{achievement.organization}</p>
            <p className="achievement-description">{achievement.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Achievements

