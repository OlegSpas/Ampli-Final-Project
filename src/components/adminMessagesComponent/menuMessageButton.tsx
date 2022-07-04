interface IProps{
    button: IBlogButton;
    handleFilter: (buttonValue:any) => void;
    setActive: () => void;
    isActive: boolean;
}

export default function MenuMessageButton(props: IProps) {
    const {buttonText, buttonValue} = props.button;

    const handleSetBlogs = () => {
      props.setActive();
      props.handleFilter(buttonValue);
    }

  return (
    <button className={`messageMenu__button ${props.isActive ? 'activeButton' : ''}`} onClick={handleSetBlogs}>
        {buttonText}
    </button>
  )
}