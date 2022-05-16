/// <reference types="react-scripts" />

interface IJSWindow {
	google: any;
}

interface INavbarButton {
	buttonText: string;
	path:string;
}

interface IBlogButton{
	buttonText: string;
	buttonValue: string;
}

interface IBlog  {
	id: number;
	title: string;
	description: string;
	date: string;
	link: string;
	image: string;
	blogType: string;
	author: string;
	authorAvatar: string;
	article: {
		paragraphTitle:any;
		paragraph:string;
	}[];
}  

interface IPetSelect 	{
	selectName: string,
	valueName:string;
	selectValues: {
		petValue:string;
		text: string;
	}[];
}

interface IPetSelectStates 	{
	stateName: string;
	stateFunction: string;
	value:any;
}

interface IPetCharacteristic{
	typeCharacteristic:string;
}

interface IHelpTypes{
	helpName: string;
	helpDescription:  string;
	buttonFunction: any;
}

interface IPopupTextBlock{
	popupName: string;
	popupDescription:  string;
	popupHelpTypesTitle:string;
	popupHelpTypes: {
		helpTypeTitle:string;
		helpTypeDescription:string;
	}[];
}

interface IPopupForm{
	formInputs:{
		inputPlaceholder:string;
		inputValue:string;
	}[];
	formSelects:{
		selectPlaceholder:string;
		selectValue:string;
		selectOptions:{
			optionName:string;
		}[];
	}[];
	formMessage:string;
	actionButtons:{
		buttonName:string;
	}[];
}

interface IActionPopups{
	textBlock: IPopupTextBlock;
	form:IPopupForm;
}