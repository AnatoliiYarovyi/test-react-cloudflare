import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	//sdsdfsfsds
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<button
					type="button"
					onClick={() => {
						// @ts-ignore
						window.stonks.event('Purchase merch');
					}}
					style={{ margin: '10px 0 0 0' }}
				>
					Purchase merch
				</button>
				<button
					type="button"
					onClick={() => {
						// @ts-ignore
						window.stonks.event('Purchase snickers', '/', { color: 'white' });
					}}
					style={{ margin: '10px 0 0 0' }}
				>
					Purchase snickers - "white"
				</button>
				<button
					type="button"
					onClick={() => {
						// @ts-ignore
						window.stonks.event('Purchase snickers', '/', { color: 'black' });
					}}
					style={{ margin: '10px 0 0 0' }}
				>
					Purchase snickers "black"
				</button>
				<button
					type="button"
					onClick={() => {
						// @ts-ignore
						window.stonks.event('Purchase snickers', '/', { size: 'm', theme: 'pink', color: 'green' });
					}}
					style={{ margin: '10px 0 0 0' }}
				>
					Purchase snickers size "m" and theme "pink" & color "green"
				</button>
				<button
					type="button"
					onClick={() => {
						// @ts-ignore
						window.stonks.event('Purchase snickers', '/', { size: 'l', theme: 'blue'});
					}}
					style={{ margin: '10px 0 0 0' }}
				>
					Purchase snickers size "l" and theme "blue"
				</button>
				<button
					type="button"
					onClick={() => {
						// @ts-ignore
						window.stonks.event('Purchase snickers', '/', { string: 'hello', boolean: true, number: 111});
					}}
					style={{ margin: '10px 0 0 0' }}
				>
					Purchase snickers - string "hello", boolean true and number 111
				</button>
				<button
					type="button"
					onClick={() => {
						// @ts-ignore
						window.stonks.event('Purchase snickers', '/', { string: 'hi', boolean: false, number: 222});
					}}
					style={{ margin: '10px 0 0 0' }}
				>
					Purchase snickers - string "hi", boolean false and number 222
				</button>
			</header>
		</div>
	);
}

export default App;
