interface IProps{
    select: IPetSelect;
    // handleSelect: (selectValue:any) => void; 
    onValueChange: (value:any, type:any) => void;
}

export default function AddPetSelect(props:IProps) {
  
  const valueName = props.select.valueName;



  return (
      <select className='form__select' onChange={(e) => props.onValueChange(e.target.value, props.select.selectName)} name={props.select.valueName}>
        {props.select.selectValues.map((select, index) => (
            <option key={index} value={select.petValue}>
                {select.text}
            </option>
        ))}
      </select>
  )
}