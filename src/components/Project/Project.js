import Card from 'react-bootstrap/Card';
import IconList from '../IconList/IconList';
import './Project.css'
import ravenous from './images/ravenous.png';
import admin from './images/admin.png'
import ebq from './images/ebq.png'
import turbo from './images/turbo.png'
import LanguageList from '../LanguageList/LanguageList';

const displayMap = {
  "ravenous": ravenous,
  "admin": admin,
  "ebq": ebq,
  "turbo": turbo
}

function Project({ project, handleClick }) {
  return (
    <>
      <Card style={{ width: '21rem' }}>
        <Card.Img variant="top" src={displayMap[project.type]} onClick={handleClick} />
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
          <Card.Text>{project.description}</Card.Text>
          <LanguageList languages={project.languages} />
          <IconList icons={project.icons}/>
        </Card.Body>
      </Card>
    </>
  );
}

export default Project;