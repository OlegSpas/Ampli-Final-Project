import BlogIcon from '../images/sidebarIcons/Blog.svg';
import AnimalsIcon from '../images/sidebarIcons/Animals.svg';
import MessagesIcon from '../images/sidebarIcons/Messages.svg';
import TeamIcon from '../images/sidebarIcons/Team.svg';

export const AdminRoutes: IAdminRoute[] = [
    {
        buttonText: "Повідомлення",
        buttonValue:"Messages",
        buttonIcon:MessagesIcon
    },
    {
        buttonText: "Команда",
        buttonValue:"Team",
        buttonIcon:TeamIcon
    },
    {
        buttonText: "Тварини",
        buttonValue:"Pets",
        buttonIcon:AnimalsIcon
    },
    {
        buttonText: "Блог",
        buttonValue:"Blog",
        buttonIcon:BlogIcon
    }
]