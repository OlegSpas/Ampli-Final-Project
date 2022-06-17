interface IProps{
    button: IBlogButton;
}

export default function MenuMessageOption(props: IProps) {
    const {buttonText, buttonValue} = props.button;


  return (
    <option className={`menuMessage__option`} value={buttonValue}>
        {buttonText}
    </option>
  )
}