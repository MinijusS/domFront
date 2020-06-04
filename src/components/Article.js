import { Component, h } from "../vdom";
import Button from "./Button";

export default class Article extends Component {
    constructor(props) {
        super(props);
        this.deleteHandler = this.deleteHandler.bind(this);
    }

    deleteHandler() {
        this.props.deleteHandler(this.props.id);
    }

    render() {
        return h('article', {},
            h('div', { class: 'left-side' },
                h('h2', {}, this.props.title),
                h('p', {}, this.props.body)),
            h('div', { class: 'right-side' },
                h(Button,
                    {
                        name: 'Delete',
                        class: 'btn btn-delete',
                        click: this.deleteHandler
                    })
            )
        )
    }
}