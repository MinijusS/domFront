import { Component, h } from "../vdom";

export default class Input extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return h('input', 
        {
            keyup: this.props.keyup, 
            class: this.props.class,
            value: this.props.value
        });
    }
}