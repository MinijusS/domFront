import { h, Component } from '../vdom';

export default class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return h(
            'button',
            {
                class: this.props.className,
                click: this.props.onClick
            }, this.props.name);
    }
}