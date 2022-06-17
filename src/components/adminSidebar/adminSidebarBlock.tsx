import AdminSidebarButton from "./adminSidebarButton";

interface IProps{
    item: IAdminRoute;
    setActive: () => void;
    isActiveButton:boolean;
}

export default function AdminSidebarBlock(props: IProps) {

    
    return (
        <div className="sidebar__navigationBlock">
            {/* <h3 className="sidebar__blockTitle">{props.item.buttonType}</h3>
            <div className="sidebar__buttonList">
                {props.item.buttonList.map((button, index) => (
                    <AdminSidebarButton button={button} isActiveButton={props.isActiveButton} setActive={() => props.setActive} key={index}/>
                ))}
            </div> */}
        </div>
    )
  }