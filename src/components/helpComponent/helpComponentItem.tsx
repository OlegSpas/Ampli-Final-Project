import { Link } from 'react-router-dom';
import { ADOPTION, HELP } from '../../route/Routes';

interface IProps{
    card:{
        title:string;
        description:string;
        link:string;
        image:string;
    }
}


export default function HelpComponentItem(props:IProps) {

    var path
    if(props.card.link === 'adopt'){
        path = ADOPTION ;
    } else {
        path = HELP;
    };

  return (
    <Link to={path} className="helpComponent__card">
        <div className="card__image">
            <img src={props.card.image} alt={props.card.title} />
        </div>
        <div className="card__content">
            <h3>{props.card.title}</h3>
            <p>{props.card.description}</p>
            <button>
                Більше
            </button>
        </div>
    </Link>
  )
}