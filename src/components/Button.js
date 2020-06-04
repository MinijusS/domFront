import { h, Component } from '../vdom';
export default class Button extends Component {
    constructor(props) {
        super(props);        
    }

    render() {
        return h(
            'button',
            {
                class: this.props.class,
                click: this.props.click
            }, this.props.name);
    }
}