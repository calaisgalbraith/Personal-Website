import Language from '../Language/Language';
import './LanguageList.css'

function LanguageList({languages}) {
  return (
     <div className='languageList'>
        {languages.map((language) => {
            return <Language language={language} key={language.title} />
         })}
     </div>
  );
}

export default LanguageList;
