import React from 'react';
import MemberCard from './memberCard';
import TeamData from '../../fakeData/teamData.json';


interface IProps{
  close:() => void;
  team: ITeam[];
}

// Добавити заборону виключання при наведенні

export default function TeamPopup(props:IProps) {
  const [canClose, setCanClose] = React.useState(true);

  const handleClose = () =>{
    if(canClose){
      props.close()
    }
  }

  return (
    <div className='teamComponent__popup' onClick={handleClose}>
        <div className="mainPopup">
          {props.team.map((member, index) => (
            <MemberCard key={index} member={member}/>
          ))}
        </div>
    </div>
  )
}