import { Component, h } from "../vdom";
import ListItem from "./ListItem";

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state.navItems = {
            currentlyActive: 0,
            list: ['Home', 'Login', 'Register']
        };
        this.makeActive = this.makeActive.bind(this);
    }

    makeActive(id) { 
        this.state.navItems.currentlyActive = id;
        this.setState(this.state);
    }

    render() {
        const navList = this.state.navItems.list.map((item, index) => {
            return h(ListItem, {
                item: item,
                id: index,
                class: this.state.navItems.currentlyActive === index ? 'active' : 'non-active',
                click: this.makeActive
            });
        })

        return h('nav',
            {
                class: this.props.class
            },
            h('img',
                {
                    src: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
                    class: 'logo'
                }), h('ul', { class: 'nav-items' }, ...navList))
    }
}