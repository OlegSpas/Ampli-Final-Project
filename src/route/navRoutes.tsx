import { HOME, ABOUT, HELP, BLOG, ADOPTION} from "./Routes"

export const Routes: INavbarButton[] = [
	{
		buttonText: 'Головна',
		path: HOME
	},
	{
		buttonText: 'Про нас',
		path: ABOUT
	},
	{
		buttonText: 'Наші хвостаті',
		path: ADOPTION
	},
	{
		buttonText: 'Допомога',
		path: HELP
	},
	{
		buttonText: 'Блог',
		path: BLOG
	}
	
]