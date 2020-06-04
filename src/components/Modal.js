import { h, Component } from '../vdom';
import Button from './Button';

export default class Modal extends Component {
    constructor(props) {
        super(props);
        
        this.state.update = { title: this.props.title, body: this.props.content };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.handleBody = this.handleBody.bind(this);
    }

    handleTitle(e) {
        this.state.update.title = e.target.value;
    }

    handleBody(e) {
        this.state.update.body = e.target.value;
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.handler(this.state.update, this.props.id);
    }

    render() {
        return h(
            'div',
            {
                class: 'modal-popup'
            },
            h('input', { class: 'form-input', keyup: this.handleTitle, value: this.props.title }),
            h('textarea', { class: 'form-input', keyup: this.handleBody }, this.props.content),
            h(Button, { class: 'btn btn-update', name: 'Update Article', click: this.handleSubmit }))
    }
}