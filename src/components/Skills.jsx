import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend & Web',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript (ES6+)', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Lit Web Components', level: 85 },
        { name: 'HTML5/CSS3', level: 95 },
        { name: 'jQuery', level: 80 },
        { name: 'Responsive Design', level: 92 },
        { name: 'Accessibility', level: 88 }
      ]
    },
    {
      title: 'Backend & Languages',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'Spring', level: 85 },
        { name: 'Python', level: 88 },
        { name: 'Node.js', level: 85 },
        { name: 'C/C++', level: 80 },
        { name: 'RESTful APIs', level: 92 },
        { name: 'Microservices', level: 85 },
        { name: 'MySQL', level: 88 }
      ]
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS (EC2, S3, Lambda)', level: 85 },
        { name: 'Kubernetes (EKS, ECS)', level: 80 },
        { name: 'Docker', level: 85 },
        { name: 'CI/CD (CodePipeline)', level: 82 },
        { name: 'Git/Bitbucket', level: 90 },
        { name: 'JIRA', level: 88 },
        { name: 'Agile/Scrum', level: 90 }
      ]
    },
    {
      title: 'AI/ML & Others',
      skills: [
        { name: 'TensorFlow/Keras', level: 85 },
        { name: 'CNN', level: 80 },
        { name: 'Flutter/Dart', level: 75 },
        { name: 'Apache Kafka', level: 78 },
        { name: 'MongoDB', level: 80 },
        { name: 'Figma', level: 75 }
      ]
    }
  ]

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills

