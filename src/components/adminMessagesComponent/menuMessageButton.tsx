interface IProps{
    button: IBlogButton;
    setValue:(buttonValue:string) => void;
    handleFilter: (buttonValue:any) => void;
    setActive: () => void;
    isActive: boolean;
}

export default function MenuMessageButton(props: IProps) {
    const {buttonText, buttonValue} = props.button;

    const handleSetBlogs = () => {
      props.setValue(buttonValue);
      props.setActive();
      props.handleFilter(buttonValue);
    }

  return (
    <button className={`messageMenu__button ${props.isActive ? 'activeButton' : ''}`} onClick={handleSetBlogs}>
        {buttonText}
    </button>
  )
}