import ChildIcon from '../images/triggersIMG/child.svg';
import PawIcon from '../images/triggersIMG/paw.svg';
import SmileIcon from '../images/triggersIMG/smile.svg'

export const TriggersList: ITriggers[] = [
    {
        title:"Життя",
        description:"Ви врятуєте хвостатого, ощаслививши його",
        color:"green",
        image:PawIcon,
    },
    {
        title:"Радість кожен день",
        description:"Це покращить емоційний та фізичний стан",
        color:"red",
        image:SmileIcon,
    },
    {
        title:"Виховання",
        description:"Хвостаті виховають вашу дитину краще вас",
        color:"blue",
        image:ChildIcon,
    }
]