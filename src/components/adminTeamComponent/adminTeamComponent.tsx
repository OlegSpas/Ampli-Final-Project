import React from "react";
import AdminTeamAction from "./adminTeamAction";
import AdminTeamCard from "./adminTeamCard";
import './adminTeamComponent.scss';
import AdminTeamPopup from "./adminTeamPopup";


interface IProps{
  team: ITeam[];
}

export default function AdminTeamComponent(props:IProps) {
  const team = props.team;
  const [foundTeam, setFoundTeam ] = React.useState(team);
  const [ isOpenTeamPopup, setOpenTeamPopup ] = React.useState(false);


  const handleOpenTeamPopup = () => {
    setOpenTeamPopup(true);
  }
  const handleCloseTeamPopup  = () => {
    setOpenTeamPopup(false);
  }

  const handleFilter = (searchValue:any) => {
    if(searchValue !== ''){
      const result = team.filter((member) => {
        return member.name.toLowerCase().startsWith(searchValue.toLowerCase());
      });
      setFoundTeam(result);
    } else{
      setFoundTeam(team);
    }
  };

  return (
      <div className="admin__teamComponent">
        <h2 className="admin__contentTitle">Команда</h2>
        <AdminTeamAction handleOpenTeamPopup={handleOpenTeamPopup} handleFilter={handleFilter}/>
        <div className="admin__teamList">
          {foundTeam.length > 0? (
            foundTeam.map((member, index) =>(
              <AdminTeamCard member={member} key={index}/>
            ))
          ) : (
            <h2 className='error__title'>Упс... Немає результатів</h2>
          )}
        </div>
        { isOpenTeamPopup && <AdminTeamPopup foundTeam={foundTeam} close={handleCloseTeamPopup}/>}
      </div>
  )
}