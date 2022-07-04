interface IProps{
    button: IBlogButton;
    handleFilter: (buttonValue:any) => void;
    setActive: () => void;
    isActive: boolean;
}

export default function BlogListButton(props: IProps) {
    const {buttonText, buttonValue} = props.button;

    const handleSetBlogs = () => {
      props.setActive();
      props.handleFilter(buttonValue);
    }

  return (
    <button className={`blogList__button ${props.isActive ? 'active' : ''}`} onClick={handleSetBlogs}>
        {buttonText}
    </button>
  )
}