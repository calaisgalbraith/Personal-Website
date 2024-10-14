import './Hero.css';
import IconList from '../IconList/IconList';

const icons = [
    {
        "title": "LinkedIn",
        "image": "LinkedIn"
    },
    {
        "title": "Github",
        "image": "Github"
    },
    {
        "title": "Email",
        "image": "email"
    }
]

function Hero() {
  return (
    <header className='hero' >
        <div className='name'>Calais Galbraith</div>

        <div>A Full-Stack Developer passionate about creating intuitive user experiences and effeicent, reusable code.</div>

        <IconList icons={icons}/>
    </header>
  );
}

export default Hero;
