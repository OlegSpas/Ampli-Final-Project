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