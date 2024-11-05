
import './Language.css'

function Language ({ language }) {
  return (
    <>
        <div className="language">
          <a href={language.link} target='_blank' rel='noopener noreferrer'>{language.title}</a>
        </div>
    </>
  );
}

export default Language;
