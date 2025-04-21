// types
import { RouteObject } from 'react-router';

import ComingSoon from '../pages/maintenance/coming-soon';
import UnderConstruction from '../pages/maintenance/under-construction';
import Error404 from '../pages/maintenance/404';
import Index from '../pages';
import About from '../pages/tabs/about';
import Experience from '../pages/tabs/experience';
import Contact from '../pages/tabs/contact';
import Projects from '../pages/tabs/projects';
// import Error500 from '../pages/maintenance/500';

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes: RouteObject = {
	path: '/',
	errorElement: <Error404 error={'Page'} />,
	element: <Index />,
	children: [
		{
			path: '/',
			element: <Contact />,
		},
		{
			path: '/experience',
			element: <Experience />,
		},
		{
			path: 'projects',
			element: <Projects />,
		},
		// {
		// 	path: 'contact',
		// 	element: <Contact />,
		// },
		{
			path: '*',
			element: <Error404 error={'Page'} />,
		},
	],
};

export default MainRoutes;
