import { FaGithub, FaExternalLinkAlt, FaCode, FaStar } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Personal Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Vite featuring dark/light mode toggle, animated code particle background, and fully responsive design. Showcases professional experience, projects, skills, and achievements with smooth animations and professional UI/UX.',
      technologies: ['React.js', 'Vite', 'JavaScript', 'CSS3', 'HTML5', 'React Icons', 'Responsive Design'],
      github: 'https://github.com/pragathi12/Myportfolio_pragathikanala',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop',
      featured: true,
      isPortfolio: true
    },
    {
      title: 'Recipe Finder - Full-Stack Web Application',
      description: 'Built a comprehensive MERN stack recipe application with advanced search functionality, favorites management, and responsive UI. Deployed on AWS EC2 with seamless user experience and real-time recipe discovery.',
      technologies: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'JavaScript', 'CSS', 'HTML5', 'AWS EC2'],
      github: 'https://github.com/pragathi12/Recipe_Finder_Project',
      demo: null,
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=250&fit=crop',
      featured: true
    },
    {
      title: 'Handwritten Digit Recognition using CNN',
      description: 'Developed a sophisticated Convolutional Neural Network using TensorFlow and Keras for real-time handwritten digit recognition. Trained on MNIST dataset with Tkinter GUI for interactive predictions and Matplotlib visualizations.',
      technologies: ['Python', 'TensorFlow', 'Keras', 'CNN', 'NumPy', 'OpenCV', 'Jupyter Notebook', 'Tkinter', 'Matplotlib'],
      github: 'https://github.com/pragathi12/Hand_Written_Recognition_of_Digit_9_Project',
      demo: null,
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop',
      featured: true
    },
    {
      title: 'DigiFarmer - Flutter Agriculture Management App',
      description: 'Created an intelligent agriculture management application using Flutter and Dart. Integrated TensorFlow Lite and LightGBM Classifier for crop disease detection, weather forecasting, and market insights to help farmers make data-driven decisions.',
      technologies: ['Flutter', 'Dart', 'TensorFlow Lite', 'LGBM Classifier', 'Machine Learning'],
      github: 'https://github.com/pragathi12',
      demo: null,
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=250&fit=crop',
      featured: true
    }
  ]

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Featured Projects</h2>
      <p className="projects-intro">Showcasing innovative solutions built with modern technologies</p>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className={`project-card ${project.featured ? 'featured' : ''}`}>
            {project.featured && (
              <div className="featured-badge">
                <FaStar /> Featured
              </div>
            )}
            <div className="project-image">
              <img 
                src={project.image} 
                alt={project.title}
                onError={(e) => {
                  const img = e.target
                  img.style.display = 'none'
                  const container = img.parentElement
                  container.style.background = 'linear-gradient(135deg, #64ffda, #7c4dff)'
                  container.style.display = 'flex'
                  container.style.alignItems = 'center'
                  container.style.justifyContent = 'center'
                  const fallback = document.createElement('div')
                  fallback.style.cssText = 'color: white; font-size: 2rem; font-weight: bold; text-align: center; padding: 2rem;'
                  fallback.textContent = project.title.split(' ')[0]
                  container.insertBefore(fallback, container.firstChild)
                }}
              />
              <div className="project-overlay">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" title="View on GitHub">
                  <FaGithub />
                  <span>Code</span>
                </a>
                {project.demo && project.demo !== '#' && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link" title="View Live Demo">
                    <FaExternalLinkAlt />
                    <span>Demo</span>
                  </a>
                )}
                {project.isPortfolio && (
                  <a href="#hero" className="project-link" title="View Portfolio" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                    <FaExternalLinkAlt />
                    <span>View</span>
                  </a>
                )}
              </div>
            </div>
            <div className="project-content">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-github-link"
                  title="View on GitHub"
                >
                  <FaCode /> View Code
                </a>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

