/**
 * Using any other mount methods like react, will not work in Cobalt!
 */
import { render } from 'preact';
import { App } from './App';
// enable tailwindcss
import './tailwindcss/styles.scss';
// mount the app
const container = document.getElementById('root');
if (!container) {
  throw new Error('No container found');
}
render(<App />, container);
