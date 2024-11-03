import './Hero.css';
import IconList from '../IconList/IconList';
import { IoIosArrowDown } from "react-icons/io";

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

function Hero() {
  return (
    <header className='hero' >
        <div className='heroContainer'>
            <div className='name'>Calais Galbraith</div>
            <div className='description'>A Full-Stack Developer passionate about creating intuitive user experiences and efficient, reusable code.</div>
            <IconList icons={icons}/>
        </div>
        <div className='scrollIcon'>
                <a href="#projects">
                    <IoIosArrowDown/>
                </a>
        </div>
    </header>
  );
}

export default Hero;
