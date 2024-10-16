import { useState } from 'react'
import Project from '../Project/Project';
import projects from './data/projects.json'
import ImageModal from '../Modal/ImageModal'
import './ProjectList.css'

function ProjectList() {
  const [modalSrc, setModalSrc] = useState('')  // image to be shown in modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (e) => { // on click project img, show & update modal img
    setShow(true);
    setModalSrc(e.target.src)
  }

  return (
    <>
      <div id="projects">
        <h2>Projects</h2>
        <div className='projectsList'>
          {projects.map((project) => {
            return <Project project={project} key={project.title} handleClick={handleShow}/>;
            })}
        </div>
      </div>
      <ImageModal show={show} handleClose={handleClose} src={modalSrc}/>
    </>
  );
}

export default ProjectList;
