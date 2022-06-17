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
	popup: any;
	image:string;
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


interface IAdminRoute {
	buttonText: string;
	buttonValue:string;
	buttonIcon:string;
}

interface IAdminMessageRoute {
	buttonText: string;
	buttonValue: string;
}

interface IMessage{
	messageId: number;
    messageType: string;
    authorName: string;
    authorSecondName: any;
    authorPhoneNumber: string;
    authorEmail: string;
    report: any;
    reportDetails: any;
    messages: string;
    date: string;
}

///

interface IPet{
	id:number;
	name:string;
	description:string;
	age:string;
	sex:string;
	size:string;
	type:string;
	images: IImage[];
}

interface IImage{
	id:number;
	url:string;
}

interface ITeam{
	id:number;
	name:string;
	phoneNumber:string;
	job:string;
	email:string;
	login:string;
	password:string;
	avatar:string
}

interface IMessages{
  id: number;
  messageType: string;
  authorName: string;
  authorSecondName: string;
  authorPhoneNumber: string;
  authorEmail: string;
  report: string;
  reportDetails: string;
  message: string;
  date: string;
}

interface IBlogs{
	id:number;
	title:string;
	description:string;
	date:string;
	image:string;
	blogType:string;
	message: string;
}


interface ITriggers{
	title:string;
	description:string;
	color:string;
	image:string;
}