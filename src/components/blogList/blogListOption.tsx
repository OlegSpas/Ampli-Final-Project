interface IProps{
    button: IBlogButton;
}

export default function BlogListOption(props: IProps) {
    const {buttonText, buttonValue} = props.button;


  return (
    <option className={`blogList__option`} value={buttonValue}>
        {buttonText}
    </option>
  )
}