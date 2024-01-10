import ReactDOM from 'react-dom/client';

// Mount function to start the app
const mount = (el: Element) => {
	const container = ReactDOM.createRoot(el);
	container.render(<h1>marketing</h1>);
};

// If we are in development mode and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
	const devRoot = document.querySelector('#_marketing-dev-root');

	if (devRoot) {
		mount(devRoot);
	}
}

// We are running through container
// and we should export the mount function
export { mount };
