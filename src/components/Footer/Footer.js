import IconList from "../IconList/IconList";
import './Footer.css'

const icons = [
  {
      "title": "LinkedIn",
      "type": "linkedIn",
      "url": "https://www.linkedin.com/in/calaisgalbraith/"
  },
  {
      "title": "Github",
      "type": "github",
      "url": "https://github.com/calaisgalbraith"
  }
]

function Footer() {
  return (
    <footer>
        <IconList icons={icons}/>
    </footer>
  );
}

export default Footer;