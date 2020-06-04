import { Component, h } from "../vdom";
import Button from './Button';
import Input from './Input';

export default class ListItem extends Component {
    constructor(props) {
        super(props); 
        this.handler = this.handler.bind(this);
    }

    handler() {
        this.props.click(this.props.id);
    }

    render() {
        return h('li',
            {
                class: 'list-item'
            }, h('a', {class: this.props.class, click: this.handler }, this.props.item))
    }
}