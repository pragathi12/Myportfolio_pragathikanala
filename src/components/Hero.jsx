import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  const [typedText, setTypedText] = useState('')
  const fullText = 'Software Engineer'
  const [isDeleting, setIsDeleting] = useState(false)
  const [textIndex, setTextIndex] = useState(0)

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100
    const timeout = setTimeout(() => {
      if (!isDeleting && textIndex < fullText.length) {
        setTypedText(fullText.substring(0, textIndex + 1))
        setTextIndex(textIndex + 1)
      } else if (!isDeleting && textIndex === fullText.length) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && textIndex > 0) {
        setTypedText(fullText.substring(0, textIndex - 1))
        setTextIndex(textIndex - 1)
      } else if (isDeleting && textIndex === 0) {
        setIsDeleting(false)
      }
    }, typeSpeed)

    return () => clearTimeout(timeout)
  }, [textIndex, isDeleting, fullText])

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-image-container">
            <div className="hero-image-wrapper">
              <img 
                src={`${import.meta.env.BASE_URL}photo.jpg`}
                alt="Pragathi Kanala" 
                className="hero-image"
                onError={(e) => {
                  const img = e.target
                  const baseUrl = import.meta.env.BASE_URL
                  const formats = ['photo.jpeg', 'photo.png', 'photo.JPG', 'photo.JPEG', 'photo.PNG']
                  const currentSrc = img.src.split('/').pop()
                  
                  let currentIndex = -1
                  formats.forEach((format, index) => {
                    if (format.toLowerCase() === currentSrc.toLowerCase()) {
                      currentIndex = index
                    }
                  })
                  
                  if (currentIndex >= 0 && currentIndex < formats.length - 1) {
                    img.src = `${baseUrl}${formats[currentIndex + 1]}`
                  } else if (currentIndex === -1 && formats.length > 0) {
                    img.src = `${baseUrl}${formats[0]}`
                  } else {
                    img.style.display = 'none'
                    if (img.nextSibling) {
                      img.nextSibling.style.display = 'block'
                    }
                  }
                }}
              />
              <div className="hero-image-placeholder" style={{ display: 'none' }}>
                <span>PK</span>
              </div>
            </div>
            <div className="hero-image-border"></div>
          </div>
          
          <div className="hero-text">
            <h1 className="hero-greeting">Hi, I'm</h1>
            <h1 className="hero-name">Pragathi Kanala</h1>
            <h2 className="hero-title">
              <span className="typed-text">{typedText}</span>
              <span className="cursor">|</span>
            </h2>
            <p className="hero-description">
              Software Engineer building enterprise banking solutions with expertise in 
              full-stack development, cloud technologies, and AI/ML. Passionate about 
              creating metadata-driven, accessible applications that adapt seamlessly 
              across different regions and user journeys.
            </p>
            
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                Get In Touch
              </a>
              <a href="/pragathikanala_resume.pdf" className="btn btn-secondary" download>
                <FaDownload /> Download Resume
              </a>
            </div>

            <div className="hero-social">
              <a href="https://github.com/pragathi12" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="http://linkedin.com/in/k-pragathi258/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="mailto:pragathi258@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

