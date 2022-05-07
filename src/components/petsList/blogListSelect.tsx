interface IProps{
    select: IPetSelect;
    foundPets:any;
    setPetType: (value:any) => void;
    setPetAge: (value:any) => void;
    setPetSize: (value:any) => void;
    setPetSex: (value:any) => void;
}

export default function PetsListSelect(props:IProps) {

  const valueName = props.select.valueName;

  const handleChange = (event:any) => {
    const keyword = event.target.value;
    if(valueName === 'type'){
      props.setPetType(keyword);
    } else if(valueName === 'age'){
      props.setPetAge(keyword);
    } else if(valueName === 'size'){
      props.setPetSize(keyword);
    } else if(valueName === 'sex'){
      props.setPetSex(keyword);
    }
  };

  return (
      <select onChange={handleChange} className='petList__select' name={props.select.selectName}>
        {props.select.selectValues.map((select, index) => (
            <option key={index} value={select.petValue}>
                {select.text}
            </option>
        ))}
      </select>
  )
}