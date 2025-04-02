// types
import { RouteObject } from 'react-router';

import ComingSoon from '../pages/maintenance/coming-soon';
import UnderConstruction from '../pages/maintenance/under-construction';
import Error404 from '../pages/maintenance/404';
import Index from '../pages';
import About from '../pages/tabs/about';
import Resume from '../pages/tabs/resume';
// import Error500 from '../pages/maintenance/500';

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes: RouteObject = {
	path: '/',
	errorElement: <Error404 error={'Page'} />,
	element: <Index />,
	children: [
		{
			path: '/',
			element: <About />,
		},
		{
			path: 'resume',
			element: <UnderConstruction />,
		},
		{
			path: 'projects',
			element: <UnderConstruction />,
		},
		{
			path: 'contact',
			element: <UnderConstruction />,
		},
		{
			path: '*',
			element: <Error404 error={'Page'} />,
		},
	],
};

export default MainRoutes;
