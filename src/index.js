'use strict';
//importing hyperscript module
import { h, mount } from './vdom';
import App from './components/App';

//appending whole div to the selected query
mount(
    h(App),
    document.querySelector('#app')
);


