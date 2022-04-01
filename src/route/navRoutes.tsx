import { HOME, ABOUT, HELP, BLOG} from "./Routes"

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
		buttonText: 'Допомога',
		path: HELP
	},
	{
		buttonText: 'Блог',
		path: BLOG
	}
	
]