import { h, Component } from '../vdom';
export default class Spinner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return h(
            'div',
            {
                class: this.props.class,
            });
    }
}