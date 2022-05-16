import React from 'react';
// import MemberCard from './memberCard';
// import TeamData from '../../fakeData/teamData.json';


interface IProps{
  close:() => void;

}

// Добавити заборону виключання при наведенні

export default function ActionPopup(props:IProps) {
  const [canClose, setCanClose] = React.useState(true);

  const handleClose = () =>{
    if(canClose){
      props.close()
    }
  }

  return (
    <div className='action__popup' onClick={handleClose}>
        <div className="mainPopup">
        popup
        </div>
    </div>
  )
}