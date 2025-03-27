// types
import { RouteObject } from 'react-router';

import ComingSoon from '../pages/maintenance/coming-soon';
import Error404 from '../pages/maintenance/404';
// import Error500 from '../pages/maintenance/500';

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes: RouteObject = {
	path: '/',
	errorElement: <Error404 error={'page'} />,
	children: [
		{
			index: true,
			element: <ComingSoon />,
		},
		{
			path: '*',
			element: <Error404 error={'page'} />,
		},
	],
};

export default MainRoutes;
