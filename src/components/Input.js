import { Component, h } from "../vdom";

export default class Input extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return h('input', {class: this.props.class, placeholder: this.props.placeholder, keyup: this.props.handler});
    }
}