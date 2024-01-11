import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const el = document.querySelector('#root');

if (el) {
	const root = ReactDOM.createRoot(el);

	root.render(
		<StrictMode>
			<App />
		</StrictMode>
	);
}
