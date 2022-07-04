interface IProps{
    button:{
		buttonText: string;
		buttonValue:string;
		buttonIcon:string;
    }
    setActive: () => void;
    isActiveButton:boolean;
    setContent: (value:any) => void;
}


export default function AdminSidebarButton(props: IProps) {

    const handleSetActiveButton = () => {
        props.setActive();
        props.setContent(props.button.buttonValue);
      }


    return (
        <button onClick={handleSetActiveButton} className={`sidebar__button ${props.isActiveButton ? 'activeButton' : ''}`}>
            <img src={props.button.buttonIcon} alt="icon" className="buttonIcon"/>
            {props.button.buttonText}
        </button>
    )
  }