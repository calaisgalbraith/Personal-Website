import Icon from '../Icon/Icon';
import './IconList.css'

function IconList({ icons }) {
  return (
     <div className='iconList'>
        {icons.map((icon) => {
            return <Icon icon={icon} key={icon.title} />
         })}
     </div>
  );
}

export default IconList;
