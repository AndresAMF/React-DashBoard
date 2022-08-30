import DashboardIcon from '../assets/icons/dashboard.svg';
import Bars from '../assets/icons/bars.png'


const sidebar_menu = [
    {
        id: 1,
        icon: DashboardIcon,
        path: '/',
        title: 'Dashboard',
    },
    {
        id: 2,
        icon: Bars,
        path: '/gender',
        title: 'Gender chart',
    },
    {
        id: 3,
        icon: Bars,
        path: '/country',
        title: 'Country Chart',
    },
    {
        id: 4,
        icon: Bars,
        path: '/age',
        title: 'Age Chart',
    },
   
]

export default sidebar_menu;