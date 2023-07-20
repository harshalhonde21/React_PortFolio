import './css/Footer.css'
import github from "../../src/assets/github.png"
import linkedin from "../../src/assets/linkedin.png"


const Footer = () => {
  return (
    <div>
      <div className="footer-section">
        <p>&copy; 2023 - All rights reserved - Harshal Honde</p>

        <a href='https://linkedin.com/in/harshalhonde'><img src={linkedin} /></a>
        <a href='https://github.com/harshalhonde21'><img src={github} /></a>
      </div>
    </div>
  )
}

export default Footer
