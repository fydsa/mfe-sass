import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core';
import Landing from './components/Landing';
import Pricing from './components/Pricing';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Landing />,
	},
	{
		path: '/pricing',
		element: <Pricing />,
	},
]);

export default () => {
	return (
		<div>
			<StylesProvider>
				<RouterProvider router={router} />
			</StylesProvider>
		</div>
	);
};
