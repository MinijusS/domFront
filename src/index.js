'use strict';
//importing hyperscript module
import { h, mount } from './vdom';
import Navigation from './components/Navigation';
import App from './components/App';

//appending whole div to the selected query


mount(h(Navigation, { class: 'wrapper' }), document.querySelector('header'));
mount(h(App, {}), document.querySelector('main'));