import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import './Icon.css'

const displayMap = { // displaymap for potential icons
  "linkedIn": <FaLinkedin title="LinkedIn"/>,
  "github": <FaGithub title="Github"/>,
  "site": <FaGlobe title="Demo Website"/>,
}

function Icon({ icon }) {
  return (
    <>
        <div className="icon">
          <a href={icon.url} target="_blank" rel="noreferrer">
            {displayMap[icon.type]}
          </a>
          </div>
    </>
  );
}

export default Icon;
